# 监控

::: tip 
系统监控因考虑到兼容大体量系统的问题，所以采取 Elasticsearch 作为存储服务器。可能后期可能会考虑小企业的维护成本，添加MongoDB的支持。
:::

俗话说，没有监控的系统就是在裸奔。所以一个稍微健全点的系统，都应该上监控，至于监控的维度及粒度，那又是另外一回事了。个人认为基础系统是重中之中，所以以后moreco主要发力方向是基础设施和运维方面。至于业务方面，也会有，但是和其他系统的侧重点不一样。

## 系统监控技术架构

系统监控采用如下技术架构

<img :src="$withBase('/img/doc/monitor-cst.jpg')" alt="系统监控架构图">

通过嵌入到应用中的 monitor-sdk 采集应用运行信息。然后将采集到的信息发送到Rabbit MQ。DataHandler 处理Rabbit MQ消息，扫描报警规则，存入 Elasticsearch， 同时更新 RDS 数据库中的状态信息。monitor-query 服务提供监控信息的查询服务。

## 接入方法

* 1.在监控管理平台创建基本的项目、应用信息。

* 2.在目标应用中引入SDK 

```xml
<dependency>
    <groupId>xyz.weechang</groupId>
    <artifactId>moreco-monitor-agent</artifactId>
    <version>${mereco.version}</version>
</dependency>
```                   

* 3.配置监控参数

* 接口调用方式上报数据：

```yaml
moreco:
  monitor:
    proCode: xxx
    appCode: xxx
    dataSend: 1
    dataSendUrl: https://monitor-data.weechang.xyz
```                                                                                                                                                                  

* 只发Rabbit MQ 消息方式上报数据：
```yaml
moreco:
  monitor:
    proCode: xxx
    appCode: xxx
    dataSend: 2
    rabbitMQ:
     host: 198.168.0.1
     port: 8888
     topic: xxxx 
```  
                                                                                                                                                                                                                                                       
## 服务器监控

提供基础的如 CPU、磁盘、内存、线程、Load 等维度的监控，同时设置阈值报警和存活报警。

## JVM监控

提供JVM内存、GC、线程等维度的监控，同时提供阈值报警。

## 方法监控

通过方法埋点的方式，监控方法的调用时长及调用次数等，对方法成功及失败进行统计。

### 少量方法监控

该方式适用监控点较少的方法

```java 
@Override
@MethodAnnotation(key="dmc.dataHandle.monitorDataProcessing.dataHandle")
public void dataHandle(String dataType, String data) throws TException {
	logger.debug("监控类型：{},监控数据为:{}",dataType,data);
	MonitorDataHandle dataHandle = monitorDataHandleList.get(dataType);
	
	if (dataHandle != null){
	    dataHandle.dataHandle(data);
	}
}
```
### 批量方法监控

该方式适合监控大批量的方法,通过AOP的方式进行拦截

```java
@Aspect
@Order(1)
public class MethodIntercept {

    @Around("@annotation(io.github.weechang.moreco.monitor.sdk.annation.MethodMonitor)")
    public Object around(ProceedingJoinPoint point) throws Throwable {
        MethodMonitor method = (MethodMonitor)this.getLogAnnotation(point, MethodMonitor.class);
        if (method != null) {
            MethodInfo mi = Monitor.methodStart(method.key());

            Object result;
            try {
                result = point.proceed();
            } catch (Throwable e) {
                if (method.success()) {
                    Monitor.methodFail(mi);
                }
                throw e;
            } finally {
                Monitor.methodFinish(mi);
            }

            return result;
        } else {
            return point.proceed();
        }
    }
}
```


## 站点监控

通过建立task的方式，监控站点（端口及URL）的存活状态。

## 自定义报警

通过api调用的方式，通知项目负责人报警信息。

```java

/**
* 
* alarmKey 报警点
* alarmMsg 报警消息
*/
Monitor.alarm(String alarmKey, String alarmMsg);

```

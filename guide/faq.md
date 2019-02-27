# 常见问题

[[toc]]

## 启动 moreco-spring-boot-demo 报数据库相关错误？

demo使用的是Mysql 8.0.11 数据库，在spring-data-jpa中，Mysql 5.7 以后的 jar包就不相同了，如果你的数据库是 Mysql 5.7 以下的版本，请修改demo中的jar包依赖。

* 修改jar包依赖

将项目 moreco-spring-boot-demo 的 pom.xml 中

```xml
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.11</version>
</dependency>
```

修改为

```xml
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>5.1.46</version>
</dependency>
```

* 修改yml的 datasource 和 jpa 配置

将项目  moreco-spring-boot-demo 的 application-mysql.yml 中的以下配置项删除

```yaml
spring:
  datasource:
    ## 如为mysql 5.x版本 请注释掉以下配置
    driver-class-name: com.mysql.cj.jdbc.Driver
```


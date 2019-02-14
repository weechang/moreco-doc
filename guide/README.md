# 简介

[moreco](https://github.com/weechang/moreco) 是一个能够为小、中、大型项目提供最合适架构的一条龙生态系统。满足项目从小型到中型至大型的衍变过程。从编码到监控至运维都满足、且各种功能都插件化，支持插件间的切换。支持Spring Boot、Spring Cloud、Axon 无缝升级。

::: tip 
让天下没有难做的架构。
:::

## 技术标签
* **Vue.js** : 项目采用前后端分离方式，前端采用Vue.js。
* **eCharts.js** :  项目采用eCharts.js作为图标插件。
* **Spring Boot** : 项目基于Spring Boot 2.x作为基础版本，同时部分组件提供对非Spring应用的支持。
* **Spring Cloud** : 项目采用 Spring Cloud 作为微服务架构基础版本，后续可能会考虑支持nacos。
* **Spring Data Jpa** : 项目整体采用Spring Data Jpa实现数据持久化，为后续的AXON框架对接提供基石，同时培养开发人员的DDD意识。
* **JDK 1.8+** : 项目目前只对 JDK1.8 做了大量的测试与兼容，采用了1.8的新语法，低于1.8的可能无法正确使用。

## 项目结构
``` 
moreco
├── moreco-core ------------------------------ 核心、公共方法封装
├── moreco-data ------------------------------ ORM
|    ├── moreco-data-core -------------------- ORM 核心
|    ├── moreco-data-jpa --------------------- ORM Jpa
|    ├── moreco-data-redis ------------------- ORM Redis
|    ├── moreco-data-mongodb ----------------- ORM MongoDB
├── moreco-component ------------------------- 项目组件
|    ├── moreco-component-swagger ------------ swagger 组件
|    ├── moreco-component-rbac --------------- rbac 组件
|    ├── moreco-component-oss ---------------- 对象存储组件
|    ├── moreco-component-message ------------ 消息通知组件
|    ├── moreco-component-ops ---------------- 运维组件（日志、动态切流）
├── moreco-security -------------------------- 安全认证
├── moreco-cloud ----------------------------- spring cloud 组件
|    ├── moreco-cloud-register --------------- 服务注册中心
|    ├── moreco-cloud-config  ---------------- 配置中心
|    ├── moreco-cloud-gateway ---------------- 网关
├── moreco-demo ------------------------------ demo
|    ├── moreco-spring-boot-demo ------------- spring boot demo
|    ├── moreco-spring-cloud-demo-a ---------- spring cloud demo a
|    ├── moreco-spring-cloud-demo-a ---------- spring cloud demo b
├── moreco-monitor --------------------------- 监控中心
|    ├── moreco-core ------------------------- 基础类
|    ├── moreco-agent ------------------------ sdk、agent
|    ├── moreco-home ------------------------- 数据处理、管理
├── moreco-starter --------------------------- 启动组件
|    ├── moreco-starter-spring-boot ---------- spring boot 启动组件
|    ├── moreco-starter-spring-cloud --------- spring cloud 启动组件
├── moreco-task ------------------------------ 分布式任务管理
```

## 开发进度

<img :src="$withBase('/img/doc/moreco-doing.png')" alt="开发进度">

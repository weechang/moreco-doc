# 快速构建应用

## 创建一个 spring boot 应用

如何利用 moreco 快速创建一个spring boot 应用？

* **1.添加 moreco-spring-boot-starter 依赖**

```xml
<dependency>
    <groupId>xyz.weechang</groupId>
    <artifactId>moreco-spring-boot-starter</artifactId>
    <version>${moreco.version}</version>
</dependency>
```

* **2.添加需要用到的moreco组件**

```xml
<!-- RBAC 组件 -->
<dependency>
    <groupId>xyz.weechang</groupId>
    <artifactId>moreco-component-rbac</artifactId>
    <version>${moreco.version}</version>
</dependency>

<!-- security 组件 -->
<dependency>
    <groupId>xyz.weechang</groupId>
    <artifactId>moreco-security</artifactId>
    <version>${moreco.version}</version>
</dependency>
```


具体可参考[mreoco-spring-boot-demo](https://github.com/weechang/moreco/tree/master/moreco-demo/moreco-spring-boot-demo)

## 创建一个 spring cloud 应用

::: warning
开发中
:::

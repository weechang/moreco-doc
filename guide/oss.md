# 对象存储

::: tip 
在进行开发前，请确保您已拥有各个云平台的账号。
:::

系统支持多个平台的对象存储方式，推荐用户使用云存储来存储对象。如果是受预算限制的话，也可以使用本地存储的方式来存储对象。具体的各个平台存储的开发方式请见下列文档。现已支持存储方式如下:

[[toc]]

## 阿里云存储

使用阿里云存储请先按照以下步骤进行开发:

* 1.添加maven依赖:

```xml
<dependency>
    <groupId>io.github.weechang</groupId>
    <artifactId>moreco-oss</artifactId>
    <version>${mereco.version}</version>
</dependency>
```

* 2.添加配置：

```yaml
moreco:
  oss:
    type: 2
    aliyun:
     appId:
     appSecrete: 

```

* 3.开始使用：

```java


```

## 腾讯云存储

使用阿里云存储请先按照以下步骤进行开发:

* 1.添加maven依赖:

```xml
<dependency>
    <groupId>io.github.weechang</groupId>
    <artifactId>moreco-oss</artifactId>
    <version>${mereco.version}</version>
</dependency>
```

* 2.添加配置：

```yaml
moreco:
  oss:
    type: 2
    aliyun:
     appId:
     appSecrete: 

```

* 3.开始使用：

```java


```

## 七牛云存储

使用阿里云存储请先按照以下步骤进行开发:

* 1.添加maven依赖:

```xml
<dependency>
    <groupId>io.github.weechang</groupId>
    <artifactId>moreco-oss</artifactId>
    <version>${mereco.version}</version>
</dependency>
```

* 2.添加配置：

```yaml
moreco:
  oss:
    type: 2
    aliyun:
     appId:
     appSecrete: 

```

* 3.开始使用：

```java


```

## 又拍云存储

使用阿里云存储请先按照以下步骤进行开发:

* 1.添加maven依赖:

```xml
<dependency>
    <groupId>io.github.weechang</groupId>
    <artifactId>moreco-oss</artifactId>
    <version>${mereco.version}</version>
</dependency>
```

* 2.添加配置：

```yaml
moreco:
  oss:
    type: 2
    aliyun:
     appId:
     appSecrete: 

```

* 3.开始使用：

```java


```

## 本地存储

该情况适合简单业务的情况，在预算有限的情况下，可以采用该方式做对象存储。在大多数情况下不推荐该模式。

::: tip 
此处默认服务器为CentOS，且装有nginx的情况下，其他情况请根据不同情况进行灵活处理。
:::

使用本地存储请按照以下步骤进行开发:

* 1.域名解析：

先配置域名解析，将域名解析到应用服务器。如，我想要将 img-morceo.weechang.xyz 作为我的静态图片域名。同时我的业务服务器公网IP是 112.168.0.1。

那么我就应该将 img-morceo.weechang.xyz 的域名解析到 112.168.0.1上

* 2.nginx配置：

完成域名解析后，就需要配置nginx的反向代理了。我准备把文件存储到 /web/img/ 目录下。那么我的nginx配置则为：

```
// 该解析仅为展示用，具体情况，具体分析
server {
    listen 80;
    server_name  img-morceo.weechang.xyz;
    access_log  /web/nginx/logs/img-morceo.weechang.xyz.log;
    location / {
        root /web/img/;
        expires 30d;
    }
}
```

* 3.添加maven依赖:

```xml
<dependency>
    <groupId>io.github.weechang</groupId>
    <artifactId>moreco-oss</artifactId>
    <version>${mereco.version}</version>
</dependency>
```

* 4.添加配置：

```yaml
moreco:
  oss:
    type: 2
    local:
     appId:
     appSecrete: 

```

* 5.开始使用：

```java


```



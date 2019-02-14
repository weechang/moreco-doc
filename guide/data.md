# Data

**[moreco-data](https://github.com/weechang/moreco/tree/master/moreco-data)**

::: tip 
该模块主要封装数据库访问。以 spring data 为基石，进行定制化开发。
:::

## core

**[moreco-data-core](https://github.com/weechang/moreco/tree/master/moreco-data/moreco-data-core)**

数据库核心模块，所有的持久化操作都根据其做差异化拓展。为了兼容业务变更带来的架构变更，务必优先使用该模块的数据库操作类，以适应其带来的影响。

## Jpa

**[moreco-data-jpa](https://github.com/weechang/moreco/tree/master/moreco-data/moreco-data-jpa)**

JPA 支持的数据库操作，Jpa的优点不用我多说了吧。推荐关系型数据库优先使用Jpa操作（如果需要考虑到后续系统架构逐步迁移到 Axon 的话）。

## Redis

**[moreco-data-redis](https://github.com/weechang/moreco/tree/master/moreco-data/moreco-data-redis)**

Redis 数据库操作，封装基础的 Redis 持久化操作，及 Redis 分布式锁（分布式锁目前暂未提供）。

## Mongodb

**[moreco-data-mongodb](https://github.com/weechang/moreco/tree/master/moreco-data/moreco-data-mongodb)**

::: warning
开发中
:::

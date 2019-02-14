# 安全

::: tip 
目前安全框架采用 spring security 作为安全校验框架，安全验证模式为JWT模式。后续将会接入更过安全校验框架和验证模式。
:::

## 快速使用

* 1.添加依赖

```xml
<dependency>
    <groupId>xyz.weechang</groupId>
    <artifactId>moreco-security</artifactId>
    <version>${mereco.version}</version>
</dependency>
```   

* 2.实现接口

本security组件，未实现用户查询及权限校验接口。此处需根据自身业务情况实现本接口。此处以 moreco-rbac 为例说明如何实现。

```Java
/**
 * 自己实现Security
 *
 * @author zhangwei
 * date 2019/2/13
 * time 15:04
 */
@Service
public class MyMorecoSecurityService implements MorecoSecurityService {

    @Autowired
    private UserDao userDao;

    /**
     * 根据用户名和请求路径，判断是否有访问权限
     *
     * @param username 用户名
     * @param url      请求路径
     * @return 是否有访问权限
     */
    @Override
    public boolean isUrlPermissionByName(String username, String url) {
        return true;
    }

    /**
     * 根据用户名查询用户信息
     *
     * @param username 用户名
     * @return 用户信息
     */
    @Override
    public MorecoSecurityUser findFirstByUsername(String username) {
        MorecoSecurityUser securityUser = new MorecoSecurityUser();
        // 此处应根据自身业务情况进行
        User user = userDao.findFirstByUsername(username);
        if (user != null) {
            securityUser.setUsername(user.getUsername());
            securityUser.setPassword(user.getPassword());
        }
        return securityUser;
    }
}
```

::: danger 
该步骤不能省略，因为security内部并未实现这两个方法。
:::

* 3.配置security

配置application.yml。添加如下配置

```yml
moreco:
  security:
    # 不需要授权的路径
    noAuthPaths: []
    # token过期时间--单位（S）
    tokenExpiredTime: 1800
```

## 配置释义

| 配置名 | 释义 | 必填项 |
| ----- | ---- | ----- |
| moreco.security.noAuthPaths | 不需要授权的路径 | N |
| moreco.security.tokenExpiredTime | token过期时间--单位（S） | N |

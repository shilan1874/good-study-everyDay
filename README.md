## 远程仓库
##### 添加远程仓库地址
```git
git remote add origin [地址]
```
##### 查看远程仓库地址
```git
git remote -v
```
 
---
## 账号密码
##### 重置
```git
git config --local --unset credential.helper
git config --global --unset user.name  
git config --global --unset user.email
```

##### 查看账号邮箱
```git
git config user.name  
git config user.email
```

##### 清除缓存
```git
git config --global credential.helper store
```

----

## git 报错
**1. unableto access 'xxx.git': OpenSSL SSL_read: SSL_ERROR_SYSCALL, errno 10053** 


**2. remote: Permission to shilan1874/good-study-everyDay.git denied to shilan96.**
凭证失效，要删除window里面的凭证。


**3. fatal: unable to access 'https://github.com/shilan1874/good-study-everyDay.git/': The requested URL returned error: 403**

**4. ssh: Could not resolve hostname ssh.github.com: Name or service not known**
step1. ping github.com
获取到github.com的ip为192.30.252.128

step2. 在/etc/hosts（在系统文件夹里面找）中添加一行如下:
192.30.252.128 github.com

**5. Please make sure you have the correct access rights
and the repository exists**
切换ssh路径
```git
git remote set-url origin git@github.com:lut/EvolutionApp.git
```


----

## ssh
##### 1. 生成 ssh key
```git
ssh-keygen -t rsa -C "IWindow_personnal_publicKey"
```

##### 2. 在 github 添加刚刚生成的 ssh key
.pub 文件里面的内容复制到 github 新建的 ssh key 那里

把你的密钥加入sshAgent代理中： 
```git
```

添加密钥 id_rsa_bcount：： 
```git
ssh-add id_rsa_bcoun
```

测试ssh： 
```git
ssh -T git@github.com
```


---

#### 参考
1. [修改.git/cofig中的url](https://www.jianshu.com/p/f44ec31be799)
2. [在git的.config配置中写入账号和邮箱](https://stackoverflow.com/questions/44297129/remote-permission-to-denied-to-user2)
3. OpenSSL SSL_read: Connection was reset, errno 10054[解除ssl验证](https://www.cnblogs.com/lvhuayan/p/14538106.html)
```git
git config --global http.sslVerify "false"
```
4. [git使用中遇到的remote：Permission to xxx denied to xxx问题如何解决](https://blog.csdn.net/lwc863481702/article/details/78542727)

**请注意, 本插件的配置文件中包含秘钥, 请把您的hexo博客源文件托管到私有仓库里。**

# 开发目的

最根本的原因是某些主机,比如Github,禁止百度爬虫访问网站,导致网站无法被百度收录。

除此之外, 使用主动推送会达到如下效果:

- 及时发现：可以缩短百度爬虫发现您站点新链接的时间，使新发布的页面可以在第一时间被百度收录-
- 保护原创：对于网站的最新原创内容，使用主动推送功能可以快速通知到百度，使内容可以在转发之前被百度发现

# 实现原理

推送功能的实现,分为两部分:

- 新链接的产生, `hexo generate` 会产生一个文本文件,里面包含最新的链接
- 新链接的提交, `hexo deploy` 会从上述文件中读取链接,提交至百度搜索引擎

# 如何使用

首先,需要安装本插件

`npm install hexo-baidu-url-submit --save`

然后, 在博客的根目录下, 把以下内容放到`_config.yml`文件中:

```yml
baidu_url_submit:
  count: 3 ## 比如3,代表提交最新的三个链接
  host: www.hui-wang.info ## 在百度站长平台中注册的域名
  token: your_token ## 请注意这是您的秘钥, 请不要发布在公众仓库里!
  path: baidu_urls.txt ## 文本文档的地址, 新链接会保存在此文本文档里
```

其次, 加入新的deployer:

```yml
deploy:
- type: baidu_url_submitter
```

最后,记得查看_config.ym文件中url的值, 必须包含www子域名, 比如:

```yml
# URL
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: http://www.hui-wang.info
root: /
permalink: :year/:month/:day/:title/
```
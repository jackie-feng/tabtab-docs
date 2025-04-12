# 数据备份同步

左侧侧边栏 > 底部 Settings > 备份&同步


## 版本号

你每次保存/删除/排序, 都会更新你的空间版本, 页面顶部会显示你的版本号, 和最后更新时间.

## 手动备份

你所有空间数据会被导出一个文件. 你也可以手动导入文件, 覆盖本地的配置. 

## 远程同步 

### Github Gist

注册 [Github](https://github.com) 后, 点击右上角头像 > setting 进入设置页. 

在 Settings > Developer Settings > Personal access tokens > Tokens(classic) 中可以管理自己的 github token.

点击 Generate new token(classic) , 设置 token 名和有效期, 权限部分仅需**勾选 gist**

得到 token 后, 回填到 TabTab 本地即可.


### WebDav (坚果云)

WebDav 本身是一个开放的协议, 但是部分云盘未必支持该协议. 目前测试能使用的是坚果云. 坚果云有一定免费存储空间, 对于存储 TabTab 标签页数据, 妥妥足够了.

注册坚果云后, 需要将坚果云的 WebDav 账密填到 TabTab. 坚果云 WebDav 开通方式: [坚果云WebDav](https://help.jianguoyun.com/?p=2064)


## 自动同步时机

在以下时机, TabTab 会触发一次同步.

* 当你每次打开 TabTab 后
* 当你完成了拖拽/新建/删除等操作, 你的空间版本递增后

每一次自动同步, 会比较本地和远程的版本号:

* 本地更新, 本地覆盖远程
* 远程更新, 远程覆盖本地

> **如果你习惯使用 Github Gist 的话, Github 天然的版本特点, 自带回溯任意版本的能力. 你的每一次操作更加安全, 即使数据误删, 也可以在 github gist 历史版本中找回.**
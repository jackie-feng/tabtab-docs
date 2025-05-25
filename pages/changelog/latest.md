# Release v0.4.13

* 优化一键保存排序问题

---

# Release v0.4.12

* 修复 WebDAV 自动同步

---

# Release v0.4.11

* 主机权限调整:
  * 不再申请全部主机权限, 在你设置 WebDAV 时按需请求授权.
  * 坚果云作为推荐的 WebDAV 存储, 默认自动申请权限.
* 首页增加批量删除操作.
* 标签卡片样式扩充为 **普通** 和 **紧凑** 两种

--- 

# Release v0.4.10
  
* 拆分出两个应用: **TabTab 起始页** & **TabTab 标签页管理工具**
  * **TabTab 起始页** 默认接管浏览器的新标签页.
  * **TabTab 标签页管理工具** 是否接管新标签页是可选项, 但是接管状态下没有**TabTab 起始页**纯净 (地址栏会显示插件地址).

--- 

# Release v0.4.9
  
* 调整部分 UI

---

# Release v0.4.8

* 支持从 Toby 一键导入 .
  * (Toby导出的数据里没有 Icon, 也没有拆分空间, 所以迁移不是很完美)
* 部分 UI 调整.
* 二次确认 Dialog 支持快捷键.

---  

# Release v0.4.7

* 调整部分 UI

---

# Release v0.4.6

* 不再**强制**接管新标签页, 你可以在设置(Settings > Set as default new tab)中自行设定. 
  * firefox 暂时不支持自定义设置, 默认接管新标签页.
* 增加快速打开 TabTab 的快捷键 (Settings > shortcuts). 当 TabTab 不是默认新标签页时, 你可以使用快捷键快速打开 TabTab.
* 部分 Dialog 弹窗增加快捷键
* 增加空间切换快捷键
  * cmd + shift + up/down
  * ctrl + shift + up/down
  * alt + up/down
* 支持改标签页 url
* 右侧栏能力增强, 支持快速 Tab 切换 (cmd+click or ctrl+click), 支持关闭, 支持顺序/逆序调整.
* 页面样式优化
# Node.js & NPM

## Notes

### Node.js

Node.js 简单来说就是一门弱类型动态语言，但其实这个说法并不严谨。
Node.js 应该是一个运行环境，采用了 C++ 编写的 V8 引擎，它可以解释并执行 JS，比如可以在命令行使用 `node scripts.js`，Node.js 会解释并执行。
Node.js 以单线程运行，使用非阻塞 I/O 调用，低层使用 libuv 来处理异步事件。

建议使用 nvm 安装 Node.js 的最新的稳定版，这样可以避免一些权限问题，也可以方便的管理 Node.js 的版本。

### NPM

NPM(Node.js Package Manager) 是 Node.js 的包管理器。

对于前端来说曾经我们使用 Bower, Components 甚至 copy&paste 这种安装管理包的方式，但是现在推荐不论前后端的代码都尽量使用 NPM 安装。

NPM 为我们解决了包安装和包依赖管理的问题。

一些常用的 NPM 命令

* `npm init` 初始化一个项目，会生成一个 package.json 的文件

* `npm install` 会安装 package.json 所有的依赖

* `npm install xx@x.x.x` 安装某个指定版本的包

* `npm uninstall xxx` 卸载包

* `npm install xx --save` 安装包并写入 package.json 的 dependencies

* `npm install xx --save-dev` 安装包并写入 package.json 的 devDependencies

* `npm i xx -g` 安装一个全局的包，可能是命令行工具

* `npm outdated` 打印出有可以更新的包

* `npm update` 更新所有可以更新的包

NPM 本地安装的包会在当前目录 node_modules 下面，当你在代码中去引入安装的包时，Node.js 会首先在 当前目录的 node_modules 下找，
如果找不到就会一直往上级目录递归寻找，直到最后找到根目录下的 node_modules。

### Semver

semver(Semantic Versioning) 即语义化版本，现在几乎所有的 NPM 项目都遵循这个标准。

semver 的版本格式为：主版本号.次版本号.修订号

* 主版本号：当你做了不兼容的 API 修改。

* 次版本号：当你做了向下兼容的功能性新增。

* 修订号：当你做了向下兼容的问题修正。

### Gulp

Gulp 基于 Node.js 的自动化构建工具，现在大部分项目和库都会使用
Gulp 的一大特点就是使用了 Node.js 中的 stream，使得构建的速度更快，避免了创建中间文件

## Source & Reference

[深入浅出 Node.js](http://book.douban.com/subject/25768396/)

[nvm](https://github.com/creationix/nvm)

[How NPM Works](https://docs.npmjs.com/how-npm-works/npm3)

[Awesome NPM](https://github.com/sindresorhus/awesome-npm)

[Semver](http://semver.org/lang/zh-CN/)

[Semver Calculator](http://semver.npmjs.com/)

[Gulp](http://gulpjs.com/)

[Stream Handbook](https://github.com/jabez128/stream-handbook)

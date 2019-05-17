# React
从零开始webpack+react+react-redux全家桶
1、创建项目文件
2、使用到的技术栈
 ```
react 15.6.1
react-router-dom 4.2.2
redux 3.7.2
webpack 3.5.5
```
3、目录说明
```
│  .babelrc                          #babel配置文件
│  package-lock.json
│  package.json
│  README.MD
│  webpack.config.js                 #webpack生产配置文件
│  webpack.dev.config.js             #webpack开发配置文件
│  
├─dist
├─public                             #公共资源文件
└─src                                #项目代码
    │  index.html                    #index.html模板
    │  index.js                      #入口文件
    │  
    ├─component                      #组件仓库
    │  └─Hello
    │          Hello.js
    │          
    ├─pages                          #页面配置
    │  ├─Counter
    │  │      Counter.js
    │  │      
    │  ├─Home
    │  │      Home.js
    │  │      
    │  ├─Page1
    │  │  │  Page1.css                #页面样式js配置
    │  │  │  Page1.js
    │  │  │  
    │  │  └─images                    #页面图片
    │  │          brickpsert.jpg
    │  │          
    │  └─UserInfo
    │          UserInfo.js
    │          
    ├─redux                            #redux配置
    │  │  reducers.js
    │  │  store.js
    │  │  
    │  ├─actions
    │  │      counter.js
    │  │      userInfo.js
    │  │      
    │  ├─middleware                           
    │  │      promiseMiddleware.js
    │  │      
    │  └─reducers
    │          counter.js
    │          userInfo.js
    │          
    └─router                        #路由文件
            Bundle.js
            router.js
```
**init初始化项目**

1、创建react-demo文件夹并进入项目
```
cd react-demo
```
2、init npm 初始化项目信息
```
npm init 根据package提示填写项目基本信息
{
  "name": "demo",
  "version": "1.0.0",
  "description": "this is react demo",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack --mode development",
    "build": "webpack --mode production"
  },
  "author": "demo",
  "license": "ISC",
  "dependencies": {},
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-loader": "^8.0.6",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-0": "^6.24.1",
    "webpack": "^4.31.0",
    "webpack-cli": "^3.3.2"
  }
}

```
**webpack配置**
1、全局按照webpack、webpack-cli,项目按照webpack依赖
```
npm i webpack webpack-cli -g
npm i webpack webpack-cli --save-dev
```
2、根据webpack文档编写基础的配置文件
新建webpack开发配置文件  

**mkdir webpack.dev.config.js**
```
##webpack.dev.config.js

const path = require('path');

module.exports = {
 
    /*入口*/
    entry: path.join(__dirname, 'src/index.js'),
    
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    }
};
```
3、使用webpack编译文件
  新建入口文件 ```mkdir  src  && mkdir ./src/index.js```
  然后再index.js添加内容 
```
document.getElementById('app').innerHtml ="Hello world "
```
 执行  ```webpack   --config webpack.dev.config.js```
4、新建dist/index.html
```mkdir ./dist/index.html```
```
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<div id="app"></div>
<script type="text/javascript" src="./bundle.js" charset="utf-8"></script>
</body>
</html>
```
5、进行测试index.html
![image.png](https://upload-images.jianshu.io/upload_images/16299671-d19b97a0560372ba.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


考虑到项目中会用到ES6/ES7等新语法来编写代码，我们需要把他转化为ES5,这时候就需要我们安装Babel转码
大概需要用到几个Babel依赖：
 babel-loader配置（利用babel-loader等包实现es6转es5语法）
babel-core  调用Babel的API转码
```
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react  babel-preset-stage-0
```
新建babel配置文件.babelrc
```mkdir .babelrc```
编写.babelrc文件
```
{
      "presets": [
        "es2015",
        "react",
        "stage-0"
      ],
      "plugins": []
    }
```
这时需要我们修改webpack.dev.config.js,增加babel-loader相关配置
```
     /*src以.js结尾的文件，要使用babel解析*/
    /*cacheDirectory是用来缓存编译结果，下次编译加速*/

    mode: 'development',
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }]
    }
```
修改好后，需要简单测试一下
修改index.js，看是否转化成Es5

**下面就开始正式进入React**

1、安装react 
```npm i react react-dom --save-dev```
2、修改index.js
```
import React from 'react'
import ReactDom from 'react-dom'
ReactDom.render(
  <div>Hello,world!</div>,document.getElementById('app')
)
```
3、执行打包命令  ```webpack --config webpack.dev.config.js```
成功输出'hello world!'说明react入口配置已经ok了，然后我们开始进行下一步操作react组件编写
4、编写一个HelloWorld组件
```新建 mkdir  ./scr/component/HelloWorld/HelloCom.js```
```
#HelloCom。js
import React,{Component} from 'react'
export default class Hello extends Component{
  render(){
    return (
      <div>
        Hello world！
      </div>
    )
  }
}
```

5、修改index.js
```
import React from 'react'
import ReactDom from 'react-dom'
import HelloWorldCom from './component/HelloWorld/HelloCom'
ReactDom.render(
  <HelloWorldCom/>,document.getElementById('app')
)
```
6、ok了，现在一个简单的组件已经制作完成了 


下面我们就开始写一个路由
首先要用到的就是 react-router
1、安装 ```npm install react-router -s```
2、```mkdir src/router && mkdir src/router/router.js```
```
#router.js 



import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,Link
} from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
const getRouter = () => {
  <Router>
    <div>
      <ul>
        <li>
          <Link to='/'>首页</Link>
        </li>
        <li>
          <Link to='/About'>Page1</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path ='/' component={Home}></Route>
        <Route exact path ='/About' component={About}></Route>
      </Switch>
    </div>
  </Router>
}
export default getRouter;
```
7、```mkdir  pages/Home/Home && pages/About/About```两个界面
```
### Home.js
import React, { Component } from 'react'
export default class Home extends Component{
  render(){
    return(
      <div>this is home page</div>
    )
  }
}


##About.js


import React,{Component} from 'react'
export default class About extends Component{
  render(){
    return(
      <div>this is about page</div>
    )
  }
}
```

8、修改index.js的入口配置
```
import React from 'react'
import ReactDom from 'react-dom'
import getRouter from './router/router'
ReactDom.render(
  getRouter(),document.getElementById('app')
)
```

9、配置一个web服务器启动项目   类似：http://localhost:8080

a、使用webpack-dev-server配置
b、```npm i webpack-dev-server -g   ```  //需要配置全局
``` npm i webpack-dev-server --s```
c、修改webpack.dev.config.js
```
devServer: {
        contentBase: path.join(__dirname, './dist')
    }
```
d、然后执行 ```webpack-dev-server --config webpack.dev.config.js```
就会看到效果了
![image.png](https://upload-images.jianshu.io/upload_images/16299671-e2a134fa7ac4083f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
f:好了执行到这一步就说明我们的环境已经搭建好了
然后命令优化，在package.js中加入 ```'start' :' webpack-dev-server --config webpack.dev.config.js'```
然后命令行执行```npm start```项目启动起来了
10、运行到这时，我们会发现，修改代码不会自动刷新，使用框架都会自动刷新 这时候我们就要用到webpack的模块热替换hot module
修改package.js
```"start": "webpack-dev-server --config webpack.dev.config.js --color --progress --hot"```
这时你修改组件内容还是没有修改，这时我们还需要修改index.js添加hot更新module
```
if (module.hot) {
    module.hot.accept();
}

####也可以通过修改webpack.dev.config配置来实现hot
const webpack = require('webpack');
devServer: {
    hot: true,
    port: 8080,
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
]
```
接下来就要结合redux了
***Redux***
想要详细了解redux可以去阅读阮一峰前辈的[Redux 入门教程（一）：基本用法](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)

1、安装redux
```
npm i  redux --save-dev
```
2、设置目录
```
新建文件夹mkdir src/redux && mkdir src/redux/actions/action.js && mkdir src/redux/store/store.js &&mkdir src/reducers/coun.js

```




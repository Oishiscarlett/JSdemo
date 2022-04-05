# JSdemo
> JS练手小项目

## 01 typing-game
布局知识点：
1. flex很适合用来居中
2. 游戏结束之后的面板先隐藏，游戏结束之后再将display设置为flex
3. 一个简单的css过渡动画

JS知识点：
1. 添加监听的方式
2. 按钮添加点击事件

## 02 memory-card
布局知识点：
1. transform属性的应用：卡片翻转(详见rotate-card)
2. transition 过渡
3. 垂直水平居中

### transition 过渡
```js
/* property name | duration | timing function | delay */
transition: margin-right 4s ease-in-out 1s;
```
* 大部分属性都支持过渡效果，注意过渡时必须是从一个有效数值向另外一个有效数值进行过渡（auto不是有效数值）

### transform 属性
```js
/* 设置元素的子元素处于3d空间中 */
transform-style: preserve-3d;
```

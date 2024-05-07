# 总结
+ react 没有类似 vue 的 watch，但是这些生命周期函数可以替代
+ react 子 -> 父可以直接把函数通过 props 丢过去，子组件调用可以自动回调到父组件。vue 中是用自定义事件
+ react 循环通过 map，里面 return 的 html 标签不需要加 ”“，直接当成 jsx 语法来写，用到 js 要用 {}。vue 则是通过 html 标记。
+ react 生命周期的参数需要理解一下，比如 componentDidUpdate()的参数是 prevState, prevProps, snapshot，顺序不能变，可以拿到更新前的数据，有些可以拿到更新后的数据。生命周期函数参考 https://zh-hans.react.dev/reference/react/Component
+ 现在还不能兄弟间传递数据，所以我们把状态提升到顶层
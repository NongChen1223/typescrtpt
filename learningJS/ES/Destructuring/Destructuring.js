let obj = { p:['hello',{y:'word'}] }
console.log('obj',obj)
// let { p:[x,{y}] } = obj
// console.log('p',p) //注意此时p是没有进行赋值的 p是模式 不是变量 因此不会被赋值 如果p也要被赋值 可以写以下
// console.log(`p:${p}  x:${x} y:${y}`) //p is not defined x：hello y:word
let { p,p:[x,{y}] } = obj
console.log(`p:${p}  x:${x} y:${y}`) // p:hello,[object Object]  x:hello y:word
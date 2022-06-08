/* call */
let obj = {
  name: "call的",
};
// let name = "草"; //在全局下使用let声明的变量是不会被挂载到window上 而是形成了一个块级作用域 var则会挂载到window上
// var name = '草';
function allName(firstName, lastName) {
  console.log("--- this ---", this);
  console.log(`全名是${firstName}/${this.name}/${lastName}`);
}
allName("我是", "前端"); //全名是我是/undefined/前端
allName.call(obj, "我是", "前端"); // allName.call(obj, "我是", "前端"); //全名是我是/call的/前端
/* call 接受多个参数 第一个给指定的this值 后面的则是函数本身的参数 */

/* apply */
allName.apply(obj, ["我是", "a前端"]); //allName.apply 全名是我是/call的/a前端
/* 与call一样 只是后面参数是以数组的形式去接收 */

/* bind */
let bindObj = {
    name:'一个'
}
function bindAllName(firstName, lastName){
    console.log('--- this ---',this)
    console.log(`全名是${firstName}/${this.name}/${lastName}。我的座右铭是${flag}`)
}
bindAllName.bind(bindObj)//不会执行
let fn = bindAllName.bind(obj)


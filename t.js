/*
 * @Author: your name
 * @Date: 2021-03-04 10:29:52
 * @LastEditTime: 2021-03-04 11:15:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-app/t.js
 */

function Animal(name){
    this.name=name||'Animal'
    this.study=()=>{
        cout<<'学习 ';

    }
    this.sleep=function(){
        console.log(this.name+'正在睡觉')
    }
}
Animal.prototype.eat=function(food){
    console.log(this.name+'正在吃'+food)
}
//1.原型链继承
    // function Cat(name){
    //     this.name=name||'a'

    // }
    // Cat.prototype=new Animal()
    // //Cat.prototype.name='cat'
    // var cat=new Cat('cat')
    // cat.sleep()
// 2.构造继承
// function Cat(name){
//     Animal.call(this)
//     this.name=name
// }
// var cat=new Cat('cat');
// cat.sleep()
//3.组合继承
// function Cat(name){
//     Animal.call(this)
//     this.name=name||'a'
// }
// Cat.prototype=new Animal()
// //Cat.prototype.constructor=Cat
// console.log(Cat.prototype.constructor)
// var cat=new Cat('cat')
// cat.sleep()
//4.寄生组合继承
function Cat(name){
    Animal.call(this)
    this.name=name||'a'
}
;(function(){
    var Super=function(){}
    Super.prototype=Animal.prototype
    Cat.prototype = new Super()
})
var cat=new Cat('cat')
cat.sleep()
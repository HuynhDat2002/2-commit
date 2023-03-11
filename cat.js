function Cat(name){
    this.name=name;
    this.stomach=[];
}
Cat.prototype.eat=function(mouse) {
    this.stomach.push(mouse);
}

var Mouse=require('./mouse.cjs');

let cat=new Cat('tom');

cat.eat('mouse');

function sayHi(){
    console.log('Hello');
}

// sayHi();
// console.log(cat);
module.exports=Cat;
//comment

function Cat(name){
    this.name=name;
    this.stomach=[];
}
Cat.prototype.eat=function(mouse) {
    this.stomach.push(mouse);
}

var Mouse=require('./mouse');

let cat=new Cat('tom');

cat.eat('mouse');

console.log(cat.stomach);

module.exports=Cat;
//comment

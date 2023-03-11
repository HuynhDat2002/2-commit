var Mouse=require('./mouse');

function Cat(name){
    this.name=name;
    this.stomach=[];
}
Cat.prototype.eat=function(mouse) {
    if(mouse instanceof Mouse){
    this.stomach.push(mouse);
    }else{
        throw new Error('Cat just can eat only mouse!');
    }
}


// let cat=new Cat('tom');

// cat.eat('mouse');

// function sayHi(){
//     console.log('Hello');
// }

// sayHi();
// console.log(cat);
module.exports=Cat;
//comment

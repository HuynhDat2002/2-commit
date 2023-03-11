
var Cat =require('./cat');
var Mouse=require('./mouse');
var Horse = require('./horse');

cat=new Cat('tom');
mouse=new Mouse('jerry');
horse=new Horse('Xich tho');

mouse.eat();

cat.eat(mouse);
try{
    cat.eat(horse);

}catch(err){
    console.log('err');
}
console.log(cat);
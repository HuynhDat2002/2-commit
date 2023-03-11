
function Mouse(name){
    this.name=name;
    this.hungry=true;
}
Mouse.prototype.eat=function(){
    this.hungry=false;
};
let mouse=new Mouse('mickey');

mouse.eat();


let mouse2=new Mouse('jerry');
// import chalk from "chalk";
// Mouse.prototype.sayHi=function(){

//     console.log('hi. ' +chalk.green('im Dat'));
// }
module.exports=Mouse;

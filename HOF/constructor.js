// if we write this.something inside a function then it will be considered as constructor otherwise a normal function

// function SuperHero(realName,heroName){
//     this.realName = realName;
//     this.heroName = heroName;
// }
// let SuperHero1 = new SuperHero("Gangadhar","Shaktimann")
// console.log(SuperHero1);



function Counter(){
    let count = 0;
   this.increment =function(){count++};
   this.print = function(){
     console.log(count);
   }
}

let counter1 = new Counter();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.print();

let counter2 = new Counter();
counter2.increment();
counter2.print();
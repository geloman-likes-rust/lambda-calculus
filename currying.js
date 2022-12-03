const Currying = a => b => a;
console.log(Currying(1)(2));
console.log(Currying(2)(1));
console.log(Currying(3)(0));

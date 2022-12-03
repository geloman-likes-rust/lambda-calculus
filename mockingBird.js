const Identity = a => a;
const mockingBird = f => f(f);
console.log(mockingBird(Identity));
/*
mockingBird(mockingBird); // MockingBird of MockingBird is stack overflow
*/

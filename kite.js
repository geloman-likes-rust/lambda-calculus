const Identity = a => a;
const Kestrel = a => b => a;

const Kite = Kestrel(Identity);
console.log(Kite(1)(2)) //Kite returns second input

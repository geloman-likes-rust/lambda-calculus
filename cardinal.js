const Identity = a => a;
const MockingBird = f => f(f);
const Kestrel = a => b => a;

const Cardinal = f => a => b => f(b)(a);
console.log(Cardinal(Kestrel)(Identity)(MockingBird)) // C(K)(I)(M) == M

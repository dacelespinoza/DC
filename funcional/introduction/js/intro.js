//Imperativa
const hola= "Diana";
const decirHola = () => {
    ////console.log(`Hi ${hola}`);
}
decirHola();

//Impura
////const dHi = (name) => `Hi ${hola}`;
////console.log( dHi("Cecilia") );

//Pura
////const dHi = (n) => `Hi ${n}`;
////console.log( dHi("hola") );

const sum = (a,b) => a + b;
const sum2 = (a,b) => a - b;
const suma = (a,b,rrrr) => rrrr (a,b);

console.log(suma(2,2,sum2));

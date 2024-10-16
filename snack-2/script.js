const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'
const names = people.map((item,index)=>{return item.name;})

console.log(`Risulato: ${names.join(", ")}`);
//console.log(`Risultato: ${names.join(", ")}`);


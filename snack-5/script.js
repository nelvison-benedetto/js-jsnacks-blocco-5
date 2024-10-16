const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const onlypairs = nums.filter((item,index)=>{return item%2==0;});
console.log(`Risultato: ${onlypairs.join(", ")}`);
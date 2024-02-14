const scale = generateArray();

console.log(scale);
console.log(scale.indexOf(2));

function generateArray() {    
let array = [];
for (let i=0;i<8;i++){
array.push(1);
}
let randomIndex = Math.floor(Math.random() * 8);
array[randomIndex] = 2;
return array;
}
const fruits =["Banana","Orange","Mango","Water Melon"]
console.log(`1. First Element :${fruits[0]} , Last Element : ${fruits[3]}`);
fruits.splice("Banana",0,"Papaya");
console.log(`2. Added First elemnet :${fruits}`);
fruits.splice(3,1);
console.log(`3. Remove Third Element :${fruits}`);
fruits.push("Pineapple");
console.log(`4. Added Last Elelment : ${fruits}`);
fruits.splice(3,0,"Dragon Fruit");
console.log(`5. Inserting Element : ${fruits}`);
fruits.splice(2,1,"Kiwi");
console.log(`6 Replacing Element : ${fruits}`);
console.log("7. All array Element :" + fruits);
console.log(`8. 1 to 4 Index :${fruits.slice(1,5)}`);
// fruits.slice(fruits.length-3);
console.log(`9. Last three Element ${fruits.slice(fruits.length-3)} `);
console.log("10. Traverse the array using loop: ")
for(let i of fruits){
    console.log("",i);
}

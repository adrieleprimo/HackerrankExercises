let letter = "M";
let words = ["Melon", "Banana", "Strawberry"];
let i =0;
let lostQuantity = 0;
let wonQuantity = 0
for (word of words){
    if(word[i] == letter){
        wonQuantity++;
    }else{
        lostQuantity++;
    }
}
console.log(wonQuantity);
console.log(lostQuantity);
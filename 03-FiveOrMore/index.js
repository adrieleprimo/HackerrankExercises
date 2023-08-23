let prices = [100, 500, 100, 200, 50];

let sum = 0;
let value =100000;
for(price of prices){
    sum+=price;
}
if(prices.length>=5){
    for(smaller of prices){
        if(smaller < value){
            value = smaller;
        }
    }
    sum-=value;
}
console.log(sum);
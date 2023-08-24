
let sequencias = ">>>>>>>>>";
let indices = [1, 2, 3, 4, 5, 6, 7];
let i =0;
for(item of sequencias){
    if(item === ">" ){
        i++;
    } else {
        i--;
    } 
    if (i <0 ){
        i=6;
    } else if (i > 6){
        i=0;
    }
}
console.log(i);
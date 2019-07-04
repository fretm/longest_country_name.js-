//write a javascript program that accept a string and that make the first character capital if it start with k 
//eg Kforce 
//output Kforce 
//eg in put work 
//out put work'
function capital (string){
    if (string.charAt(0) === "k")
    {
        return "K" + string
    }
    else {
        return string 
    }
}
console.log(capital("kre"));

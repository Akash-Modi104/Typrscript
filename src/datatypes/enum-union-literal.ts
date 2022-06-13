// enum type
// union types 
// literal type  


// union types 
function addi(n1:number|string, n2:number|string){
    let result;
    if (typeof n1 ==="number" && typeof n2 ==="number"){
     result =(n1+n2);
    console.log(result)
}else{
    result=(n1.toString()+n2.toString())
}
console.log(result)
}

const n=9;
const n22=5;

addi(n,n22)
addi("ejdf","fgyuh")


// literal type  

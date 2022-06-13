// type aslias
// function type


function addx(n1:number,n2:number):number{
    const result=n1+n2;
    return result;
}


function add1(n1:number,n2:number){
    return n1+n2;
}

function printresult(num:number):void{
    console.log("result: " +  num);
}

// void means function has no return statement
console.log(printresult(add1(7,8)));



// the `?` operator here marks parameter `c` as optional
function add566(a: number, b: number, c?: number) {
    return a + b + (c || 0);
  }
  
  console.log(add566(2,5))
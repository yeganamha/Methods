let MyArr =[14, 58, 8, 3, 74, 21];


function indexOf(arr, item) {
    let i=0;
    while(i < arr.length){
        if(arr[i] == item){  
            return i;
        }
        else{
            i++;
        }                         
    }
  console.log("This item is not found");                      
}
console.log(indexOf(MyArr, 21));

let str ="yegana";
function Include(mystring, item){
    let i =0;
    while(i<mystring.length){
        if(mystring[i]==item){
            return true;
        }
        else{
            i++;
        }

    }

    console.log("this is not here");
}

console.log(Include(str, "e"));


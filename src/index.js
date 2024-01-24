
const express = require('express');
const app = express();
const port = 5000;
function signelNumber(array){
    sum=0;
   for( i=0;i<array.length;i++){
       sum=sum^array[i];
   }
   return sum;
}
const myVariable = process.env.MY_VARIABLE;
console.log("the signel num is:",signelNumber(myVariable));
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
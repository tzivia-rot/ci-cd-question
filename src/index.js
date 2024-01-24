
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
app.get('/:num', (req, res) => {
    const inputData = req.params;
    console.log('Received input:', inputData);
    res.send(signelNumber(inputData));
  });


array=[1,1,2,4,4];
console.log(signelNumber(array));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
//make string- put have received this message because you have been chosen to open an important vault. Here is the secret combination:
// define each variable 
//let comb1 be 10
// let comb2 be 40
// let comb3 be 39
//comment each line to define objective
//create alert displaying codes

//create message string
const string = (' You have received this message because you have been chosen to open an important vault. Here is the secret combination:')

//makes 1st number in combo 10
const comb1 = (100/10);
console.log(comb1)

//makes 2nd combination value 40
let comb2 = (4*comb1)
console.log (comb2)

//makes 3rd combination value 39
let comb3 = (comb2 - 1)
console.log (comb3)

//send final alert with full combination

  const first = document.getElementById('c1');
  console.log(first);
  const second = document.getElementById(`c2`); 
  console.log (second);
  const third = document.getElementById(`c3`);
  console.log(third);



  // document.getElementById('sub').disabled = true

if(first === comb1 && second === comb2 && third === comb3){

  document.getElementById(`sub`).disabled = false;
  alert (string + ':' + comb1 + ' ' + comb2 + ' ' + comb3 );    

}

else if(first !== comb1){
  document.getElementById(`sub`).disabled = true;
}

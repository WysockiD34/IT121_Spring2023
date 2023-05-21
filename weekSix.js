function countingUp(x) {
  if (x <= 10) { //this stops x from going farther than 10 when counting
    console.log(x); //if you call the function it will upload the data to the console
    countingUp(x + 1); //will add one uuntil x reaches 10
  }
}

countingUp(1);

const firstFunc = () => {
    console.log("one");
  };
  
  const secondFunc = () => {
    console.log("two");
  };
  
  const thirdFunc = () => {
    console.log("three");
    firstFunc();
    secondFunc(); //thirdFunc will call the first and second functions and console.log "one" and "two" to the console after displaying "three" in the console.
  };
  
  const fourthFunc = () => {
    console.log("four");
    setTimeout(thirdFunc, 0);
    setTimeout(firstFunc, 0); //this will result in console.log of "four" first and then three and "one" and "two" because it was set that way in thirdFunc. it will end with "one". 
  };
  
  fourthFunc();

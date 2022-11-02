// JS for beginner day 1

/*
   this code is my first js code
*/
function myFunc(){
   var resp = confirm('Are you sure?');
   if(resp) {
       alert("The answer is OK");
      console.log("The answer is OK");
   }
   else{
      var resp = prompt("The answer is Cancel, Why?");
      console.warn(resp);
   }
}


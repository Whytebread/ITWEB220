function drawTriangle(triangleSize) {

   // Your solution goes here
   

   for (let i = 1; i <= triangleSize; i++) {
       let triangle = "";
      
      for (let j = 1; j <= i; j++) {
         triangle += "*"; 
      }

      console.log(triangle);
   } 


}

drawTriangle(4);
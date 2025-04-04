function parseScores(scoresString) {
   // TODO: Compete the function
   let incomingString = scoresString.split(" ")
   return incomingString.map(Number);
}

function buildDistributionArray(scoresArray) {
   // TODO: Compete the function
   let distArray = [0, 0, 0, 0, 0];
   for (let score of scoresArray) {

      if (score >= 90) {
         distArray[0]++;
      } else if (score >= 80) {

         distArray[1]++;
      } else if (score >= 70) {

         distArray[2]++;
      } else if (score >= 60) {

         distArray[3]++;

      } else  {

         distArray[4]++;

      }
   }

   return distArray;

}

function setTableContent(userInput) {
   // TODO: Compete the function
   let distributionArray = buildDistributionArray(parseScores(userInput))

   let markup = "";

   let barIndex = 0;
   for (let frequency of distributionArray) {
      markup += '<td><div style="height: ' + (10 * frequency) + 'px" class="bar' + barIndex + '"></div></td>\n';
      barIndex++;
   }

   let firstRow = document.getElementById("firstRow");
   firstRow.innerHTML = markup;

   markup = "";

   for (let frequency of distributionArray) {
      markup += '<td>' + frequency + '</td>';
   }

   let thirdRow = document.getElementById("thirdRow")
   thirdRow.innerHTML = markup;

}

// The argument can be changed for testing purposes
setTableContent("45 78 98 83 86 99 90 59");
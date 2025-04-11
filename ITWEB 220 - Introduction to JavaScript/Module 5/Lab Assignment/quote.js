window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

function fetchQuotes(topic, count) {
   // TODO: Modify to use XMLHttpRequest

let endPoint = "https://wp.zybooks.com/quotes.php";
let queryString = "topic=" + topic + "&count=" + count;
let url = endPoint + "?" + queryString;

let xhr = new XMLHttpRequest();
xhr.addEventListener("load", responseReceivedHandler);
xhr.responseType = "json";
xhr.open("GET", url);
xhr.send();
}

// TODO: Add responseReceivedHandler() here

function responseReceivedHandler() {
let quote = document.getElementById("quotes");
   if (this.status === 200) {
      if (this.response.error) {
         quote.innerHTML = this.response.error;
      } else {
         let html = "<ol>"
         for (let quoteItem of this.response) {
            html += "<li>" + quoteItem.quote + " - " + quoteItem.source + "</li>";
         }
         html += "</ol>";
         quote.innerHTML = html;
      }
   } else {
      quote.innerHTML = "Quote is unavailable.";
   }
}
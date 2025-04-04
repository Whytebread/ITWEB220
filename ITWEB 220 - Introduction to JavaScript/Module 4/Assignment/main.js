// 1st required function: As the user enters text in the textbox, the program should count the words entered in the text box and display the results below the text box. Note: The output must occur as the user types.

function wordCount() {

    // grab the input text
    let textInput = document.getElementById("input").value;

    // remove the spaces from text input
    let numWords = textInput.split(" ");

    // output number of words in the span below the input
    document.getElementById("wordCountDisplay").innerText = (numWords.length - 1);


    // create the loop to count bigWords
    let bigWords = 0;
    for (let i = 0; i < numWords.length; i++) {
        if (numWords[i].length > 9) {
            bigWords++;
        }
        // output to bigWords span
        document.getElementById("complicatedWordCountDisplay").innerText = bigWords;
    }

    // count for sentences, counting based on "."
    let numSentences = textInput.split(".");

    // output to sentences span
    document.getElementById("sentences").innerText = (numSentences.length - 1);

    // count total characters from input and output in total char span
    document.getElementById("totalChars").innerText = textInput.length;

}


//create event listener for text input and triggers wordCount
document.getElementById("input").addEventListener("input", wordCount);



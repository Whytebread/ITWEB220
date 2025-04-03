function calcWordFrequencies() {
    let input = prompt("Enter some words separated by spaces.");
    let wordList = input.split(" ");
    let wordCount = {};

    for (let word of wordList) {
        if (word in wordCount) {
            wordCount[word] = wordCount[word] + 1;
        } else {
            wordCount[word] = 1;
        }
    }

    for (let word in wordCount) {
        console.log(word + " " + wordCount[word]);
    }

}


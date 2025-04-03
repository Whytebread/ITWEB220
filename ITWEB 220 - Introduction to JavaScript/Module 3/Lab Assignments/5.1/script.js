// Put your solution here
let nums = [4, 2, 9, 1, 8];


function divideArray(numbers) {
    let evenNums = [];
    let oddNums = [];

    for (let number of numbers) {
        if (number % 2 === 0) {
            evenNums.push(number)
        } else {
            oddNums.push(number)
        }
    }

    evenNums.sort((a, b) => a - b);
    oddNums.sort((a, b) => a - b);


    console.log("Even numbers:");
    if (evenNums.length === 0) {
        console.log("None")
    } else {
        evenNums.forEach (item => console.log(item));
    }

    console.log("Odd numbers:");
    if (oddNums.length === 0) {
        console.log("None")
    } else {
        oddNums.forEach (item => console.log(item));
    }
}


divideArray(nums);


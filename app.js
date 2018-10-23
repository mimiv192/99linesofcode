var friends = ['John', 'Paul', 'George','Marc','Richard'];
for(let i=0; i <friends.length; i++) {
    let friends= friends [i];
}

console.log(friend.toUpperCase()+ '+');

// for (let j = 99; j > 0; j++) {
//     let numOfLinesLeft = 99
//     console.log(j + '99 lines of code in the file,' + 'lines of code;' friend + 'strikes one out, clears it all out,' + j-1 +'lines of code in the file'
//     );
// } if (j===1) 
    

for (let j = 99; j > 0; j--) {
    if (j > 2) {
        console.log(
            `${j} lines of code in the file, ${j} lines of code; ${friend} strikes one out, clears it all out, ${j -
                1} lines of code in the file`
        );
    } else if (j === 2) {
        console.log(
            `${j} lines of code in the file, ${j} lines of code; ${friend} strikes one out, clears it all out, ${j -
                1} line of code in the file`
        );
    } else {
        console.log(
            `${j} line of code in the file, ${j} line of code; ${friend} strikes one out, clears it all out, no more lines of code in the file`
        );
    }
}





console.log(friends);
// defining the array
let myArray = [
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
    [1000, 1005, 857, 1],
    [1000, 1006, 857, 1],
    [1000, 1007, 857, 1]
];
// record the array entered by user
// let x = 0;
// const userArray = Array();

// function addElementToArray() {
//     userArray[x] = document.getElementById('input-array').value;
//     alert(`Element: ${userArray[x]} Added at the index ${x}`);
//     x++;
//     document.getElementById('input-array').value = '';
// }

// function displayArray() {
//     let e = '';
//     for (let y=0;y<userArray.length;y++) {
//         e += `Element ${y} = ${userArray[y]}<br/>`;
//     }
//     document.getElementById('results').innerHTML = e;
// }

// function create an empty array based on the input and find the largest of each subArray
function largest(arr) {
    const N = arr.length;
    const X = Array.from({length: N}, (_, index) => index+1);
    for (let i=0; i < arr.length; i++) {
        for (let j=0; j < arr[i].length;j++) {
            if (arr[i][j] > X[i]) {
                X[i] = arr[i][j];
            }
        }
    }
    return X;
}

// add the value of the largest function to <p> tag
function returnLargest() {
    document.getElementById("results").innerHTML = largest(myArray);
};
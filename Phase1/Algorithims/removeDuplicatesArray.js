let arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
let count = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        while (arr[i] === arr[j]) {
            count++;
            arr.splice(j, 1);
        }
    }
}
console.log(arr);
console.log('No of elements removed: ' + count);
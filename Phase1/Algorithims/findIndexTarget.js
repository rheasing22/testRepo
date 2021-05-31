let arr = [1, 3, 5, 6];
let target = 7;
let flag = 0;
let index;

index = arr.indexOf(target);
if (index == -1) {
    for (let i = 0; i < arr.length; i++) {

        if (target < arr[0]) {
            console.log(" i am here ")
            index = 0;
            break;


        }
        else if (arr[i] < target && arr[i + 1] > target) {
            index = i + 1;
            break;
        }

        else {
            index = arr.length;
        }

    }

}

console.log(index);

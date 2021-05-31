let arr = [1, 2, 3, 2, 7, 8]
let i = 0;

for (i = 0; i < arr.length; i++) {

    flag = false;
    if (arr[i] % 2 != 0) {
        if ((arr[i + 1] % 2 != 0) && (arr[i + 2] % 2 != 0)) {
            flag = true;
            break;

        }

    }
}

console.log(flag)

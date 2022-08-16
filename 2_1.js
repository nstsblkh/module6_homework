function typeOfNumber(arr){
    let evenNum = 0;
    let oddNum = 0;
    let zero = 0;
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] === 'number'){
            if (arr[i] % 2 == 0 && arr[i] != 0){evenNum++}
            if (arr[i] == 0){zero++}
            if (arr[i] % 2 != 0){oddNum++}
        }
    }
    console.log(evenNum, oddNum, zero)
};
typeOfNumber([1, 2, 3])


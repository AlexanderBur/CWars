function arrayPlusArray(arr1, arr2) {

    const sum1 = arr1.reduce((summ,number) => summ + number, 0);
    const sum2 = arr2.reduce((summ,number) => summ + number, 0);

    return  sum1 + sum2;

}

function arrayPlusArray2(arr1, arr2) {

    let TotalSumm = 0;
    for (let i = 0 ; i < arr1.length ; i++){
        TotalSumm += arr1[i];
    }
    for (let i = 0 ; i < arr2.length ; i++){
        TotalSumm += arr2[i];
    }

    return TotalSumm
}
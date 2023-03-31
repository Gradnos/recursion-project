function mergeSort(arr){
    let len = arr.length;
    if(len === 1) return arr;
    let middleIndex = Math.ceil(len / 2);
    let left = arr.splice(0, middleIndex);
    let right = arr.splice(-middleIndex);
    left = mergeSort(left);
    right = mergeSort(right);

    let leftln = left.length;
    let rightln = right.length;
    let newArr = [];
    while(leftln !== 0 && rightln !== 0){
        if(left[0] <= right[0]){
            newArr.push(left.shift());
            leftln--;
        } else{
            newArr.push(right.shift());
            rightln--;
        }
    }

    if(leftln === 0) newArr = newArr.concat(right);
    else newArr = newArr.concat(left);
    return newArr;
}



console.log(mergeSort([1,2,123,4,5,6])); //[ 1, 2, 4, 5, 6, 123 ]
console.log(mergeSort([5,5,4,3,2,1])); //[ 1, 2, 3, 4, 5, 5 ]
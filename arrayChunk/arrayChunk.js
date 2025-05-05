function arrayChunk(arr, size){
    const result = [];
    for (let i = 0; i < arr.length; i += size){//i will increment per chunk size
        //each loop will take a slice of the array from i to i + size
        //and push it to the result array
        result.push(arr.slice(i, i + size))
    }
    return result;
}
console.log(arrayChunk([1,2,3,4,5,6,7], 3))
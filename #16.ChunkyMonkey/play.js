//Write a function that splits an array (first argument) into groups the length of size (second argument) 
//and returns them as a two - dimensional array.
function chunkArrayInGroups(arr, size) {
    const array2 = [];

    for (let i = 0; i < arr.length; i += size) {
        array2.push(arr.slice(i, i + size));
    }

    return array2;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
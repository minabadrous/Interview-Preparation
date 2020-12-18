const arr1 = [
    ["name", "id", "age", "weight", "Cool"],
    ["Susan", "3", "20", "120", true],
    ["John", "1", "21", "150", true],
    ["Bob", "2", "23", "90", false],
    ["Ben", "4", "20", "100", true],
  ];
  
  const arr2 = [
    ["name", "id", "height"],
    ["Bob", "2", "50"],
    ["John", "1", "45"],
    ["Ben", "4", "43"],
    ["Susan", "3", "48"]
  ];
  
  const arr3 = [
    ["name", "id", "parent"],
    ["Bob", "2", "yes"],
    ["John", "1", "yes"]
  ];





function groupArrays(arrays){
    // Creating a Main array out of the first one
    var mainArr = arrays[0];
    // Looping throught the rest of the array
    for(arr of arrays.slice(1,arrays.length)){
        // creating an array to memorize different columns indexes
        var keys = new Array(arr[0].length).fill(0);
        for(var tr=0; tr<arr.length; tr++){
            // Looping the array head
            if(tr == 0){
                for(td of arr[tr]){
                    // creating the missing head in the main array
                    if( mainArr[0].indexOf(td) == -1 ) mainArr[0].push(td);
                    // Saving the column index
                    keys[arr[tr].indexOf(td)] = mainArr[0].indexOf(td);
                }
            }
            else{
                // Merging arrays with items in correct columns
                var trArr = new Array(mainArr[0].length).fill(0)
                for(td of arr[tr]){ trArr[keys[arr[tr].indexOf(td)]] = td }
                mainArr.push(trArr)
            }
        }
    }
    return mainArr
}
groupArrays([arr1, arr2, arr3])
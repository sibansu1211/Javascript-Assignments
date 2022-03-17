function CreateObject(arr) {
    // Write your code here
    const dict1={};
    for (let i=0;i<arr.length;i++){
        if(i%2===0){
            dict1[arr[i]] = arr[i+1]
        }
    }
    return dict1
}

module.exports = CreateObject;



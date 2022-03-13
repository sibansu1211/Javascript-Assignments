function getEven(arr) {
    /* 
        Return an array containing only even numbers as a result
        Example
            Input: [1,4,5,77,8,90]
            Output: [4,8,90]

        Write you code below

    */
   function isdiv(n)
   {
       return n%2==0
   }
   var result = arr.filter(isdiv)
   return result

}

function multiplyByN(arr, n) {
    /* 
        Return an array whose elements are multiplied by n
        Example
            Input: [1,3,4,55], 3
            Output: [3,9,13,165]
        Write you code below
    */
   function muln(num)
   {
       return num * n
   }
   arr =arr.map(muln)
   return arr
}

function removeNthElement(arr, n) {
    /*
        Return the array with the element present at index n removed
        Example
            Input: [1,3,4,6,7] 3
            Output: [1,3,4,7]
        Write you code below
    */
   arr.splice(n,1)
   return arr
}

module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}
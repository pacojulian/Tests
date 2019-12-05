function sum(arr1, arr2){
    var map = new Map();
    var set = new Set();
    arr1.forEach(element => {
        map.set(element,1);
    });
    arr2.forEach(element => {
       if(map.get(element)){
        set.add(map.get)
       }
    });
   
    return set;

}
console.log(sum([1,4,3],[2,4,6]));

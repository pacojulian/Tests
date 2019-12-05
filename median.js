
 let findMedian = function(nums1, nums2){
    let oneArray = new Set(nums1.concat(nums2));
    let sortedArray = Array.from(oneArray).sort();
    if(sortedArray.length% 2 === 0){
        let pv = sortedArray.length / 2;
        let x = sortedArray[pv - 1];
        let y = sortedArray[pv];
        return (x + y) / 2; 
    }else{
        let position = Math.floor(sortedArray.length/2);
        return sortedArray[position];
    }
}
 console.log(findMedian([40,43,44,46],[48,49,50,51]));


 //docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=chatito' -e 'MSSQL_PID=Express' -p 1433:1433 -d mcr.microsoft.com/mssql/server:2017-latest-ubuntu 

 docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' 75ac4977e767

 
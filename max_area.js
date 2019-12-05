var maxArea = function(height) {
    let maxArea = 0;
    let pv = height.length -1;
    let i = 0;
    while( i< height.length){
        if(height[i]<=height[pv]){
            tempArea = height[i] * (pv-i) ;
            i++;
        }else{
            tempArea = height[pv] * (pv-i);
            pv --;
        }
        if(tempArea > maxArea){
            maxArea = tempArea;
        }
        
    }
    return maxArea;
};


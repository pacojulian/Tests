var longestCommonPrefix = function(strs) {
                if (strs == null || strs.length < 1 ){
                    return "";
                }else{
                    let lcp = [];
                    let result = [];
                    let valid = false;
                    if(strs[0] == ""|| strs[0]== " "){
                        return "";
                    }
                    for(let i= 0;i< strs[0].length; i++){
                        lcp.push(strs[0].charAt(i));
                    }
                    if(strs.length > 1){
                        for(let i=1; i< strs.length; i++){
                            if(strs[i] == ""|| strs[i]== " "){
                                return "";
                            }
                            for(let j=0; j< strs[i].length;j++){
                                if(strs[i].charAt(0) != lcp[0]){
                                    valid = false;
                                }
                                if(strs[i].charAt(j) === lcp[j]){
                                    valid = true;
                                    if(strs[i].length< lcp.length){
                                        result = lcp.slice(0, strs[i].length);  
                                    }
                                    
                                }
                                if(strs[i].charAt(j)!= lcp[j]){
                                    result = lcp.slice(0, j);    
                                    break;
                                }                       
                            }
                        }
                    }else{
                        return strs.join("");
                    }
                    if(valid){
                        if(result.length ==0){
                            return lcp.join("");
                        }else{
                            return result.join("");
                        }
                    
                    }else{
                        return "";
                    }
                
                }
        
};

console.log(longestCommonPrefix(["a","a","b"]   ));
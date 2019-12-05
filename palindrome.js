let longestPalindrome = function(s) {   
    //anitalavalatina
    //bob
    //abcdcba
    //0123456
    if(s.length< 0 || s == null){
        return  "";
    }
    if(validatePalindrome(s)){
        return s;
    }else{

        let left = s.substring(0,Math.floor(s.length/2));
        let right = s.substring(Math.floor(s.length/2), s.length);
        validatePalindrome(right);
        if(validatePalindrome(left)){ return left};
        if( validatePalindrome(right)){ return right } 
        longestPalindrome
    }
    
};

function validatePalindrome(s){
    let pv = Math.floor(s.length / 2);
    let reverseString = s.split("").reverse().join("");
    let leftString = s.substring(0, pv -1) ;
    let rightString = reverseString.substring(0, pv - 1) ;
    console.log(leftString);
    console.log(rightString);
    if(leftString == rightString){
        return true;
    }
    else{
        return false;
    }

}
console.log('result: ',longestPalindrome("anitalavalatina"))
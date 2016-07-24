// 1) remove spaces between words since it can cause the reverse string to be wrong
// 2) convert string into lowercase so that any capitalized words causes a false answer

   function Palindrome(str){

     var newStr = str.replace(/\s/g, "").toLowerCase();
     var reverseStr = newStr.split('').reverse().join('');
       if(newStr == reverseStr){
        return true;     
       }else{
        return false;
      }
    };
    console.log(Palindrome("racecar"));

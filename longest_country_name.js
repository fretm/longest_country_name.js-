* Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. Go to the editor 
Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output : "United States of America"


*/
function Longest_Country_Name (string1 ,string2 , string3 ){

   if ( string1.length > string2.length && string1.length > string3.length){
        return stirng1 
    }
    else if ( string2.length > string1.length && string2.length > string3.length ) {
        return string2
    }
    else {
        return string3 
    }
}  console.log(Longest_Country_Name( " america", "ethio", "japannnnnnnnnnnnnnnn"))
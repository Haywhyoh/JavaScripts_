function Palindrome(_input){
    var input_str = _input.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    var input_count=0;

    // check if the input is empty
    if (input_str===''){
        console.log('Nothing found!');
        return false;
    }
        // check if the number of letters in the input are odd or even numbers
        if ((input_str.length) % 2 === 0){
           input_count = (input_str.length)/2;
        
        }

        else{
            //checking if the input contains only one letter
            if((input_str.length) === 1){
             
                console.log('Entry is a palindrome');
                return true; }
            else{
               
                input_count = (input_str.length - 1)/2 ;
               
            }
        }
        //iterating through the letters and comparing the letters
    for( var x=0; x < input_count; x++){
        if(input_str[x] != input_str.slice(-1-x)[0]){
        console.log('Entry is not a palindrome');
        return false;
        }
        else{
            console.log('Entry is a palindrome');
            return true;
        }
    }
}

Palindrome('madam');
Palindrome('fox');
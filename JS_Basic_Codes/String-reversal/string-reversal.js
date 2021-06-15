/* Get content from <p> element*/
let text = document.getElementById('demo').textContent;

/* converting strings to arrays*/ 
let split_text = text.split('');

/*reversing the array elements */
reversed_text = split_text.reverse();

/* joining reversed strings*/
joint_text = reversed_text.join('');

document.write(joint_text);
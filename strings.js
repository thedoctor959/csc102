// trevor harned csc 102 palindrome
//is the function
function checkPalindrome() {
    // a constant setting userinput and replaceing with lower case
    const userInput = document.getElementById('userInput').value.toLowerCase().replace(/[^a-z0-9]/g, '');
    //reverses userinput
    const reversedInput = userInput.split('').reverse().join('');
    //defines ispalindrome as the reverse of userinput
    const isPalindrome = userInput === reversedInput;

    //if user input is revered and equals ispalindrome input and text diplayed
    if (isPalindrome) {
      document.getElementById('result').innerText = `"${userInput}" is a palindrome!`;
      // for everything not equal to ispalindrome
    } else {
      document.getElementById('userInput').value = prompt('try again');
      checkPalindrome();
       
      
    }
  }

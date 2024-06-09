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
   

           function validateInputs() {
            let first = document.getElementById('first').value;
            let last = document.getElementById('last').value;
            
            if ((first.length + last.length) < 20) {
                alert('Inputs are less than 20 characters!');
                return false;
            } else {
                return true;
            }
        }
        function zipcode() {
            let zip = document.getElementById('zip').value;

            if ((zip.length) == 5){ alert("winner");
                return true;
                
            }
            else {alert("invalid");
                return false;
            
            }
            
        }
        

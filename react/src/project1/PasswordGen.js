import React, { useState, useEffect, useCallback, useRef } from 'react';

function PasswordGenerator() {
  // State to hold the generated password and the desired password length
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(8);

  // Characters to choose from when generating the password
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

  // useCallback to memoize the generatePassword function
  const generatePassword = useCallback(() => {
    let newPassword = '';

    // Generate a password of the desired length
    for (let i = 0; i < passwordLength; i++) {
      // Generate a random index to select a character from 'chars'
      const randomIndex = Math.floor(Math.random() * chars.length);

      // Append the selected character to the newPassword
      newPassword += chars.charAt(randomIndex);
    }

    // Update the password state with the generated password
    setPassword(newPassword);
  }, [passwordLength]); // This dependency array ensures the function is memoized when passwordLength changes

  // Ref to store the previous password length
  const lengthRef = useRef();

  // Effect to update lengthRef with the current passwordLength
  useEffect(() => {
    lengthRef.current = passwordLength;
  }, [passwordLength]); // This effect runs when passwordLength changes

  // Effect to generate a new password at regular intervals and clean up when unmounting
  useEffect(() => {
    generatePassword(); // Generate the initial password

    const intervalId = setInterval(() => {
      // Check if the password length hasn't changed since the last generation
      if (lengthRef.current === passwordLength) {
        generatePassword(); // Generate a new password
      }
    }, 4000); // Generate a new password every 4 seconds

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [generatePassword, passwordLength]); // These dependencies trigger the effect when they change

  // Render the component with the current password and an input to change the password length
  
  const copyToClipboard = useCallback(() => {
    // lengthRef.current?Selection()
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <div style={{textAlign:"center", backgroundColor:"green",padding:"90px"}}>
      <h1 style={{marginTop:"20px"}}>Password Generator</h1>
      <p>Your password: {password}</p>
      <label>Password Length: </label>
      <input
        type="number"
        value={passwordLength}
        onChange={(e) => setPasswordLength(e.target.value)}
        min={1}
      />

<button
  onClick={copyToClipboard}
  style={{
    backgroundColor: 'blue',
    color: 'white', // You may want to set text color to contrast with the blue background
    transition: 'background-color 0.3s', // Add a smooth transition for the hover effect
  }}
  onMouseEnter={(e) => { // Handle hover effect when the mouse enters the button
    e.target.style.backgroundColor = 'red'; // Change the background color on hover
  }}
  onMouseLeave={(e) => { // Reset the background color when the mouse leaves the button
    e.target.style.backgroundColor = 'blue';
  }}
>
  Copy
</button>

    </div>
  );
}

export default PasswordGenerator;

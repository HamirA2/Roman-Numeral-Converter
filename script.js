// Get html elements
const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

// Array stores roman numerals
const romanNumerals = [
  'M',
  'CM',
  'D',
  'CD',
  'C',
  'XC',
  'L',
  'XL',
  'X',
  'IX',
  'V',
  'IV',
  'I'
];

// Function checks input value
const checkInput = () => {
  // Show message for a valid input number
  if (!number.value) {
    output.classList.remove("hidden");
    output.innerHTML = "Please enter a valid number";
  }
  // Show message for input number greater than 1
  else if (number.value < 1) {
    output.classList.remove("hidden");
    output.innerHTML = "Please enter a number greater than or equal to 1";
  }
  // Show message for input number < 4000
  else if (number.value > 3999) {
    output.classList.remove("hidden");
    output.innerHTML = "Please enter a number less than or equal to 3999";
  }
  // Hide message and call on romanNumeralConverter
  else {
    output.innerHTML = "";
    output.classList.add("hidden");
    romanNumeralConverter(parseInt(number.value));
  }
  
};

// Function converts input into roman numerals
const romanNumeralConverter = (number) => {
  // Display output
  output.classList.remove("hidden");
  let index = 0;

  // Array with values to represent roman numerals
  const numberedArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const outputArr = [];

  // Loop until number is 0
  while (number > 0) {
    // Increase number range
    if (number < numberedArr[index]) {
      index += 1;
      continue;
    }
    // Subtract number by value in the numbers array
    else if (number >= numberedArr[index]) {
      number -= numberedArr[index];
    }

    // Add roman numeral at the index as template literal
    outputArr.push(`${romanNumerals[index]}`);
  }

  // Update output box with all values of array joined together
  output.innerHTML = outputArr.join('');
};

// Click event listener for the convert button
convertBtn.addEventListener("click", checkInput);

// Event listener for enter key press
number.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();

        // Click convert button to start romanNumeralConverter function
        convertBtn.click();
    }
})
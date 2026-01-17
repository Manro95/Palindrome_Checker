const btn = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const result = document.getElementById("result");


btn.addEventListener("click", () => {
  if (input.value === "") {  alert("Please input a value"); }


const cleanedInput = input.value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

const isPalindrome = cleanedInput === cleanedInput.split('').reverse().join('');

if (isPalindrome) {
  result.textContent = `${input.value} is a palindrome`
}
else { result.textContent = `${input.value} is not a palindrome`}
}) 
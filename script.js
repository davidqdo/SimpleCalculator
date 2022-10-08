const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == 'clear') { // Clear Button
      display.innerText = '';
    } else if (item.id == 'backspace') { // Backspace Button
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != '' && item.id == 'equal') { // Equal Button w/ Numbers
      display.innerText = eval(display.innerText);
    } else if (display.innerText == '' && item.id == 'equal') { // Equal Button w/o Numbers
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else { // Add other buttons to string
      display.innerText += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
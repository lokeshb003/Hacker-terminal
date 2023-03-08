const BLACKLISTED_KEY_CODES = [ 38 ];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">certifications</span>, <span class="code">contact</span>',
  about:
    "Hi! I am Lokesh Balaji. I love Cyber Security and Cloud Computing. I make Content about Automation in Linkedin Everyday or Every Weekend with Different Projects on Automation. Non-technically, I love Swimming and thats my hobby! Thank you! :)",
  skills:
    "Ethical Hacking | Cloud Computing",
  education:
    "Finished my HSC 12th Board at Bethel Matriculation Higher Secondary School with 159/200 Cut off and 83% of Marks. <br> Btech - Artificial Intelligence and Data Science at Rajalakshmi Institute of Technology",
  experience:'<span class="code"> - Present<br> Cyber Security Engineer at Spinacle Technologies Pvt Ltd. <br> Cyber Security Enthusiast <br> Cloud Compluting Enthusiast <br> Cyber Security Analyst at Melospiza',
  certifications: 
    "CEH | CSCU - Certified Ethical Hacker<br> CSCU - Certified Secure Computer User <br>",
  contact:
    "You can contact me on Linkedin and or via the mail:<br><a href='https://www.linkedin.com/in/lokesh-balaji-2a1965200/' class='success link'>Linkedin</a>, <a href='mailto:testerheredaw@gmail.com' class='success link'>Email</a>,"
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);

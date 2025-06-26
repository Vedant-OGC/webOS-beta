// vedOS.js

// Booting Sequence
window.onload = () => {
  setTimeout(() => {
    document.getElementById('boot-screen').classList.add('hide');
    setTimeout(() => {
      document.getElementById('boot-screen').style.display = 'none';
      document.getElementById('login-screen').style.display = 'flex';
    }, 1000);
  }, 2500);

  updateClock();
  setInterval(updateClock, 1000);
};

// Clock
function updateClock() {
  const now = new Date();
  document.getElementById('clock').innerText = now.toLocaleTimeString();
}

// Login
function login() {
  document.getElementById('login-screen').classList.add('hide');
  setTimeout(() => {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('desktop').style.display = 'block';
  }, 1000);
}

// App Control
function openApp(id) {
  const app = document.getElementById(id);
  app.style.display = 'flex';
  app.classList.add('open');
}

function closeApp(id) {
  const app = document.getElementById(id);
  app.classList.remove('open');
  setTimeout(() => {
    app.style.display = 'none';
  }, 300);
}

// Shutdown
function shutdown() {
  document.getElementById('shutdown-screen').style.display = 'flex';
  setTimeout(() => {
    document.body.innerHTML = '<div style="color:white;background:black;height:100vh;display:flex;justify-content:center;align-items:center;"><h1>vedOS turned off. Goodbye!</h1></div>';
  }, 3000);
}

// Terminal interaction
function runCommand() {
  const input = document.getElementById('terminal-input');
  const output = document.getElementById('terminal-output');
  const cmd = input.value.trim();
  if (cmd) {
    output.innerHTML += `<div>User@vedOS:~$ ${cmd}</div>`;
    input.value = '';
    output.scrollTop = output.scrollHeight;
  }
}

// Browser search
function searchWeb() {
  const query = document.getElementById('search-bar').value;
  if (query) {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  }
}

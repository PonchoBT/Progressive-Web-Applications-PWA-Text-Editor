// const buttonInstall = document.getElementById('buttonInstall');
// const textHeader = document.getElementById('textHeader');

// window.addEventListener('beforeinstallprompt', (event) => {
//   event.preventDefault();
//   buttonInstall.style.visibility = 'visible';
//   textHeader.textContent = 'Click the button to install!';

//   buttonInstall.addEventListener('click', () => {
//     event.prompt();
//     buttonInstall.setAttribute('disabled', true);
//     buttonInstall.textContent = 'Installed!';
//   });
// });

// window.addEventListener('appinstalled', (event) => {
//   textHeader.textContent = 'Successfully installed!';
//   console.log('👍', 'appinstalled', event);
// });


const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  butInstall.style.visibility = "visible";
  butInstall.textContent = "Install";
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  butInstall.setAttribute("disabled", true);
  butInstall.textContent = "Installed!";
  console.log("Install button clicked!");
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("Installed!", event);
});
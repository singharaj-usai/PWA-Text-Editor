const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
window.deferredPrompt = event;
});

// TODO: Implement a click event handler on the `butInstall` element
// click EventListener
butInstall.addEventListener('click', async () => {
const promptEvent = window.deferredPrompt;
if (!promptEvent) {return;}
promptEvent.prompt();
window.deferredPrompt = null;  
});

// TODO: Add an handler for the `appinstalled` event
// appinstalled EventListener
window.addEventListener('appinstalled', (event) => {
window.deferredPrompt = null;
});

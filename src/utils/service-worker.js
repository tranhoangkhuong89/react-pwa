import axios from 'axios';

export function register() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(function() {
        console.log('Service worker registered');
      });
  } else {
    console.warn('Service worker is not supported in this browser');
  }
}


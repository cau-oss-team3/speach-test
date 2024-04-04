let silenceTimer;

onmessage = function(e) {
  if (e.data.cmd === 'reset_timer') {
    clearTimeout(silenceTimer);
    silenceTimer = setTimeout(() => {
      postMessage('speak');
    }, 3000);
  }
};

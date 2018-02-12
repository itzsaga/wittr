self.addEventListener('fetch', event => {
  // TODO: only respond to requests with a
  // url ending in ".jpg"
  if (event.request.url.slice(-4) === '.jpg') {
    event.respondWith(
      fetch('/imgs/dr-evil.gif')
    );
  };
});

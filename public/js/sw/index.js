self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).then(response => {
      if (response.status === 404) {
        // TODO: instead, respond with the gif at
        // /imgs/dr-evil.gif
        // using a network request
        return fetch('/imgs/dr-evil.gif')
      }
      return response;
    }).catch(() => {
      return new Response("Uh oh, that totally failed!");
    })
  );
});
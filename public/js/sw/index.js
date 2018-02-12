self.addEventListener('fetch', event => {
	// TODO: respond to all requests with an html response
	// containing an element with class="a-winner-is-me".
	// Ensure the Content-Type of the response is "text/html"
  event.respondWith(
    new Response("<div class='a-winner-is-me'>Intercepted!</div>", {
      headers: {'Content-Type': 'text/html'}
    })
  );
});

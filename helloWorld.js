addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
});

function getNameParam(url) {
  let url = new URL(url);
  return url.searchParams.get('name');
}
async function handleRequest(request) {
  let user = getNameParam(request.url);

  if (user) {
    let beta_people = await storage.get("beta_people");

    if (beta_people.indexOf(user) >= 0) {
      return fetch("http://cfworkers.com/indexb.html");
    }
  };
  
  if (Math.random() < 0.1) {
    return fetch("http://cfworkers.com/indexb.html");
  } else {
    return fetch("http://cfworkers.com/index.html");
  }
  //return new Response(`Hello world ${IMPORTANT_KEY}`)
  // new Sentry(event).captureMessage('revoking old style token');
}


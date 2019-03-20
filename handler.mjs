function getNameParam(url) {
  let urlObj = new URL(url);
  return urlObj.searchParams.get('name');
}

export default async function handleRequest(request) {
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
}

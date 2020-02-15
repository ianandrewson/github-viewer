export default function fetchUser(username) {
  fetch(`https://api.github.com/users/${username}`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
}

export default function fetchUser() {
  return Promise.resolve({
    login: 'instigator',
    name: 'Bob Instigator',
    loaction: 'Portland, Oregon'
  });
}

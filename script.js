 const api = "https://api.github.com/users/";

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  gitdata();
});
let check = (response) => {
  if (response.status === 404) throw new Error("User Not Found");
  return response.json();
};
console.log(check());
function gitdata() {
  const username = document.getElementById("username").value;
  fetch(api + username)
    .then(check)
    .then(createCard)
    .catch((err) => {
      alert(err);
    });
}

function createCard(info) {
  const div = document.createElement("div");
  div.setAttribute("class", "content");
  const avatar = document.createElement("img");
  const name = document.createElement("h2");
  const login = document.createElement("p");
  const bio = document.createElement("p");
  const repos_url = document.createElement("p");
  const a = document.createElement("a");

  avatar.src = info.avatar_url;
  name.innerText = "Name: " + info.name;
  login.innerText = "Login: " + info.login;
  bio.innerText = "bio: " + info.bio;
  repos_url.innerHTML = "Repos-Url: " + info.repos_url;
  div.appendChild(avatar);
  div.appendChild(name);
  div.appendChild(login);
  div.appendChild(bio);
  div.appendChild(repos_url);
  document.getElementsByTagName("body")[0].appendChild(div);
}

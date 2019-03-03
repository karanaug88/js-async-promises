import "babel-polyfill";
import world from "./world";

// document.getElementById("output").innerHTML = `Hellos ${world}!`;

const posts = [
  { title: "Post one", body: "This is post one" },
  { title: "Post two", body: "This is post two" }
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

getPosts();

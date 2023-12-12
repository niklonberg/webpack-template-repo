import "./index.css";

const { log } = console;
log("hello world");

function component() {
  const p = document.createElement("p");
  p.textContent = "Hi there";

  p.classList.add("hello");

  return p;
}

document.body.appendChild(component());

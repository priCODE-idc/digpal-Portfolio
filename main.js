const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");
const close = document.getElementById("close");

burger.addEventListener("click", () => {
  navLinks.style.right = "0";
  navLinks.style.backgroundColor = "#262626";
});

close.addEventListener("click", () => {
  navLinks.style.right = "-100%";
});

const navItems = document.querySelectorAll("#nav-links li");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.style.right = "-100%";
  });
});

// let active = document.querySelector(".active-npde")
// let activee = document.querySelector(".active-node-placed")

// active.addEventListener("mouseover", function () {
//     active.style.backgroundColor = "black"
//     active.style.color = "white"
//     active.style.border = "1px solid yellow"

// })
// activee.addEventListener("mouseover", function () {
//     activee.style.backgroundColor = "yellow"
//     activee.style.color = "black"
//     active.style.border = "1px solid black"

// })

//api------
async function loadRandomBlog() {
  let response = await fetch("https://dev.to/api/articles");
  let blogs = await response.json();

  // Random blog index (0 se blogs.length - 1 tak)
  let randomIndex = Math.floor(Math.random() * blogs.length);
  let blog = blogs[randomIndex];

  // Blog display
  let blogBox = document.getElementById("blogBox");
  blogBox.innerHTML = `
    <h3>${blog.title}</h3>
    <p>${blog.description || "No description available."}</p>
  `;
  document.querySelector(".next").innerText = "Next";
}

// product ka
const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("Thankyou")) {
      btn.textContent = "Buy Now";
      btn.classList.remove("Thankyou");
    } else {
      btn.textContent = "Buy Now";
      btn.classList.add("Thankou");
    }
  });
});


let changeText = document.querySelector("#changeText")
let texts = ["Frontend Specialist", "UI-UX Developer", "JavaScript Engineer","DOM Tamer" , "DSA Problem Solver", "JavaScript Dev + Logic Builder"]
    let tex = 0;

    setInterval(() => {
      changeText.textContent = texts[tex];
      tex = (tex + 1) % texts.length;
    }, 2000);
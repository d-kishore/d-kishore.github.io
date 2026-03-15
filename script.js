/* MOBILE MENU */

const toggle = document.getElementById("menu-toggle")
const nav = document.getElementById("nav-menu")

toggle.addEventListener("click", () => {
nav.classList.toggle("active")
})

document.querySelectorAll("#nav-menu a").forEach(link => {

link.addEventListener("click", () => {
nav.classList.remove("active")
})

})


/* SCROLL ANIMATION */

const sections = document.querySelectorAll(".section")

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("visible")
}

})

})

sections.forEach(section => observer.observe(section))


/* SCROLL PROGRESS */

window.addEventListener("scroll", () => {

const scroll = document.documentElement.scrollTop
const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

const scrolled = (scroll/height)*100

document.querySelector(".scroll-progress").style.width = scrolled + "%"

})


/* LOAD GITHUB REPOS */

const container = document.getElementById("github-projects")

fetch("https://api.github.com/users/d-kishorekumar/repos")

.then(res => res.json())

.then(data => {

data.slice(0,6).forEach(repo => {

const title = repo.name
.replace(/-/g," ")
.replace(/\b\w/g,c=>c.toUpperCase())

const card = document.createElement("div")

card.className = "project-card"

card.innerHTML = `
<h3>${title}</h3>
<p>${repo.description || "GitHub repository"}</p>
<a href="${repo.html_url}" target="_blank">View Repo</a>
`

container.appendChild(card)

})

})

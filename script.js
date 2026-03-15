const toggle=document.getElementById("menu-toggle")
const nav=document.getElementById("nav-menu")

toggle.onclick=()=>nav.classList.toggle("active")

document.querySelectorAll("#nav-menu a").forEach(link=>{
link.onclick=()=>nav.classList.remove("active")
})


const sections=document.querySelectorAll(".section")

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("visible")
}
})
})

sections.forEach(section=>observer.observe(section))


const container=document.getElementById("github-projects")

fetch("https://api.github.com/users/d-kishorekumar/repos")

.then(res=>res.json())

.then(data=>{

data.slice(0,6).forEach(repo=>{

const title=repo.name
.replace(/-/g," ")
.replace(/\b\w/g,c=>c.toUpperCase())

const card=document.createElement("div")

card.className="project-card"

card.innerHTML=`
<h3>${title}</h3>
<p>${repo.description||"GitHub repository"}</p>
<a href="${repo.html_url}" target="_blank">View Repo</a>
`

container.appendChild(card)

})

})

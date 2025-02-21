let btn = document.getElementById("submit")
let table = document.querySelector(".table")
let firstInput = document.getElementById("title")
let secInput = document.getElementById("author")
let thirInput = document.getElementById("isbn")
let title 
let author
let isbn
let addBookList = ()=>{
	title = firstInput.value
	author = secInput.value
	isbn = thirInput.value
	let tabRow = document.createElement("tr")
	let tabTitle = document.createElement("td")
	let tabAuthor = document.createElement("td")
	let tabIsbn = document.createElement("td")
	tabRow.appendChild(tabTitle)
	tabRow.appendChild(tabAuthor)
	tabRow.appendChild(tabIsbn)
	table.appendChild(tabRow)
	tabTitle.innerText = firstInput.value
	tabAuthor.innerText = secInput.value
	tabIsbn.innerText = thirInput.value
}
btn.addEventListener("click",addBookList)
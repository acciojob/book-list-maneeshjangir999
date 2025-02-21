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
    var removeBtn = document.createElement("button")
	removeBtn.classList.add("delete")
	removeBtn.innerText = "Delete"
	removeBtn.style.backgroundColor = "red"
	removeBtn.style.color = "white"
	removeBtn.style.padding = "5px 13px"
	removeBtn.style.borderRadius = "10px"
	removeBtn.style.border = "none"
	
	
	tabRow.appendChild(tabTitle)
	tabRow.appendChild(tabAuthor)
	tabRow.appendChild(tabIsbn)
	tabRow.appendChild(removeBtn)
	table.appendChild(tabRow)
	tabTitle.innerText = firstInput.value
	tabAuthor.innerText = secInput.value
	tabIsbn.innerText = thirInput.value
}
let remBookList = ()=>{
	
}
btn.addEventListener("click",addBookList)
removeBtn.addEventListener("click",remBookList)

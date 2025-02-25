//your JS code here. If required.
 document.getElementById("submit").addEventListener("click", function(e) {
      e.preventDefault();
      
      const title = document.getElementById("title").value;
      const author = document.getElementById("author").value;
      const isbn = document.getElementById("isbn").value;
      
      const row = document.createElement("tr");
      
      const titleCell = document.createElement("td");
      titleCell.textContent = title;
      row.appendChild(titleCell);
      
      const authorCell = document.createElement("td");
      authorCell.textContent = author;
      row.appendChild(authorCell);
      
      const isbnCell = document.createElement("td");
      isbnCell.textContent = isbn;
      row.appendChild(isbnCell);
      
      const deleteCell = document.createElement("td");
      const clearButton = document.createElement("button");
      clearButton.textContent = "Clear";
      clearButton.classList.add("delete", "btn", "btn-danger", "btn-sm");
      clearButton.addEventListener("click", function() {
        row.remove();
      });
      deleteCell.appendChild(clearButton);
      row.appendChild(deleteCell);
      
      document.getElementById("book-list").appendChild(row);
      
      document.getElementById("title").value = "";
      document.getElementById("author").value = "";
      document.getElementById("isbn").value = "";
    });
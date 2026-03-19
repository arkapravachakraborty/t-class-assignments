const inputRef = document.getElementById("itemInput");
const buttonRef = document.getElementById("addBtn");
const list = document.getElementById("list");
const toggleBtnRef = document.getElementById("toggle-button");

// light dark mode convert
toggleBtnRef.addEventListener('click', () => {
    document.body.classList.toggle("light");
    if (toggleBtnRef.textContent === "Light Mode") {
        toggleBtnRef.textContent = "Dark Mode";
        toggleBtnRef.style.backgroundColor = "black";
        toggleBtnRef.style.color = "White"
    }
    else {
        toggleBtnRef.textContent = "Light Mode";
        toggleBtnRef.style.backgroundColor = "white";
        toggleBtnRef.style.color = "black";
    }
})

buttonRef.addEventListener('click', () => {
    // take the value and print it
    const item = inputRef.value;
    if (item === "") {
        alert("Enter a Item");
        return;
    }
    // console.log(item);

    // add a list to the value
    // create the list content and delete button
    const li = document.createElement("li");
    const textSpan = document.createElement("span")
    const delBtn = document.createElement("button");

    // add text content to button and li
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete");

    textSpan.textContent = item;

    // add delete function to delete button
    delBtn.addEventListener('click', () => {
        li.remove();
    })

    li.appendChild(textSpan);
    li.appendChild(delBtn);
    list.appendChild(li);

    // empty the input box
    inputRef.value = "";

    // Applly edit on list
    list.addEventListener('click', (e) => {
        // we want to take the perfect li tag so we use the tag name here
        if (e.target.tagName === 'LI') {
            // take the clicked li item
            const liele = e.target.querySelector('span');
            // make the item editable and focus on
            // make the html tag into a text edit area
            // it menas open the li for editing
            liele.setAttribute('contenteditable', 'true');
            // make the user cursor inside that particular li element
            liele.focus();

            liele.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    // inside contenteditable we press enter then it will breal the line so we prevent it
                    event.preventDefault();
                    // kick out the user cursor from li tag
                    liele.blur();
                }
            });
            // listen when focus is lost
            liele.addEventListener('blur', () => {
                // make the tag again normal remove the editing capabilities
                li.setAttribute('contenteditable', 'false');
                // The text is updated 
                // console.log('Saved new text:', li.textContent);
            }), { once: true }; // it forces the browser to run the blur function exactly once and then immediately delete it.
        }
    });


})
const buttonRef = document.getElementById("generate-button");
const quoteHeading = document.getElementById("quote-heading");
const quoteDiv = document.getElementById("generated-quotes-div");
const quote = document.getElementById("original-quote");
const quoteAuthor = document.getElementById("author-name");
const message = "Here is your Today's quote";
const toggleBtnRef = document.getElementById("toggleBtn");

toggleBtnRef.addEventListener('click', () => {
    document.body.classList.toggle('light');
    if (toggleBtnRef.textContent === "Light Mode") {
        toggleBtnRef.textContent = "Dark Mode";
        toggleBtnRef.style.backgroundColor = "Black";
        toggleBtnRef.style.color = "White";
    }
    else {
        toggleBtnRef.textContent = "Light Mode";
        toggleBtnRef.style.backgroundColor = "White";
        toggleBtnRef.style.color = "Black";
    }
})


buttonRef.addEventListener('click', async function () {
    quoteHeading.textContent = '';
    quote.textContent = '';
    quoteAuthor.textContent = '';
    quoteDiv.style.display = 'block';
    try {
        const response = await fetch('https://api.freeapi.app/api/v1/public/quotes');
        const jsonResponse = await response.json();
        const quoteList = jsonResponse.data.data;
        const randomNumner = Math.floor(Math.random() * quoteList.length);
        // console.log(quoteList);
        // console.log(randomNumner);
        const quoteDetails = quoteList[randomNumner];
        quoteHeading.textContent = message;
        quote.textContent = quoteDetails.content;
        quoteAuthor.textContent = `-By ${quoteDetails.author}`;
    } catch (error) {
        console.log(error);
        quoteHeading.textContent = "Failed to load quote. Please try again.";
    }
})


// buttonRef.addEventListener('click', function () {
//     quoteHeading.textContent = '';
//     quote.textContent = '';
//     quoteAuthor.textContent = '';
//     try {
//         fetch('https://api.freeapi.app/api/v1/public/quotes', {
//             method: 'GET',
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 const quoteList = data.data.data;
//                 const randomNumner = Math.floor(Math.random() * quoteList.length);
//                 // console.log(data);
//                 // console.log(randomNumner);
//                 quoteHeading.append(message);
//                 quote.append(data.data.data[randomNumner].content);
//                 quoteAuthor.append(data.data.data[randomNumner].author);
//             })
//     } catch (error) {
//         console.log(error);
//     }
// }) 
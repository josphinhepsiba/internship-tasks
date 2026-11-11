const quotes = [
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Success is not final, failure is not fatal.",
        author: "Winston Churchill"
    },
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        text: "Great things never come from comfort zones.",
        author: "Unknown"
    },
    {
        text: "Every day is a new beginning.",
        author: "Unknown"
    }
];

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").textContent =
        quotes[randomIndex].text;

    document.getElementById("author").textContent =
        "- " + quotes[randomIndex].author;
}

function copyQuote() {
    const quote = document.getElementById("quote").textContent;
    const author = document.getElementById("author").textContent;

    navigator.clipboard.writeText(quote + " " + author)
        .then(() => alert("Quote copied successfully!"))
        .catch(() => alert("Unable to copy the quote."));
}

// Display a random quote when the page opens
newQuote();
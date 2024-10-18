// Array 
const quotes = [
    { quote: "Code never lies, comments sometimes do." , author: " Ron Jeffries" },
    { quote: "The best way to learn to program is to write programs.", author: " Unknown" },
    { quote: "Do or do not, there is no try.", author: "Yoda" },
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "Debugging is like being the detective in a crime movie where you are also the murderer.", author: "Filipe Fortes" },
    { quote: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { quote: "Doubt kills more dreams than failure ever will.", author: "Suzy Kassem" },
    { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { quote: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { quote: "Nah.", author: "Rosa Parks" }
];


let currentIndex = 0;


function displayQuote() {
    
    const currentQuote = quotes[currentIndex];
    
    // DOM
    document.getElementById('quote').textContent = `"${currentQuote.quote}"`;
    document.getElementById('author').textContent = `— ${currentQuote.author}`;

    currentIndex = (currentIndex + 1) % quotes.length; 
}

document.getElementById('QuoteBtn').addEventListener('click', displayQuote);

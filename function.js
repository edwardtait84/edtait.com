document.addEventListener("DOMContentLoaded", function () {
    var quotes = [
    { text: "<i>Wonderful and ambitious, capturing the listener's attention brilliantly</i>", author: "Graham Bennett" },
    { text: "<i>An absolutely brilliant composition</i>", author: "Nicholas Daniel" },
    { text: "<i>The perfect mix of sounding fresh and contemporary while still being accessible and enjoyable to listen to</i>", author: "Tom McDonnell" },
    { text: "<i>One of our future musical entrepreneurs</i>", author: "Alison Cox OBE" },
    { text: "<i>The very best of new music</i>", author: "York Late Music Festival" },
    { text: "<i>Excellent technique, knowledge of repertoire and is a pleasure to teach</i>", author: "Jacques Cohen" },
    { text: "<i>Unabashedly expressive ideas with a sure sense of narrative, pace and structure</i>", author: "The Musical Opinion" },
    { text: "<i>His works show a nostalgic feel, yet also a unique and individual stamp</i>", author: "Rhys Stokes" },
    { text: "<i>Wonderful touches and a very satisfying shape</i>", author: "London Sinfonietta" },
    { text: "<i>Undoubtedly a very exciting upcoming compositional voice</i>", author: "Samuel Kemp" },
    { text: "<i>A vivid and imaginative work, well-written for cello</i>", author: "Timothy Bowers" },
    { text: "<i>Marrying movement and zeitgeist, Fleeting Manhattan masterly paints a panoramic fresco of a thriving nation</i>", author: "Dexter Dédalo" },
    { text: "<i>Every sonority and musical gesture is preserved, yet reimagined for the piano</i>", author: "Leo Lupascu" },
    { text: "<i>An impressive piece, compositionally coherent and genuine idiomatic writing</i>", author: "Dr Robert Saxton" },
    { text: "<i>A pleasure to learn and perform</i>", author: "Yazdi Madon" },
    ];
   
    var quoteIndex = 0;
    var quoteContainer = document.getElementById('quote-container');
    var quoteDotsContainer = document.getElementById('quote-dots');
   
    function changeQuote() {
    quoteContainer.style.opacity = 0;
   
    setTimeout(function () {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    var currentQuote = quotes[quoteIndex];
   
    // Customize font, color, and style here
    quoteContainer.innerHTML = `<p style="font-family: Book Antiqua; font-size: 20px; color: white;">"${currentQuote.text}"</p><p style="font-size: 14px; color: white;">- ${currentQuote.author}</p>`;
    quoteContainer.style.opacity = 1;
   
    updateQuoteDots();
    }, 600); // Adjust the duration of the transition
    }
   
    // Initial quote
    updateQuoteDots(); // Call this before changeQuote
    changeQuote();
   
    // Change quote every 4.2 seconds (adjust as needed)
    setInterval(changeQuote, 5000);
   
    function updateQuoteDots() {
    quoteDotsContainer.innerHTML = '';
   
    for (var i = 0; i < quotes.length; i++) {
    var dot = document.createElement('div');
    dot.classList.add('quote-dot');
    if (i === quoteIndex) {
    dot.classList.add('active-dot');
    }
   
    dot.setAttribute('data-index', i);
    dot.addEventListener('click', function () {
    quoteIndex = parseInt(this.getAttribute('data-index'), 10);
    changeQuote();
    });
   
    quoteDotsContainer.appendChild(dot);
    }
    }
});

document.addEventListener("DOMContent-Loaded", function() {
    const tabButton = document.querySelector(".tab-button");
    const tabContent = document.querySelector(".tab-content");

    tabButton.addEventListener("click", function() {
    tabContent.classList.toggle("show");
    });
});

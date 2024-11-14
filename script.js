
let words = document.querySelectorAll(".word");
words.forEach((word)=>{
            let letters = word.textContent.split("");
            word.textContent="";

            letters.forEach((letter)=>{
                    let span = document.createElement("span");
                    span.textContent = letter;
                    span.className = "letter";
                    word.append(span);
});

});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
let currentWord = words[currentWordIndex];
let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

Array.from(currentWord.children).forEach((letter,i)=>{

    setTimeout(()=>{
        letter.className = "letter out";  

    },i * 80);
});

nextWord.style.opacity="1";
Array.from(nextWord.children).forEach((letter,i)=>{
    letter.className = "letter behind";
    setTimeout(()=>{

        letter.className = "letter in";
    },340 + i * 80);
});
 currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
changeText();
setInterval(changeText,3000)



document.addEventListener('DOMContentLoaded', function() {
    function toggleEducationContent() {
        const educationSection = document.getElementById('additional-education');
        const button = document.getElementById('read-more-btn');
        
        // Toggle visibility of the education content
        if (educationSection.classList.contains('hidden')) {
            educationSection.classList.remove('hidden');
            button.textContent = 'Read Less'; // Change button text
        } else {
            educationSection.classList.add('hidden');
            button.textContent = 'Read More'; // Change button text back
        }
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-buttons .btn");
    const projectBoxes = document.querySelectorAll(".port-box");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            projectBoxes.forEach(box => {
                if (filter === "all" || box.classList.contains(filter.substring(1))) {
                    box.style.display = "block";
                } else {
                    box.style.display = "none";
                }
            });

            // Update active button style
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });
});


// Wait for the page to load, then animate the soft skill bars

  


//mixitup portfolio section 

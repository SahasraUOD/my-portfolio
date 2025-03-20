// Create the 'Back to Top' button
const backToTopButton = document.createElement('button');
backToTopButton.innerText = '↑ Back to Top';
backToTopButton.id = 'backToTop';
document.body.appendChild(backToTopButton);

// Style the button
const style = document.createElement('style');
style.innerHTML = `
    #backToTop {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px 15px;
        font-size: 14px;
        background-color: #333;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        display: none; /* Hidden by default */
        z-index: 1000;
        transition: opacity 0.3s ease;
    }
    #backToTop:hover {
        background-color: #555;
    }
`;
document.head.appendChild(style);

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
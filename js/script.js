
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


let backToTopButton = document.createElement("button");
backToTopButton.innerText = "Back to Top";
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.background = '#333';
backToTopButton.style.color = '#fff';
backToTopButton.style.border = 'none';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.opacity = '0';
backToTopButton.style.transition = 'opacity 0.3s';
backToTopButton.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
document.body.appendChild(backToTopButton);


window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.opacity = '1';
    } else {
        backToTopButton.style.opacity = '0';
    }
};

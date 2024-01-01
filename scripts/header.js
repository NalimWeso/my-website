const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

document.querySelector(".literally-me").onmouseover = event => {
    hackerHeader(event);
}

document.querySelector(".hobbies").onmouseover = event => {
    hackerHeader(event);
}

document.querySelector(".portfolio").onmouseover = event => {
    hackerHeader(event);
}

function hackerHeader(event) {
    let iterations = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
            .map((letter, index) => {
                if (index < iterations) {
                    return event.target.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        if (iterations >= event.target.dataset.value.length) clearInterval(interval);

        iterations += 1 / 3;
    }, 30);
}

document.querySelector('header').addEventListener('click', (event) => {

    const click = event.target;
    const className = event.target.classList.value;

    if (click.tagName === 'H1') {
        if (className === 'literally-me') {
            window.location.href = '/';
        }
        if (className === 'hobbies') {
            window.location.href = 'hobbies.html';
        }
        if (className === 'portfolio') {
            window.location.href = 'portfolio.html';
        }
    }
})

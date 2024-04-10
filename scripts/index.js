const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

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

// document.querySelector(".literally-me").onmouseover = event => {
//     hackerHeader(event);
// }

// document.querySelector(".skills").onmouseover = event => {
//     hackerHeader(event);
// }

// document.querySelector(".projects").onmouseover = event => {
//     hackerHeader(event);
// }

// document.querySelector(".contact").onmouseover = event => {
//     hackerHeader(event);
// }

const gridItem = document.querySelectorAll('.grid-item');
const answer = document.querySelector('.skill');

gridItem.forEach(skill => {
    const skillIcon = skill.querySelector('i');
    const skillName = skillIcon.classList[0];

    skill.addEventListener('mouseover', () => {
        const skills = {
            "html": "HTML",
            "css": "CSS",
            "sass": "Sass",
            "javascript": "JavaScript",
            "react": "React",
            "electron": "Electron",
            "git": "Git",
            "npm": "npm"
        };

        for (const [skillKey, text] of Object.entries(skills)) {
            if (skillName.includes(skillKey)) {
                answer.innerText = text;
                skillIcon.classList.add('colored');
                break;
            }
        }

    });

    skill.addEventListener('mouseout', () => {
        skillIcon.classList.remove('colored');
    });

});

document.addEventListener('mouseover', (event) => {
    if (!event.target.closest('.grid-item')) {
        answer.innerHTML = '&#12288;';
    }
});
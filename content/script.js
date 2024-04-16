function handleSidebar(display) {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = display;
}

const navLinks = document.querySelectorAll('.sidebar li a');

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        setTimeout(() => {
            handleSidebar('none');
        }, 100);
    });
});

const gridItem = document.querySelectorAll('.grid-container div');
const answer = document.querySelector('.skill');

gridItem.forEach(skill => {
    const skillIcon = skill.querySelector('i');
    const skillName = skillIcon.classList[0];

    skill.addEventListener('mouseover', () => {
        const skills = {
            "html5": "HTML",
            "css3": "CSS",
            "postcss": "PostCSS",
            "sass": "Sass",
            "javascript": "JavaScript",
            "react": "React",
            "electron": "Electron",
            "git": "Git"
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
    if (!event.target.closest('.grid-container div')) {
        answer.innerHTML = '&#12288;';
    }
});
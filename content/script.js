function handleSidebar(display) {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = display;
}

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
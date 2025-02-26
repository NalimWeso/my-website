const gridItem = document.querySelectorAll('.grid-container div');
const skillBoard = document.querySelector('.skill');

gridItem.forEach(skill => {
    const skillIcon = skill.querySelector('i');
    const skillName = skillIcon.classList[0];

    skill.addEventListener('mouseover', () => {
        const skills = {
            "html5": "HTML",
            "css3": "CSS",
            "postcss": "PostCSS",
            "sass": "Sass",
            "less": "Less",
            "tailwind": "Tailwind",
            "javascript": "JavaScript",
            "typescript": "TypeScript",
            "react": "React",
            "electron": "Electron"
        };

        for (const [skillKey, text] of Object.entries(skills)) {
            if (skillName.includes(skillKey)) {
                skillBoard.innerText = text;
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
        skillBoard.innerHTML = '&#12288;';
    }
});
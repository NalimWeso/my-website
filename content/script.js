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

// Render Projects
const projectsPersonal = [
    {
        name: `My Website`,
        GitHub: `href="https://github.com/NalimWeso/my-website"`,
        Web: `href="https://nalimweso.com/"`,
        description: `The unique core of my outer being.`,
        technologies: `HTML | Sass | JavaScript`
    },
    {
        name: `LifeBlueSnake`,
        GitHub: `href="https://github.com/NalimWeso/lifebluesnake-electron-app"`,
        Web: `class="inactive"`,
        description: `Application for assigning tasks to employees.`,
        technologies: `HTML | CSS | JavaScript | Electron`
    },
    {
        name: `GeoSeq Checker`,
        GitHub: `href="https://github.com/NalimWeso/geometric-sequence-checker"`,
        Web: `href="https://nalimweso.github.io/geometric-sequence-checker/"`,
        description: `Program for analyzing sets of numbers.`,
        technologies: `HTML | CSS | JavaScript`
    },

    {
        name: `Moving Day Counter`,
        GitHub: `href="https://github.com/NalimWeso/moving-day-counter"`,
        Web: `href="https://nalimweso.github.io/moving-day-counter/"`,
        description: `Program for counting days to my moving out.`,
        technologies: `HTML | CSS | JavaScript`
    },
    {
        name: `Metal Gear Timeline`,
        GitHub: `href="https://github.com/NalimWeso/metal-gear-timeline"`,
        Web: `href="https://nalimweso.github.io/metal-gear-timeline/"`,
        description: `The detailed chronology of Hideo Kojima's Metal Gear series.`,
        technologies: `Technologies.`
    },
    {
        name: `Netflix Replica`,
        GitHub: `href="https://github.com/NalimWeso/service-replica"`,
        Web: `href="https://nalimweso.github.io/service-replica/"`,
        description: `Simulation of the Netflix series details panel.`,
        technologies: `HTML | Sass | JavaScript`
    },

    {
        name: `Hoodie Color Picker`,
        GitHub: `href="https://github.com/NalimWeso/hoodie-color-picker"`,
        Web: `href="https://nalimweso.github.io/hoodie-color-picker/"`,
        description: `Program for choosing a random hoodie color.`,
        technologies: `React | JavaScript | Sass`
    },
    {
        name: `The Color Purple`,
        GitHub: `href="https://github.com/NalimWeso/the-color-purple"`,
        Web: `href="https://nalimweso.github.io/the-color-purple/"`,
        description: `Fetch API data from TMDB for the 1985 and 2023 versions.`,
        technologies: `React | JavaScript | PostCSS`
    },
    {
        name: `Neon Cannes`,
        GitHub: `href="https://github.com/NalimWeso/neon-cannes"`,
        Web: `class="inactive"`,
        description: `Application for managing a daily film routine.`,
        technologies: `React | TypeScript | Electron | Tailwind`
    },
];

const projectsCollaborations = [
    {
        name: `Joblique`,
        GitHub: `href="https://github.com/madina0801/joblique"`,
        Web: `href="https://joblique.onrender.com/"`,
        description: `Program for tracking job submissions.`,
        technologies: `React | JavaScript | Tailwind`
    },
    {
        name: `Public Witnessing Planner`,
        GitHub: `href="https://github.com/teocrafters/pw-planner"`,
        Web: `class="inactive"`,
        description: `Organizer for Jehovah's Witnesses' public witnessing.`,
        technologies: `Vue.js | TypeScript | Tailwind`
    },
];

const containerPersonal = document.querySelector('.projects-container.personal');
const containerCollaborations = document.querySelector('.projects-container.collaborations');
let fieldset = '';

function displayProjects(project) {
    fieldset +=
        `<div class="project">
                <div class="name">
                    <p>${project.name}</p>
                    <a ${project.GitHub} target="_blank">
                        <svg class="github" width="40px" viewBox="-1.6 -1.6 23.20 23.20" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            fill="#ffffff">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g id="Page-1" stroke-width="0.0002" fill="none" fill-rule="evenodd">
                                    <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)"
                                        fill="#ffffff">
                                        <g id="icons" transform="translate(56.000000, 160.000000)">
                                            <path
                                                d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                                                id="github-[#ffffff]"> </path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </a>

                    <a ${project.Web} target="_blank">
                        <svg class="go" width="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M20 4L12 12M20 4V8.5M20 4H15.5M19 12.5V16.8C19 17.9201 19 18.4802 18.782 18.908C18.5903 19.2843 18.2843 19.5903 17.908 19.782C17.4802 20 16.9201 20 15.8 20H7.2C6.0799 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4 18.4802 4 17.9201 4 16.8V8.2C4 7.0799 4 6.51984 4.21799 6.09202C4.40973 5.71569 4.71569 5.40973 5.09202 5.21799C5.51984 5 6.07989 5 7.2 5H11.5"
                                    stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </g>
                        </svg>
                    </a>
                </div>

                <p class="description">${project.description}</p>
                <p class="technologies">${project.technologies}</p>
            </div>`
        ;
}

projectsPersonal.forEach(displayProjects);
containerPersonal.innerHTML += fieldset;
fieldset = '';

projectsCollaborations.forEach(displayProjects);
containerCollaborations.innerHTML += fieldset;
fieldset = '';
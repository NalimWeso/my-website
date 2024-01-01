document.querySelectorAll('.browser').forEach((button) => {
    button.addEventListener('click', () => {

        const project = button.closest('.project');

        const localization = project.dataset.localization;

        const name = project.dataset.name;

        const projectPage = `../projects/${localization}/${name}/index.html`;

        window.open(projectPage, '_blank');
    });
});
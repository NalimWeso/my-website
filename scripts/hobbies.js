const coll = document.querySelectorAll(".collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

document.querySelector('.hobbies-list').onmousemove = e => {
    for (const collapsible of document.querySelectorAll('.collapsible')) {
        const rect = collapsible.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        collapsible.style.setProperty("--mouse-x", `${x}px`);
        collapsible.style.setProperty("--mouse-y", `${y}px`);
    };
}
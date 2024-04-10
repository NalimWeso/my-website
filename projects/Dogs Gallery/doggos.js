const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';
const select = document.querySelector('.breeds');
const spinner = document.querySelector('.spinner');

fetch(BREEDS_URL)
    .then(response => {
        return response.json();
    }).then(data => {
        const breedsObject = data.message;
        const breedsArray = Object.keys(breedsObject);

        for (let i = 0; i < breedsArray.length; i++) {
            const option = document.createElement('option');
            option.value = breedsArray[i];
            option.innerText = breedsArray[i];
            select.appendChild(option);
        }
    });

select.addEventListener('change', (event) => {
    if (event.target.value !== '-choose a doggo-') {
        const url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
        getDoggo(url);
    }
    else {
        document.querySelector('.doggos').innerHTML = `<div class="spinner">🐶</div>`;
    }
});

function getDoggo(url) {
    spinner.classList.add('show');

    console.log(url);
    fetch(url)
        .then(response => {
            return response.json();
        }).then(data => {
            const picture = data.message;

            document.querySelector('.doggos').innerHTML = `<img src="${picture}" alt="Doggo">`;
            spinner.classList.remove('show');
        });
}
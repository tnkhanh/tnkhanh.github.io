let i = 9;
let country = document.getElementById('name');
let capital = document.getElementById('cap');
const countries = ['Singapore', 'Brunei', 'Malaysia', 'Thailand', 'Philippines', 'Indonesia', 'Vietnam', 'Laos', 'Myanmar', 'Cambodia'];
const capitals = ['Singapore', 'Bandar Seri Begawan', 'Kuala Lumpur', 'Bangkok', 'Manila', 'Jakarta', 'Hanoi', 'Vientiane', 'Naypyitaw', 'Phnom Penh'];

function nextCountry() {
    i++;
    if (i===10) i = 0;

    country.innerHTML = countries[i];
    capital.innerHTML = capitals[i];
    let flag = document.getElementById('flag');
    flag.setAttribute('src', 'img/flags/' + countries[i].toLowerCase() + '.webp');
}

nextCountry();
let button = document.getElementById('nextC');
button.addEventListener('click', nextCountry);


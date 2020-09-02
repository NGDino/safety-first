const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const businesses = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => businesses.push(...data));

function findMatches(wordToMatch, businesses) {
  return businesses.filter(business => {
    // here we need to figure out if the city or state matches what was searched
    //gi - "global" "insensitive" look through entire array, match lower or upper case
    const regex = new RegExp(wordToMatch, 'gi');
    return business.city.match(regex)
    //business.name.match??
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, businesses);
  const html = matchArray.map(business => {
    const regex = new RegExp(this.value, 'gi');
    const businessName = business.city.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
    <span class="name">${businessName},</span>
  </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);












// const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// const cities = [];
// fetch(endpoint)
//   .then(blob => blob.json())
//   .then(data => cities.push(...data));

// function findMatches(wordToMatch, cities) {
//   return cities.filter(place => {
//     // here we need to figure out if the city or state matches what was searched
//     //gi - "global" "insensitive" look through entire array, match lower or upper case
//     const regex = new RegExp(wordToMatch, 'gi');
//     return place.city.match(regex) || place.state.match(regex)
//     //business.name.match??
//   });
// }

// function displayMatches() {
//   const matchArray = findMatches(this.value, cities);
//   const html = matchArray.map(place => {
//     const regex = new RegExp(this.value, 'gi');
//     const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
//     return `
//       <li>
//         <span class="name">${cityName}</span>
//       </li>
//     `;
//   }).join('');
//   suggestions.innerHTML = html;
// }


// const searchInput = document.querySelector('.search');
// const suggestions = document.querySelector('.suggestions');

// searchInput.addEventListener('change', displayMatches);
// searchInput.addEventListener('keyup', displayMatches);
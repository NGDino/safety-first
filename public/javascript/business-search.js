const endpoint = '/../../api/businesses';

const businesses = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => businesses.push(...data));

function findMatches(wordToMatch, businesses) {
  return businesses.filter(business => {
    // here we need to figure out if the city or state matches what was searched
    //gi - "global" "insensitive" look through entire array, match lower or upper case
    const regex = new RegExp(wordToMatch, 'gi');
    return business.name.match(regex)
    //business.name.match??
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, businesses);
  const html = matchArray.map(business => {
    const regex = new RegExp(this.value, 'gi');
    const businessName = business.name.replace(regex, `<span class="hl">${this.value}</span>`);
    // const businessId = business.id.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
    <span class="name">${businessName}</span>
  </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search')
if (searchInput) searchInput.addEventListener('change', displayMatches);

const suggestions = document.querySelector('.suggestions')
if (searchInput) searchInput.addEventListener('keyup', displayMatches);

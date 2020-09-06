const endpoint = '/../../api/businesses';

let html = '';

const businesses = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => businesses.push(...data));

function findMatches(wordToMatch, businesses) {
  return businesses.filter(business => {
    // does business match what was searched
    //gi - "global" "insensitive" look through entire array, match lower or upper case
    const regex = new RegExp(wordToMatch, 'gi');
    return business.name.match(regex)
  });
}

function chooseBusiness(b_name, b_id) {
  console.log(b_name, b_id);

  let bn = document.querySelector('#business-name');
  bn.value = b_name;
  bn.dataset.business_id = b_id; 
  console.log(bn);
}
function displayMatches() {
  const matchArray = findMatches(this.value, businesses);
  const html = matchArray.map(business => {
    const regex = new RegExp(this.value, 'gi');
    const businessName = business.name.replace(regex, `<span class="hl">${this.value}</span>`);
    // const businessId = business.id.replace(regex, `<span class="hl">${this.value}</span>`);
    let str = [business.name, business.id].join(',');
    return '<li><span class="name" onclick="chooseBusiness(\'' + business.name + '\', \'' + business.id + '\')">'+businessName+'</span></li>';
  }).join('');
  suggestions.innerHTML = html;
  var smartSearch = document.querySelector(".name")
  if (smartSearch) {
    smartSearch.onclick = function () {
      document.querySelector(".search").value = smartSearch.textContent
    }
  }
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

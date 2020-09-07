$(document).ready(function(){
    $('select').formSelect();
  });

const showBizForm =(event)  => {
    event.preventDefault();
    
    var form = document.querySelector('.new-business-form');
    form.classList.remove('hide')
}

document.querySelector('#add-business').addEventListener('click', showBizForm);


async function newBizFormHandler(event) {
    event.preventDefault();
  
//     // on form submission, grab input data from title and (link) URL fields
  
    const name = document.querySelector('#business-name').value;
    const business_url = document.querySelector('input[name="business-url"]').value;
    const category_id = document.querySelector('#category').value
    console.log('add biz button', name, business_url, category_id)
    
    const response = await fetch(`/api/businesses`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        business_url,
        category_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-business-form').addEventListener('submit', newBizFormHandler);
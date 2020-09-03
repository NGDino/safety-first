
async function newFormHandler(event) {
  event.preventDefault();

  // on form submission, grab input data from title and (link) URL fields

  const title = document.querySelector('input[name="post-title"]').value;
  const post_text = document.querySelector('textarea[name="post-text"]').value;
  // var business_id = document.querySelector('#business-name').value;
  //test for safety measures
  const safety_measures = document.getElementById("safety-measures").checked;//trying to give boolean value to checkbox
  const mask_required = document.getElementById("mask-required").checked;//trying to give boolean value to checkbox
  const staff_mask = document.getElementById("staff-mask").checked;//trying to give boolean value to checkbox
  const staff_gloves = document.getElementById("staff-gloves").checked;//trying to give boolean value to checkbox
  const contactless_payment = document.getElementById("contactless-payment").checked;//trying to give boolean value to checkbox
  const handsanitizer_provided = document.getElementById("handsanitizer-provided").checked;//trying to give boolean value to checkbox
  const social_distancing = document.getElementById("social-distancing").checked;//trying to give boolean value to checkbox

  //auto populate business id if on single post
  
    const url = window.location.toString()

    const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1];

  if(url.includes('business')){
    
    business_id = id
    console.log('it includes this', business_id)
  }else{
    business_id = document.querySelector('#business-name').value;
  }

  // send them with a POST request to /api/posts
  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      // post_url
      post_text,
      business_id,
      safety_measures,
      mask_required,
      staff_mask,
      staff_gloves,
      contactless_payment,
      handsanitizer_provided,
      social_distancing
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
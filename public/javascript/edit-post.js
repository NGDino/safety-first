async function editFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const title = document.querySelector('input[name="post-title"]').value;
  const post_text = document.querySelector('textarea[name="post-text"]').value;
  const business_id = document.querySelector('#business-name').value;
  // const business_name = document.querySelector('#business-name').value;
  //test for safety measures
  const safety_measures = document.getElementById("safety-measures").checked;//trying to give boolean value to checkbox
  const mask_required = document.getElementById("mask-required").checked;//trying to give boolean value to checkbox
  const staff_mask = document.getElementById("staff-mask").checked;//trying to give boolean value to checkbox
  const staff_gloves = document.getElementById("staff-gloves").checked;//trying to give boolean value to checkbox
  const contactless_payment = document.getElementById("contactless-payment").checked;//trying to give boolean value to checkbox
  const handsanitizer_provided = document.getElementById("handsanitizer-provided").checked;//trying to give boolean value to checkbox
  const social_distancing = document.getElementById("social-distancing").checked;//trying to give boolean value to checkbox
  

  // send them with a POST request to /api/posts
  await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      post_text,
      business_id,
      // business_name,
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
  document.location.replace('/dashboard');
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
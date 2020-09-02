
async function deleteFormHandler(event) {
    event.preventDefault();
  
    // on form submission, grab input data from title and (link) URL fields
  
    const title = document.querySelector('input[name="post-title"]').value;
    const post_text = document.querySelector('textarea[name="post-body"]').value;
    const business_id = document.querySelector('#business-name').value;
    //test for safety measures
    const safety_measures = document.getElementById("safety-measures").checked = true;//trying to give boolean value to checkbox
    const mask_required = document.getElementById("mask-required").checked = true;//trying to give boolean value to checkbox
    const staff_mask = document.getElementById("staff-mask").checked = true;//trying to give boolean value to checkbox
    const staff_gloves = document.getElementById("staff-gloves").checked = true;//trying to give boolean value to checkbox
    const contactless_payment = document.getElementById("contactless-payment").checked = true;//trying to give boolean value to checkbox
    const handsanitizer_provided = document.getElementById("handsanitizer-provided").checked = true;//trying to give boolean value to checkbox
    const social_distancing = document.getElementById("social-distancing").checked = true;//trying to give boolean value to checkbox
  
    // send them with a POST request to /api/posts
    const response = await fetch(`/api/posts`, {
      method: 'DELETE',
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
      //document.location.reload();
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.delete-post-form').addEventListener('submit', deleteFormHandler);




// async function deleteFormHandler(event) {
//     event.preventDefault();
//     //take url string (window location), split into array based on "/" grab last item in the array
//     const id = window.location.toString().split('/')[
//       window.location.toString().split('/').length - 1
//     ];
  
//     const response = await fetch(`/api/posts/${id}`, {
//       method: 'DELETE',
//     });
  
//     if (response.ok) {
//       document.location.reload();
//     } else {
//       alert(response.statusText);
//     }
//   }
  
//   document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
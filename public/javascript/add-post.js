  
async function newFormHandler(event) {
    event.preventDefault();
  
    // on form submission, grab input data from title and (link) URL fields

    const title = document.querySelector('input[name="post-title"]').value;
    const post_text = document.querySelector('textarea[name="post-body"]').value;
    const business_id = document.querySelector('#business-name').value;
    //test for safety measures
    const safety_measures = document.getElementById("safety-measures").checked = true;//trying to give boolean value to checkbox

  
    // send them with a POST request to /api/posts
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        // post_url
        post_text,
        business_id,
        safety_measures
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
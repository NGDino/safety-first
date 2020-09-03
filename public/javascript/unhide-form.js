const showForm =(event)  => {
    event.preventDefault();
    var form = document.querySelector('.new-post-form');
    form.classList.remove('hide')
}

document.querySelector('#create-new').addEventListener('click', showForm);
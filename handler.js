document.getElementById('btn-update-title')
    .addEventListener('click', function updateTitle() {
        // console.log('button click');
        // document.body.style.backgroundColor = 'red';
        let pageTitleElement = document.getElementById('page-title')
        // console.log(pageTitleElement);
        pageTitleElement.innerText = 'updated page title text';

    })

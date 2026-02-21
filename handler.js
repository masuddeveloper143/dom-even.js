document.getElementById('btn-update-title')
    .addEventListener('click', function updateTitle() {
        // console.log('button click');
        // document.body.style.backgroundColor = 'red';
        let pageTitleElement = document.getElementById('page-title')
        // console.log(pageTitleElement);
        pageTitleElement.innerText = 'updated page title text';

    })

document.getElementById('btn-login')
    .addEventListener('click', function btnLogin() {
        let userInfoEl = document.getElementById('user-info')
        userInfoEl.innerText = 'user logged in successfully'

    })

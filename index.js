document.addEventListener('DOMContentLoaded', () => {
    const createButton = document.querySelector('.create');
    const loginButton = document.querySelector('.login-button');
    const box = document.querySelector('.animate-box');
    const loginForm = document.querySelector('.login');
    const signupForm = document.querySelector('.signup');
    const mainBody = document.querySelector('.main-body');

    createButton.addEventListener('click', () => {

        if (window.innerWidth <= 749) {
            loginForm.style.opacity = '0';
            mainBody.style.backgroundImage = 'url("imgs/new.JPG")';

            setTimeout(() => {
                loginForm.classList.add('visible-hide')
                signupForm.classList.remove('visible-hide')

                setTimeout(() => {
                    signupForm.style.opacity = '1'
                }, 1)

            }, 500)

            mainBody.classList.add('bg-pic2')
            mainBody.classList.remove('bg-pic1')

        } else {
            box.style.left = '60%';

            setTimeout(() => {
                box.classList.add("effect1")
                box.style.right = '60%';
                box.style.borderRadius = '0px 40px 40px 0px';
                box.style.removeProperty('left');
            }, 100)

            loginForm.style.opacity = '0';
            setTimeout(() => {
                loginForm.classList.add('visible-hide')
                signupForm.classList.remove('visible-hide')

                setTimeout(() => {
                    signupForm.style.opacity = '1'
                }, 1)

            }, 500)

            box.classList.add('bg-pic2')
            box.classList.remove('bg-pic1')

            box.innerHTML = '<h1>WELCOME BACK!</h1>';
        }

    })

    loginButton.addEventListener('click', () => {

        if (window.innerWidth <= 749) {
            signupForm.style.opacity = '0';
            mainBody.style.backgroundImage = 'url("imgs/gaming1.JPG")';

            setTimeout(() => {
                signupForm.classList.add('visible-hide')
                loginForm.classList.remove('visible-hide')

                setTimeout(() => {
                    loginForm.style.opacity = '1'
                }, 1)

            }, 500)

            mainBody.classList.add('bg-pic1')
            mainBody.classList.remove('bg-pic2')

        } else {
            box.style.right = '60%';
            box.classList.remove("effect1")

            setTimeout(() => {
                box.classList.add("effect")
                box.style.borderRadius = '40px 0px 0px 40px';
                box.style.removeProperty('right');
            }, 100)

            signupForm.style.opacity = '0';
            setTimeout(() => {
                signupForm.classList.add('visible-hide')
                loginForm.classList.remove('visible-hide')

                setTimeout(() => {
                    loginForm.style.opacity = '1'
                }, 1)

            }, 500)

            box.classList.add('bg-pic1')
            box.classList.remove('bg-pic2')

            box.innerHTML = '<h1>WELCOME!</h1>';
        }

    })

})
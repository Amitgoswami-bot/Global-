    let navMain = document.querySelector("#navtoggle");
    let navtoggle = document.querySelector("#navtoggleBtn");

    navtoggle.addEventListener('click', () => {
        navMain.classList.toggle('nav-main');
    });
    


document.addEventListener("DOMContentLoaded", function() {
    const burgerMenuIcon = document.querySelector('.burger-menu-icon');
    const navbarMenu = document.querySelector('.navbar-menu');

    burgerMenuIcon.addEventListener('click', function() {
        navbarMenu.classList.toggle('active')

        
    })
    

    var account_img = document.querySelector('.account-img');
    var account_menu = document.querySelector('.account_div');

    function show_account_status() {
        account_menu.classList.toggle('active');
    }

    account_img.addEventListener('click', show_account_status);

    var menu_logo = document.querySelector('.navbar-logo');

    menu_logo.addEventListener('click', function() {
        anime({
            targets: menu_logo,
            duration: 1500, 
            rotate: 360,
            complete: function() {
                location.reload();
            }
        });
    });
});
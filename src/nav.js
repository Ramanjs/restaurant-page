const navbar = (() => {
    const homeBtn = document.querySelector('#home');
    const menubtn = document.querySelector('#menu');
    const contactBtn = document.querySelector('#contact');
    const init = () => {
        homeBtn.addEventListener('click', home.init);
        menubtn.addEventListener('click', menu.init);
        contactBtn.addEventListener('click', contact.init);
    };
    return {init};
})();

export default navbar;
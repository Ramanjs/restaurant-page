import dom from './dom';
import home from './home';
import menu from './menu';
import contact from './contact';

const navbar = (() => {
    const homeBtn = document.querySelector('#home');
    const menubtn = document.querySelector('#menu');
    const contactBtn = document.querySelector('#contact');
    const init = () => {
        homeBtn.addEventListener('click', dom.appendContent.bind(home.getContent()));
        menubtn.addEventListener('click', dom.appendContent.bind(menu.getContent()));
        contactBtn.addEventListener('click', dom.appendContent.bind(contact.getContent()));
    };
    return {init};
})();

dom.appendContent.bind(home.getContent()).call();
navbar.init();
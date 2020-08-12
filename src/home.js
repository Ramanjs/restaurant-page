const home = (() => {
    const getContent = () => {
        const heading = document.createElement('h1');
        heading.innerText = 'Welcome to Noice Restaurant';

        const para = document.createElement('p');
        para.classList.add('info');
        para.innerText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias sit earum ducimus odio necessitatibus architecto. Est exercitationem, enim consectetur totam sapiente adipisci voluptatibus, sed eligendi reprehenderit labore illum! Dignissimos, deserunt';

        return ['home', heading, para];
    };
    return {getContent};
})();

export default home;
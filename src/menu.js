const menu = (() => {
    const getContent = () => {
        const para = document.createElement('p');
        para.classList.add('info');

        for (let i=0; i<5;i++) {
            let item = document.createElement('p');
            item.innerText = 'Lorem ipsum.....................................................................................$10';
            para.appendChild(item);
        }

        return ['menu', para];
    };
    return {getContent};
})();

export default menu;
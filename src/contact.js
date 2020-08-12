const contact = (() => {
    const getContent = () => {
        const para = document.createElement('p');
        para.classList.add('info');
        
        let name = document.createElement('p');
        name.innerText = 'Noice Restaurant'

        let contact = document.createElement('p')
        contact.innerText = '999-999-999\ndemo@demo.com';

        para.appendChild(name);
        para.appendChild(contact);

        return ['contact', para];
    };
    return {getContent};
})();

export default contact;
const dom = (() => {
    const content = document.querySelector('#content');
    const clearContent = () => {
        while (content.firstChild) {
            content.removeChild(content.lastChild);
        }
    };
    const appendContent = function() {
        clearContent();
        this.forEach((element, index) => {
            if (index) {
                content.appendChild(element);
            } else {
                setCurrentTab(element);
            }
        });
    }
    const setCurrentTab = it => {
        document.querySelectorAll('.item').forEach(element => {
            element.classList.remove('cur');
        })
        document.getElementById(`${it}`).classList.add('cur');
    };
    return {appendContent};
})();

export default dom;


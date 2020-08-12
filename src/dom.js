const dom = (() => {
    const content = document.querySelector('#content');
    const clearContent = () => {
        while (content.firstChild) {
            content.removeChild(content.lastChild);
        }
    };
    const appendContent = function() {
        clearContent();
        this.forEach(element => {
            content.appendChild(element);
        });
    }
    return {appendContent};
})();

export default dom;


let util = {

};
util.title = function (title) {
    title = title ? title + ' - Home' : 'blog';
    window.document.title = title;
};

export default util;

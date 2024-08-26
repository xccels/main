document.styleSheets.item(0).insertRule('.container { padding-top: 0px !important; }', 0);

document.head.insertAdjacentHTML('afterbegin', '<link rel="stylesheet" href="font.css">');

if (document.head.querySelector('link[rel="icon"]')) {
    document.head.querySelector('link[rel="icon"]').href = 'favicon.ico';
} else {
    document.head.insertAdjacentHTML('beforeend', '<link rel="icon" href="favicon.ico">');
}
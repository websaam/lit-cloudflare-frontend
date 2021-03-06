// 
// Inject external javascript into component
// @param { String } path : eg. https://cdn.jquery.com/jquery.min.js
// @returns { void } 
//
export const injectJS = (path) => {
    var tag = document.createElement("script");
    tag.setAttribute("src", path);
    document.head.appendChild(tag);
}

// 
// Inject external javascript into component
// @param { String } path : eg. https://cdn.jquery.com/jquery.min.js
// @returns { void } 
//
export const injectJSWithId = (path, id) => {
    var tag = document.createElement("script");
    tag.setAttribute("id", id);
    tag.setAttribute("src", path);
    document.head.appendChild(tag);
}

// 
// Inject external CSS into component
// @param { String } path : eg. http://cdn.jqeruy.com/style.css
// @returns { void } 
//
export const injectCSS = (path) => {
    var tag = document.createElement("link");
    tag.setAttribute("rel", "stylesheet");
    tag.setAttribute("href", path);
    document.head.appendChild(tag);
}
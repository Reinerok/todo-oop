function createElement(tag, props, ...children) {
    const element = document.createElement(tag);
    Object.keys(props).forEach(key => {
    if (key === 'data-id') {
        element.setAttribute([key], props[key]);
    } else {
    element[key] = props[key];
    }});
    children.forEach(child => {
        if (typeof child === 'string') {
            child = document.createTextNode(child);
        }

        element.appendChild(child);
    });

    return element;
}

class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(type, callback) {
        this.events[type] = this.events[type] || [];
        this.events[type].push(callback);
    }

    emit(type, arg) {
        if(this.events[type]) {
            this.events[type].forEach(callback => callback(arg));

        }
    }
}

function save(data) {
    const string = JSON.stringify(data);
    console.log(string);
    localStorage.setItem('todos', string);
}

function load() {
    console.log(333);
    const string = localStorage.getItem('todos');
    const data = JSON.parse(string);

    return data;
}

export { createElement,EventEmitter, save, load};
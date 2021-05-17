const fetch = require('node-fetch');


const fetchCallback = (cb) => {

    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => cb(json))

}

const fetchPromise = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await response.json();
}



module.exports = { fetchCallback, fetchPromise }
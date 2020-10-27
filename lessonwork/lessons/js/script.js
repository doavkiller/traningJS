'use strict';
const options = {
    name: 'test',
    width: 1024,
    height: 1929,
    color: {
        border: 'black',
        bg: 'white'
    }
};

const {border, bg} = options.color;
console.log(border + ' : ' + bg);


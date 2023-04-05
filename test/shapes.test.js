const { Circle, Square, Triangle } = require('../utils/generateSVG.js');

//Create testing suite for Circle 

describe('Circle', () => {
    //Test created to check for color 
    describe('color', () => {
        it('should return a string literal for a circle svg tag with color set to blue', () => {
            const shape = new Circle('RRR', 'red', 'blue');

            expect(shape.render()).toEqual('<circle cx="100" cy="100" r="100" fill="blue"/>');
        });
    });

});

//Create testing suite for Square

describe('Square', () => {
    //Test created to check for color 
    describe('color', () => {
        it('should return a string literal for a square svg tag with color set to pink', () => {
            const shape = new Square('LOL', 'red', 'pink');

            expect(shape.render()).toEqual('<rect x="10" y="100" width="150" height="150" fill="pink"/>');
        });
    });

});

//Create testing suite for Triangle

describe('Triangle', () => {
    //Test created to check for color 
    describe('color', () => {
        it('should return a string literal for a triangle svg tag with color set to red', () => {
            const shape = new Triangle('TTT', 'pink', 'red');

            expect(shape.render()).toEqual('<polygon points="50,0 100,100 0,100" x="100" y="100" fill="red"/>');
        });
    });

});
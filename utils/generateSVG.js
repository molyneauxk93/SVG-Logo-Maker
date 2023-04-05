//class for shapes 
class Shapes {
    constructor(title, textcolor, color) {
        this.title = title;
        this.textcolor = textcolor;
        this.color = color;
    }
}

//class for circles
class Circle extends Shapes {
    constructor(title, textcolor, color) {
        super(title, textcolor, color)
        this.title = `<text fill="${this.textcolor}" font-size="45" font-family="Verdana" x="57" y="115">${this.title}</text>`;
        this.shape = `<circle cx="100" cy="100" r="100" fill="${this.color}"/>`;
    }

    render() {
        return `<circle cx="100" cy="100" r="100" fill="${this.color}"/>`;
    }
}

//class for Triangles
class Triangle extends Shapes {
    constructor(title, textcolor, color) {
        super(title, textcolor, color)
        this.title = `<text fill="${this.textcolor}" font-size="20" font-family="Verdana" x="31" y="70">${this.title}</text>`;
        this.shape = `<polygon points="50,0 100,100 0,100" x="100" y="100" fill="${this.color}"/>`;
    }

    render() {
        return `<polygon points="50,0 100,100 0,100" x="100" y="100" fill="${this.color}"/>`;
    }
}

//Class for Squares
class Square extends Shapes {
    constructor(title, textcolor, color) {
        super(title, textcolor, color)
        this.title = `<text fill="${this.textcolor}" font-size="45" font-family="Verdana" x="40" y="185">${this.title}</text>`;
        this.shape = `<rect x="10" y="100" width="150" height="150" fill="${this.color}"/>`;
    }

    render() {
        return `<rect x="10" y="100" width="150" height="150" fill="${this.color}"/>`;
    }
}

//function to generate SVG image 

generateSVG = (data) => {

    //returns SVG file structure depending on whether the user selects Circle, Triangle, or Square from the command prompts 

    if (data.shape === 'Circle') {

        //sets circle variable to new Circle class 
        const circle = new Circle(data.title, data.textcolor, data.color)

        return `<?xml version="1.0" encoding="UTF-8"?>
                <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200" height="300">
    
                ${circle.shape} 
                ${circle.title}
                </svg>`

    } else if (data.shape === 'Triangle') {

        //sets triangle to new Triangle class 
        const triangle = new Triangle(data.title, data.textcolor, data.color)

        return `<?xml version="1.0" encoding="UTF-8"?>
                <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200" height="300">
    
                ${triangle.shape} 
                ${triangle.title}
                </svg>`

    } else if (data.shape === 'Square') {

        //sets square to new Square class
        const square = new Square(data.title, data.textcolor, data.color)

        return `<?xml version="1.0" encoding="UTF-8"?>
                <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200" height="300">
    
                ${square.shape} 
                ${square.title}
                </svg>`
    }
}

module.exports = {
    Circle,
    Square,
    Triangle,
    generateSVG,
};
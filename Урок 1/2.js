function calculateArea(height, width) {

    return {
        area: height * width,
        figure: 'rectangle',
        input: [height, width]
    };
}

console.log(calculateArea(5, 3));
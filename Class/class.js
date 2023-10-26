class Button {
    constructor(width, height) {
        this.props = {
            width: width,
            height: height,
            type: 'button',
            color: 'green'
        };
        console.log(this.props)
    }
    
    testButton(x, y) {
    if (this.props.width == x && this.props.height == y) 
    {
      console.log("Свойства соответствуют ожидаемым значениям.");
    } 
    else {
      console.log("Свойства не соответствуют ожидаемым значениям.");
        }
    } 

}

const test = new Button(42, 50)
test.testButton(42, 50);
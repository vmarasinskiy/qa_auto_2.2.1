class Button {
  constructor(width, height, color) {
    this.props = {
      width: width,
      height: height,
      type: 'button',
      color: color
    };
  }

  onClick() {
    console.log({
      Width: this.props.width,   
      Height: this.props.height,
      Type: this.props.type,     
      Colour: this.props.color   
    });
  }

  testButton(x, y, z) {
    if (this.props.width === x && this.props.height === y && this.props.color===z) {
      console.log("Свойства соответствуют ожидаемым значениям.");
    } else {
      console.log("Свойства не соответствуют ожидаемым значениям.");
    }
  }
}

const test1 = new Button(42, 50, 'red');
const test2 = new Button(43, 50, 'green');
test1.onClick();
test2.onClick();
test1.testButton(42, 50, 'red');
test2.testButton(42, 50, 'red');
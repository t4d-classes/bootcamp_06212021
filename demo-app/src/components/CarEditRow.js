import { Component } from 'react';

export class CarEditRow extends Component {

  constructor(props) {
    super(props);

    this.state = {
      make: this.props.car.make,
      model: this.props.car.model,
      year: this.props.car.year,
      color: this.props.car.color,
      price: this.props.car.price,
    };

    // this.change = this.change.bind(this);
  }

  // change(e) {
  //   // expect the value of "this" to the component instance
  //   this.setState({
  //     [ e.target.name ]: e.target.value,
  //   });
  // }

  // class arrow function to preserve the value of this
  change = (e) => {
    // class arrow function sets it up so that the value of "this" is the component instance
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  saveCar = () => {
    this.props.onSaveCar({
      ...this.state,
      id: this.props.car.id,
    });
  };

  render() {

    const { car, onCancelCar: cancelCar } = this.props;
    const { make, model, year, color, price } = this.state;

    console.log(this.props);

    return (
      <tr>
        <td>{car.id}</td>
        <td><input
          type="text"
          id="edit-make-input"
          value={make}
          onChange={this.change}
          name="make"
        /></td>
        <td><input
          type="text"
          id="edit-model-input"
          value={model}
          onChange={this.change}
          name="model"
        /></td>
        <td><input
          type="text"
          id="edit-year-input"
          value={year}
          onChange={this.change}
          name="year"
        /></td>
        <td><input
          type="text"
          id="edit-color-input"
          value={color}
          onChange={this.change}
          name="color"
        /></td>
        <td><input
          type="text"
          id="edit-price-input"
          value={price}
          onChange={this.change}
          name="price"
        /></td>
        <td>
          <button type="button" onClick={this.saveCar}>
            Save
          </button>
          <button type="button" onClick={cancelCar}>
            Cancel
          </button>
        </td>
      </tr>
    );
  }
}


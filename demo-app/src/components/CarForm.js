import { useForm } from '../hooks/useForm';

const getInitCarForm = () => ({
  make: '',
  model: '',
  year: NaN,
  color: '',
  price: 0,
});

export const CarForm = props => {
  const [carForm, change, resetCarForm] = useForm(getInitCarForm());

  const submitCar = () => {
    props.onSubmitCar({
      ...carForm,
    });

    resetCarForm();
  };

  return (
    <form>
      <div>
        <label htmlFor="make-input">Make</label>
        <input
          type="text"
          id="make-input"
          name="make"
          value={carForm.make}
          onChange={change}
        />
      </div>
      <div>
        <label htmlFor="model-input">Model</label>
        <input
          type="text"
          id="model-input"
          name="model"
          value={carForm.model}
          onChange={change}
        />
      </div>
      <div>
        <label htmlFor="year-input">Year</label>
        <input
          type="number"
          data-type="number"
          id="year-input"
          name="year"
          value={carForm.year}
          onChange={change}
        />
      </div>
      <div>
        <label htmlFor="color-input">Color</label>
        <input
          type="text"
          id="color-input"
          name="color"
          value={carForm.color}
          onChange={change}
        />
      </div>
      <div>
        <label htmlFor="price-input">Price</label>
        <input
          type="number"
          data-type="number"
          id="price-input"
          name="price"
          value={carForm.price}
          onChange={change}
        />
      </div>
      <button type="button" onClick={submitCar}>
        {props.buttonText}
      </button>
    </form>
  );
};

CarForm.defaultProps = {
  buttonText: 'Submit Car',
};

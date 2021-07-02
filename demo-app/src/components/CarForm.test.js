import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { CarForm } from '../components/CarForm';

describe('CarForm testing library', () => {
  let car;
  let textInputKeys = ['make', 'model', 'color'];
  let numberInputKeys = ['year', 'price'];
  let renderResult;
  let submitCarSpy;

  beforeEach(() => {
    car = {
      make: 'Ford',
      model: 'Fusion Hybrid',
      year: 2020,
      color: 'red',
      price: 45000,
    };

    submitCarSpy = jest.fn();
  });

  beforeEach(() => {
    renderResult = render(
      <CarForm buttonText="Add Car" onSubmitCar={submitCarSpy} />,
    );
  });

  test('render CarViewRow component', () => {
    const { getAllByRole } = renderResult;

    const textboxInputs = getAllByRole('textbox');
    expect(textboxInputs.length).toBe(3);
    textboxInputs.forEach((input, index) => {
      const evt = {
        target: {
          type: input.type,
          value: car[textInputKeys[index]],
          name: input.name,
        },
      };
      fireEvent.change(input, evt);
    });

    const spinbuttonInputs = getAllByRole('spinbutton');
    expect(spinbuttonInputs.length).toBe(2);
    spinbuttonInputs.forEach((input, index) => {
      const evt = {
        target: {
          type: input.type,
          value: car[numberInputKeys[index]],
          name: input.name,
        },
      };
      fireEvent.change(input, evt);
    });

    const submitButton = renderResult.getByRole('button');

    fireEvent.click(submitButton);
    expect(submitCarSpy).toHaveBeenCalledWith(car);
  });
});

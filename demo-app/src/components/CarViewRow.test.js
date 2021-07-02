import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { CarViewRow } from '../components/CarViewRow';

test('snapshot CarViewRow component', () => {
  const car = {
    id: 1,
    make: 'Ford',
    model: 'Fusion Hybrid',
    year: 2020,
    color: 'red',
    price: 45000,
  };

  expect(
    renderer
      .create(
        <CarViewRow
          car={car}
          onEditCar={() => null}
          onDeleteCar={() => null}
        />,
      )
      .toJSON(),
  ).toMatchSnapshot();
});

describe('CarViewRow testing library', () => {
  let car;
  let carKeys;
  let renderResult;
  let editCarSpy;
  let deleteCarSpy;

  beforeEach(() => {
    car = {
      id: 1,
      make: 'Ford',
      model: 'Fusion Hybrid',
      year: 2020,
      color: 'red',
      price: 45000,
    };

    carKeys = Object.keys(car);

    editCarSpy = jest.fn();
    deleteCarSpy = jest.fn();
  });

  beforeEach(() => {
    renderResult = render(
      <table>
        <tbody>
          <CarViewRow
            car={car}
            onEditCar={editCarSpy}
            onDeleteCar={deleteCarSpy}
          />
        </tbody>
      </table>,
    );
  });

  test('render CarViewRow component', () => {
    const cells = renderResult.getAllByRole('cell');

    expect(cells.length).toBe(7);

    cells.slice(0, 6).forEach((element, index) => {
      expect(element.textContent).toBe(String(car[carKeys[index]]));
    });
  });

  test('click edit', () => {
    fireEvent.click(renderResult.getByText('Edit'));
    expect(editCarSpy).toHaveBeenCalledWith(1);
  });

  test('click delete', () => {
    fireEvent.click(renderResult.getByText('Delete'));
    expect(deleteCarSpy).toHaveBeenCalledWith(1);
  });
});

import React from 'react';
import Scene2 from '../Scene2';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Scene2></Scene2>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

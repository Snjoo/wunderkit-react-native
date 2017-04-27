import 'react-native';
import React from 'react';
import Scene2 from '../Scene2';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Scene2 />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

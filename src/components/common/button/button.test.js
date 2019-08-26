import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../utils';
import Button from './button';

describe('Button Test', () => {
  describe('Checking Props', () => {
    it('Should not have any error', () => {
      const expectedProps = {
        name: 'testBtn',
        onClick: () => {},
        className: 'testClass',
        value: 'Submit',
      };

      const propsErr = checkProps(Button, expectedProps);
      expect(propsErr).toBeUndefined();
    });

    it('Should throw error if wrong props format is passed', () => {
      const expectedProps = {
        name: 1223,
        onClick: 'string',
        className: 1223,
        value: 1223,
      };
      const propsErr = checkProps(Button, expectedProps);
      expect(propsErr).toEqual('Failed props type: Invalid props `name` of type `number` supplied to `Button`, expected `string`.');
    });
  });

  describe('Checking Render', () => {
    it('Should render Button successfully', () => {
      const expectedProps = {
        name: 'testBtn',
        onClick: () => {},
        className: 'testClass',
        value: 'Submit',
      };
      const wrapper = shallow(<Button {...expectedProps} />);
      const button = findByTestAttr(wrapper, 'btn');
      expect(button.length).toBe(1);
    });
  });
});

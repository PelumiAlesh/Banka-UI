import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../utils';
import Input from './input';

describe('Input Test', () => {
  describe('Checking Props', () => {
    it('Should not have any error', () => {
      const expectedProps = {
        name: 'testInput',
        onChange: () => {},
        type: 'text',
        className: 'testClass',
        value: 'Submit',
        id: 'inputCom',
        placeholder: 'sample text',
      };

      const propsErr = checkProps(Input, expectedProps);
      expect(propsErr).toBeUndefined();
    });

    it('Should throw error if wrong props format is passed', () => {
      const expectedProps = {
        name: 6,
        onChange: () => {},
        type: 'text',
        className: 'testClass',
        value: 'Submit',
        id: 'inputCom',
        placeholder: 'sample text',

      };
      const propsErr = checkProps(Input, expectedProps);
      expect(propsErr).toEqual('Failed props type: Invalid props `name` of type `number` supplied to `Input`, expected `string`.');
    });
  });

  describe('Checking Render', () => {
    it('Should render Input successfully', () => {
      const expectedProps = {
        name: 'testInput',
        onChange: () => {},
        type: 'text',
        className: 'testClass',
        value: 'Submit',
        id: 'inputCom',
        placeholder: 'sample text',
      };
      const wrapper = shallow(<Input {...expectedProps} />);
      const input = findByTestAttr(wrapper, 'input');
      expect(input.length).toBe(1);
    });
  });
});

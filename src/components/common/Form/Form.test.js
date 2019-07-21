import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../utils';

import Button from '../button/button';
import Form from '../Form/Form'

describe('Form Test', () => {
  
  describe('Checking Props', () => {
    it('Should not have any error', () => {
      const expectedProps = {
        inputs: [],
        button: <Button name="testBtn" onClick={() => {}} className="test" value="test"/>
      }

      const propsErr = checkProps(Form, expectedProps);
      expect(propsErr).toBeUndefined();
    });

    it('Should throw error if wrong props format is passed', () => {
      const expectedProps = {
        inputs: 87,
        button: <Button name="testBtn" onClick={() => {}} className="test" value="test"/>
      }    

      const propsErr = checkProps(Form, expectedProps);
      expect(propsErr).toEqual("Failed props type: Invalid props `inputs` of type `number` supplied to `Form`, expected `array`.")
    });
  })
  
  describe('Checking Render', () => {


    let wrapper;
    beforeEach(() => {
      const expectedProps = {
        inputs: [],
        button: <Button name="testBtn" onClick={() => {}} className="test" value="test"/>
      };
       wrapper = shallow(<Form {...expectedProps}/>);
    });
    it('Should Form Component Render successfully', () => {
        const form = findByTestAttr(wrapper, 'formComponent');
      expect(form.length).toBe(1);
    });
    it('Should Input Component Render successfully', () => {
      const form = findByTestAttr(wrapper, 'formComponent');
    expect(form.length).toBe(1);
  });
  });
  
});
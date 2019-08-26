import '@babel/polyfill';
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../utils';
import { SignUp } from './signUp';

describe('SignUp Page Test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SignUp signUp={jest.fn()} />);
  });
  it('Render Signup successfully', () => {
    const signup = findByTestAttr(wrapper, 'signupComponent');
    expect(signup.length).toBe(1);
  });
  it('Render Logo successfully', () => {
    const logo = findByTestAttr(wrapper, 'logo');
    expect(logo.length).toBe(1);
  });
  it('Render Form successfully', () => {
    const form = findByTestAttr(wrapper, 'formComponent');
    expect(form.length).toBe(1);
  });
});

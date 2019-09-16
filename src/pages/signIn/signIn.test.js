import '@babel/polyfill';
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../utils';
import SignIn from './SignIn';

describe('SignIn Page Test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SignIn signIn={jest.fn()} />);
  });

  it('Render SignIn successfully', () => {
    const logIn = findByTestAttr(wrapper, 'logInComponent');
    expect(logIn.length).toBe(1);
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

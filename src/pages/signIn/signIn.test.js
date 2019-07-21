import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utils';
import SignIn from './signIn';

describe('SignIn Page Test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SignIn />);
  });

  it('Render SignIn successfully', () => {
    const logIn = findByTestAttr(wrapper, 'logInComponent');
    expect(logIn.length).toBe(1);
  });

  // it('Render SignIn successfully', () => {
  //   const logo = findByTestAttr(wrapper, 'logo');
  //   expect(logIn.length).toBe(1);
  // });

  it('Render Form successfully', () => {
    const form = findByTestAttr(wrapper, 'formComponent');
    expect(form.length).toBe(1);
  });
});
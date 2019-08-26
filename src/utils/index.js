import CheckProps from 'check-prop-types';

export const checkProps = (component, expectedProps) => {
  const propsErr = CheckProps(component.propTypes, expectedProps, 'props', component.name);
  return propsErr;
};

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

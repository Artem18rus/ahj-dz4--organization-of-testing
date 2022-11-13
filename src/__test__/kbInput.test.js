import CreditCard from '../js/app.js';

test('TEST-kbInput', () => {
  const f = () => {
    eks1.formControl.value = 28755242782;
    return eks1.formControl.value[0];
  };
  expect(f()).toBe('2');
});
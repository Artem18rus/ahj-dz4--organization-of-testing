import CreditCard from '../js/app.js';
import formControl from '../js/app.js';

test('TEST-btnClick', () => {
  const f = () => {
    const eks1 = new CreditCard(formControl);
    eks1.keyboardInput();
    arrFormValue = ['4', '5', '6', '6'];
    return sumResult;
  };
  expect(f()).toBe('20');
});

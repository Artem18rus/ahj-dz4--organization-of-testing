/* eslint-disable eqeqeq */
/* eslint-disable max-len */
export default class InnFormWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;

    this.onSubmit = this.onSubmit.bind(this);
  }

  static get markup() {
    return `
      <h3>Check your credit card number</h3>
        <ul class="cards list-unstyled">
          <li><span class="card visa" title="Visa">Visa</span></li>
          <li><span class="card master" title="Mastercard">Mastercard</span></li>
          <li><span class="card amex" title="American Express">American Express</span></li>
          <li><span class="card discover" title="Discover">Discover</span></li>
          <li><span class="card jcb" title="JCB">JCB</span></li>
          <li><span class="card diners_club" title="Diners Club">Diners Club</span></li>
          <li><span class="card mir" title="Mir">Mir</span></li>
        </ul>
      <form id="form" class="form-inline">
        <div class="form-group">
          <input class="input" name="card_number" type="text" placeholder="Credit card number">
          <button class="submit btn btn-success">Click to Validate</button>
        </div>
      </form>
      `;
  }

  static get selector() {
    return '.form-inline';
  }

  static get inputSelector() {
    return '.input';
  }

  static get submitSelector() {
    return '.submit';
  }

  bindToDOM() {
    this.parentEl.innerHTML = InnFormWidget.markup;

    this.element = this.parentEl.querySelector(InnFormWidget.selector);
    this.submit = this.element.querySelector(InnFormWidget.submitSelector);
    this.input = this.element.querySelector(InnFormWidget.inputSelector);

    const visa = document.querySelector('.visa');
    const master = document.querySelector('.master');
    const amex = document.querySelector('.amex');
    const discover = document.querySelector('.discover');
    const jcb = document.querySelector('.jcb');
    const dinersClub = document.querySelector('.diners_club');
    const mir = document.querySelector('.mir');

    this.input.addEventListener('input', () => {
      if ((this.input.value[0] == 3 && this.input.value[1] == 7)
        || (this.input.value[0] == 3 && this.input.value[1] == 4)) {
        visa.classList.add('cdisabled');
        master.classList.add('cdisabled');
        discover.classList.add('cdisabled');
        jcb.classList.add('cdisabled');
        dinersClub.classList.add('cdisabled');
        mir.classList.add('cdisabled');
      }
      if ((this.input.value[0] == 3 && this.input.value[1] == 0)
        || (this.input.value[0] == 3 && this.input.value[1] == 6)
        || (this.input.value[0] == 5 && this.input.value[1] == 4)) {
        visa.classList.add('cdisabled');
        master.classList.add('cdisabled');
        discover.classList.add('cdisabled');
        jcb.classList.add('cdisabled');
        amex.classList.add('cdisabled');
        mir.classList.add('cdisabled');
      }
      if (this.input.value[0] == 6) {
        visa.classList.add('cdisabled');
        master.classList.add('cdisabled');
        dinersClub.classList.add('cdisabled');
        jcb.classList.add('cdisabled');
        amex.classList.add('cdisabled');
        mir.classList.add('cdisabled');
      }
      if ((this.input.value[0] == 3 && this.input.value[1] == 5 && this.input.value[2] == 2 && this.input.value[3] == 8)
        || (this.input.value[0] == 3 && this.input.value[1] == 5 && this.input.value[2] == 8 && this.input.value[3] == 9)) {
        visa.classList.add('cdisabled');
        master.classList.add('cdisabled');
        dinersClub.classList.add('cdisabled');
        discover.classList.add('cdisabled');
        amex.classList.add('cdisabled');
        mir.classList.add('cdisabled');
      }
      if (this.input.value[0] == 5) {
        visa.classList.add('cdisabled');
        jcb.classList.add('cdisabled');
        dinersClub.classList.add('cdisabled');
        discover.classList.add('cdisabled');
        amex.classList.add('cdisabled');
        mir.classList.add('cdisabled');
      }
      if (this.input.value[0] == 4) {
        master.classList.add('cdisabled');
        jcb.classList.add('cdisabled');
        dinersClub.classList.add('cdisabled');
        discover.classList.add('cdisabled');
        amex.classList.add('cdisabled');
        mir.classList.add('cdisabled');
      }
      if (this.input.value[0] == 2) {
        visa.classList.add('cdisabled');
        master.classList.add('cdisabled');
        jcb.classList.add('cdisabled');
        dinersClub.classList.add('cdisabled');
        discover.classList.add('cdisabled');
        amex.classList.add('cdisabled');
      }
      if (!this.input.value) {
        visa.classList.remove('cdisabled');
        master.classList.remove('cdisabled');
        jcb.classList.remove('cdisabled');
        dinersClub.classList.remove('cdisabled');
        discover.classList.remove('cdisabled');
        amex.classList.remove('cdisabled');
        mir.classList.remove('cdisabled');
      }
    });
    this.element.addEventListener('submit', this.onSubmit);
  }

  onSubmit(e) {
    e.preventDefault();
    const arrFormValue = Array.from(this.input.value);
    const lastNumber = arrFormValue[arrFormValue.length - 1]; // последняя цифра(контрольная)
    function checkingCard() {
      arrFormValue.pop();
      const arrFormValue2 = arrFormValue.reverse(); // числа без контрольной цифры в обратном порядке

      const arrMultiplied = []; // результат (четные цифры по порядку умножаем на 2, нечетные оставляем)
      for (let i = 0; i < arrFormValue2.length; i += 1) {
        if (i % 2 == 0) {
          arrMultiplied.push(arrFormValue2[i] * 2);
        } else {
          arrMultiplied.push(+arrFormValue2[i]);
        }
      }

      const arrTotal = []; // если получаются четные цифры по порядку, умноженные на 2, больше 10 то суммируем состав числа
      for (let i = 0; i < arrMultiplied.length; i += 1) {
        if (arrMultiplied[i] >= 10) {
          arrTotal.push((arrMultiplied[i] % 10) + 1);
        } else {
          arrTotal.push(arrMultiplied[i]);
        }
      }

      let sum = 0;
      for (let i = 0; i < arrTotal.length; i += 1) { // вычисляем сумму цифр без клнтрольной цифры
        sum += arrTotal[i];
      }

      const sumResult = sum + Number(lastNumber); // вычисляем сумму всех цифр включая последнюю (контрольную цифру)
      const input = document.querySelector('.input');
      if ((sum % 10 == lastNumber) || (sumResult % 10 == 0)) { // если сумма цифр без остатка делится на 10 то все верно
        input.classList.remove('invalid');
        input.classList.add('valid');
        return true;
      }
      input.classList.remove('valid');
      input.classList.add('invalid');
      return false;
    }
    checkingCard();
  }
}

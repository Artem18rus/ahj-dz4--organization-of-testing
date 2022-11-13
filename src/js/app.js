// TODO: write code here
// const cardArr = document.querySelectorAll('.card')
const formControl = document.querySelector('.form-control');
// console.log(formControl)
const visa = document.querySelector('.visa');
const master = document.querySelector('.master');
const amex = document.querySelector('.amex');
const discover = document.querySelector('.discover');
const jcb = document.querySelector('.jcb');
const dinersClub = document.querySelector('.diners_club');
const mir = document.querySelector('.mir');

class CreditCard {
  constructor(formControl) {
    this.formControl = formControl;
  }

  keyboardInput() {
    this.formControl.addEventListener('input', (event) => {
      if ((this.formControl.value[0] == 3 && this.formControl.value[1] == 7) || this.formControl.value == 34) {
        visa.classList.add('cdisabled');
        master.classList.add('cdisabled');
        discover.classList.add('cdisabled');
        jcb.classList.add('cdisabled');
        dinersClub.classList.add('cdisabled');
        mir.classList.add('cdisabled');
      }
      if ((this.formControl.value[0] == 3 && this.formControl.value[1] == 0) || (this.formControl.value[0] == 3 && this.formControl.value[1] == 6) || (this.formControl.value[0] == 5 && this.formControl.value[1] == 4)) {
        visa.classList.add('cdisabled');
        master.classList.add('cdisabled');
        discover.classList.add('cdisabled');
        jcb.classList.add('cdisabled');
        amex.classList.add('cdisabled');
        mir.classList.add('cdisabled');
      }
      if (this.formControl.value[0] == 6) {
        visa.classList.add('cdisabled');
        master.classList.add('cdisabled');
        dinersClub.classList.add('cdisabled');
        jcb.classList.add('cdisabled');
        amex.classList.add('cdisabled');
        mir.classList.add('cdisabled');
      }
      if (this.formControl.value[0] == 3 & this.formControl.value[1] == 5) {
        visa.classList.add('cdisabled');
        master.classList.add('cdisabled');
        dinersClub.classList.add('cdisabled');
        discover.classList.add('cdisabled');
        amex.classList.add('cdisabled');
        mir.classList.add('cdisabled');
      }
      if (this.formControl.value[0] == 5) {
        visa.classList.add('cdisabled');
        jcb.classList.add('cdisabled');
        dinersClub.classList.add('cdisabled');
        discover.classList.add('cdisabled');
        amex.classList.add('cdisabled');
        mir.classList.add('cdisabled');
      }
      if (this.formControl.value[0] == 4) {
        master.classList.add('cdisabled');
        jcb.classList.add('cdisabled');
        dinersClub.classList.add('cdisabled');
        discover.classList.add('cdisabled');
        amex.classList.add('cdisabled');
        mir.classList.add('cdisabled');
      }
      if (this.formControl.value[0] == 2) {
        visa.classList.add('cdisabled');
        master.classList.add('cdisabled');
        jcb.classList.add('cdisabled');
        dinersClub.classList.add('cdisabled');
        discover.classList.add('cdisabled');
        amex.classList.add('cdisabled');
      }
      if (!this.formControl.value) {
        visa.classList.remove('cdisabled');
        master.classList.remove('cdisabled');
        jcb.classList.remove('cdisabled');
        dinersClub.classList.remove('cdisabled');
        discover.classList.remove('cdisabled');
        amex.classList.remove('cdisabled');
      }
    });
  }

  btnClick() {
    const btnSuccess = document.querySelector('.btn-success');
    btnSuccess.addEventListener('click', (event) => {
      const arrFormValue = Array.from(this.formControl.value);
      const lastNumber = arrFormValue[arrFormValue.length - 1]; // последняя цифра(контрольная)
      function checkingCard() {
        arrFormValue.pop();
        const arrFormValue2 = arrFormValue.reverse(); // числа без контрольной цифры в обратном порядке
        const arrMultiplied = []; // результат (четные цифры по порядку умножаем на 2, нечетные оставляем)
        for (let i = 0; i < arrFormValue2.length; i++) {
          if (i % 2 == 0) {
            arrMultiplied.push(arrFormValue2[i] * 2);
          } else {
            arrMultiplied.push(+arrFormValue2[i]);
          }
        }
        const arrTotal = []; // если получаются четные цифры по порядку, умноженные на 2, больше 10 то суммируем состав числа
        for (let i = 0; i < arrMultiplied.length; i++) {
          if (arrMultiplied[i] >= 10) {
            arrTotal.push((arrMultiplied[i] % 10) + 1);
          } else {
            arrTotal.push(arrMultiplied[i]);
          }
        }
        let sum = 0;
        for (let i = 0; i < arrTotal.length; i++) { // вычисляем сумму цифр без клнтрольной цифры
          sum += arrTotal[i];
        }
        const sumResult = sum + Number(lastNumber); // вычисляем сумму всех цифр включая последнюю (контрольную цифру)
        if ((sum % 10 == lastNumber) || (sumResult % 10 == 0)) { // если сумма цифр без остатка делится на 10 то все верно
          alert('Номер карты действителен');
        } else {
          alert('Номер карты недействителен');
        }
        location.reload();
        // document.querySelector('.form-control').value = '';
      }
      checkingCard();
    });
  }
}

const eks1 = new CreditCard(formControl);
eks1.keyboardInput();
eks1.btnClick();

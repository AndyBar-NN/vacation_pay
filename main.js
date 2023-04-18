let formControl = document.querySelector('.form_control');
let salary = document.querySelector('.salary');

formControl.addEventListener('click', (e) => {
  e.preventDefault();

  let quantityMoney = document.querySelector('.quantity_money').value;
  quantityMoney = parseInt(quantityMoney);

  let quantityDays = document.querySelector('.quantity_days').value;
  quantityDays = parseInt(quantityDays);

  if (quantityMoney && quantityDays) {
    let salarySum = ((quantityMoney / 12) / 20) * quantityDays;

    salary.innerHTML = Math.round(salarySum) + " ₽";
  } else {
    alert("Введите корректные данные");
  }

});
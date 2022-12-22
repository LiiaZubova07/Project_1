//first task
//чтобы экспортировать код, который здесь есть
const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    //на несколько одинаковых элементов повесить одни и те же функции
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector);

    trigger.forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }
        //модальное окно показывается на странице
        modal.style.display = "block";
        //когда модальное окно открыто, то скролится только модальное окно
        document.body.style.overflow = 'hidden';
        //чтоб использовать класс
        // document.body.classList.add('modal-open');
      });
    });

    //модальное окно закрывается при нажатии на крестик
    close.addEventListener('click', () => {
			 modal.style.display = 'none';
			 document.body.style.overflow = '';
			 //чтоб использовать класс
			 // document.body.classList.remove('modal-open');
		 });

    //чтоб мод окно закрывалось при нажатии вне модального окна
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        //чтоб использовать класс
        // document.body.classList.remove('modal-open');
      }
    });
  }

//   const callEngineerBtn = document.querySelector('.popup_engineer_btn'),
//     //модальное окно
//     modalEngineer = document.querySelector('.popup_engineer'),
//     //крестик, который внутри модального окна
//     modalEngineerClose = document.querySelector('.popup_engineer .popup_close');

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');

  bindModal('.phone_link', '.popup', '.popup .popup_close');
};

export default modals;

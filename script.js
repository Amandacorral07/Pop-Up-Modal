// VARIABLES 

const modal = document.querySelector('.modal'),
      modalContent = document.querySelector('.modal-content'),
      button = document.querySelector('.btn'),
      close = document.querySelector('.close');
      

button.addEventListener('click', openModal)
close.addEventListener('click', closeModal)
modal.addEventListener('click', closeModal)


// OPEN MODAL

function openModal(e) {
  e.preventDefault();
  modal.style.display = 'block'
}
// CLOSE MODAL

function closeModal() {
  modalContent.classList.add('slide-up')

  setTimeout(()=>{
    modal.style.display = 'none'
    modalContent.classList.remove('slide-up')
  }, 500)
}
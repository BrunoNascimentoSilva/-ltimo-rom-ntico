const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});



function acao(){

    let modal = document.querySelector('.modal')


    modal.style.display = 'block';
}


function fechar(){

    let modal = document.querySelector('.modal')


    modal.style.display = 'none';

}
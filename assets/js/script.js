'use strict';

/**
 * adicionar evento no elemento
 */
const addEventOnElem = function (elem, type, callback) {
  // Verifica se o elemento é uma lista de elementos
  if (elem.length > 1) {
    // Adiciona o evento a cada elemento da lista
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    // Adiciona o evento ao único elemento
    elem.addEventListener(type, callback);
  }
}

/**
 * alternar barra de navegação
 */
const barraNavegacao = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  // Alterna a classe "ativo" na barra de navegação e no overlay
  barraNavegacao.classList.toggle("ativo");
  overlay.classList.toggle("ativo");
}

// Adiciona o evento de clique ao alternador de navegação
addEventOnElem(navToggler, "click", toggleNav);

/**
 * funcionalidade do slider
 */
const slider = document.querySelector("[data-slider]");
const nextBtn = document.querySelector("[data-next]");
const prevBtn = document.querySelector("[data-prev]");

// definir a posição padrão do slider
let sliderPos = 0;

// definir o número total de itens do slider
const totalSliderItems = 8;

// tornar o botão de próximo slide funcional
const slideToNext = function () {
  // Incrementa a posição do slider e aplica a transformação
  sliderPos++;
  slider.style.transform = `translateX(-${sliderPos}00%)`;

  // Verifica o estado dos botões do slider
  sliderEnd();
}

// Adiciona o evento de clique ao botão de próximo slide
addEventOnElem(nextBtn, "click", slideToNext);

// tornar o botão de slide anterior funcional
const slideToPrev = function () {
  // Decrementa a posição do slider e aplica a transformação
  sliderPos--;
  slider.style.transform = `translateX(-${sliderPos}00%)`;

  // Verifica o estado dos botões do slider
  sliderEnd();
}

// Adiciona o evento de clique ao botão de slide anterior
addEventOnElem(prevBtn, "click", slideToPrev);

// verificar quando o slider termina e o que os botões do slider devem fazer
function sliderEnd() {
  // Desabilita o botão de próximo slide se estiver no final
  if (sliderPos >= totalSliderItems - 1) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }

  // Desabilita o botão de slide anterior se estiver no início
  if (sliderPos <= 0) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
}

// Inicializa o estado dos botões do slider
sliderEnd();

/**
 * funcionalidade de quantidade do produto
 */
const totalPriceElem = document.querySelector("[data-total-price]");
const qtyElem = document.querySelector("[data-qty]");
const qtyMinusBtn = document.querySelector("[data-qty-minus]");
const qtyPlusBtn = document.querySelector("[data-qty-plus]");

// definir a quantidade padrão do produto
let qty = 1;

// definir o preço padrão do produto
let productPrice = 1899.99;

// definir o preço total inicial
let totalPrice = 1899.99;

const increaseProductQty = function () {
  // Incrementa a quantidade do produto e atualiza o preço total
  qty++;
  totalPrice = (qty * productPrice).toFixed(2);

  // Atualiza os elementos de quantidade e preço total na interface
  qtyElem.textContent = qty;
  totalPriceElem.textContent = `R$${totalPrice.replace('.', ',')}`;
}

// Adiciona o evento de clique ao botão de aumentar quantidade
addEventOnElem(qtyPlusBtn, "click", increaseProductQty);

const decreaseProductQty = function () {
  // Decrementa a quantidade do produto se for maior que 1 e atualiza o preço total
  if (qty > 1) qty--;
  totalPrice = (qty * productPrice).toFixed(2);

  // Atualiza os elementos de quantidade e preço total na interface
  qtyElem.textContent = qty;
  totalPriceElem.textContent = `R$${totalPrice.replace('.', ',')}`;
}

// Adiciona o evento de clique ao botão de diminuir quantidade
addEventOnElem(qtyMinusBtn, "click", decreaseProductQty);
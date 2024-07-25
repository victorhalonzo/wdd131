const year = document.querySelector("#currentyear");
const lastModified= document.querySelector("#lastModified");

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const titulo= document.querySelector('h1');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
	titulo.classList.toggle('hide');
});


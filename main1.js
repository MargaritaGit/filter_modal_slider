'use strict'

const btns = document.querySelectorAll('.filter-btns__item');
const images = document.querySelectorAll('.filter-content img');
const select = document.getElementById('filter-options');

for (const btn of btns) {
    btn.onclick = function () {
        filterImage(this.dataset.filter);
    }
}

function filterImage(sel) {
    for (let img of images) {
        img.style.display = 'none';
        if (img.classList.contains(sel)) {
            setTimeout(() => {
                img.style.display = 'block';
            }, 0);
        }
    }

    for (let btn of btns) {
        if (btn.dataset.filter === sel) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    }

    select.value = sel;
}

select.addEventListener('change', () => {
    filterImage(select.value);
})

const modal = document.getElementById('modal');
const closer = document.querySelector('.modal__close');
const imgModal = document.querySelector('.modal-img');

// const imgSrc = ['./img/animal1.jpg', './img/nature1.jpg', './img/people1.jpg', './img/animal2.jpg', './img/people2.jpg', './img/nature2.jpg', './img/animal3.jpg', './img/nature4.jpg', './img/people4.jpg', './img/animal4.jpg', './img/nature3.jpg', './img/people3.jpg'];

// const imgSrc = [];

// for (let img of images) {
//     imgSrc.push(img.src);
// }

// console.log(imgSrc);

const btnPrev = document.querySelector('.slider__nav_prev');
const btnNext = document.querySelector('.slider__nav_next');

let currentIndex = 0;



for (let i = 0; i < images.length; i++) {


    images[i].onclick = () => {

        const imgCath = [];

        for (let i = 0; i < images.length; i++) {
            if (images[i].classList.contains(select.value)) {
                imgCath.push(images[i]);
            }
        }


        // const imgCath = Array.from(images).filter(img => img.classList.contains(select.value)); // OK, Array.from()
        // const imgCath = [...images].filter(img => img.classList.contains(select.value));  // OK, spread operator ...

        console.log(imgCath);

        modal.classList.add('modal__active');

        showModalImage(i, images);

        modal.addEventListener('click', hideModal);

        closer.addEventListener('click', closeModal);

        btnPrev.onclick = () => {
            showModalImage(currentIndex - 1, imgCath);
        }
        btnNext.onclick = () => {
            showModalImage(currentIndex + 1, imgCath);
        }
    }
}

function showModalImage(index, images) {
    if (index >= images.length) {
        index = 0;
    } else if (index < 0) {
        index = images.length - 1;
    }

    imgModal.src = images[index].src;
    currentIndex = index;
}
function closeModal() {
    modal.classList.remove('modal__active');
    closer.removeEventListener('click', closeModal);
    modal.removeEventListener('click', hideModal);
}

function hideModal(event) {
    if (event.target === modal) {
        closeModal();
        // console.log(event.target); // target - то, по чему мы кликнули
        console.log(event.currentTarget); // currentTarget - то, на чём висит обработчик Listener
    } else {
        // console.log(event.target);
        // console.log(event.currentTarget);
    }
}
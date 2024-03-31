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
            }, 0)
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
const imgSources = ['./img/animal1.jpg', './img/nature1.jpg', './img/people1.jpg', './img/animal2.jpg', './img/people2.jpg', './img/nature2.jpg', './img/animal3.jpg', './img/nature4.jpg', './img/people4.jpg', './img/animal4.jpg', './img/nature3.jpg', './img/people3.jpg'];

for (let i = 0; i <= images.length; i++) {
    images[i].onclick = () => {
        modal.classList.add('modal__active');

        showModalImage(i);

        modal.addEventListener('click', hideModal);

        closer.addEventListener('click', closeModal);

        function showModalImage(index) {
            imgModal.src = imgSources[index];
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
                console.log(event.currentTarget);
            }
        }
    }
}
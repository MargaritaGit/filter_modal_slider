'use strict'

const btns = document.querySelectorAll('.filter-btns__item');
const images = document.querySelectorAll('.all');
const options = document.querySelectorAll('#filter-options option');
// const select = document.getElementById('filter-options');

// for (const option of options) {
//     console.log(option);
//     const value = option.getAttribute('value');
//     console.log(value);
//     option.onclick = () => {
//         hideElements(images);
//         showChoosenCards(value);
//     }
// }

for (const btn of btns) {
    const category = btn.dataset.filter;
    btn.onclick = () => {
        // console.log(category);
        // hideElements(images);
        showChoosenCards(category);
        // updateBtns();
        for (let btn of btns) {
            btn.classList.remove('active');
        }
        if (btn.dataset.filter === category) {
            btn.classList.add('active');
        }

        // внутри функции аргументом передаём выражение, значение которого вычисляется, возвращается и присваивается параметру
    }
}

function hideElements(arrayOfElements) {
    for (const element of arrayOfElements) {
        element.style.display = 'none';
        // console.log(element.style.display);
    }
}

function showChoosenCards(category) {
    console.log(category);

    for (const img of images) {
        // console.log(img);
        if (img.classList.contains(category)) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';

        }

    }

    // if (category === 'animal') {
    //     console.log('if')
    //     const animals = images.;
    //     console.log(animals);
    //     for (const animal of animals) {
    //         animal.style.display = 'block';
    //     }
    // }

}

// function updateBtns() {
//     btn.classList.remove('active');
// }


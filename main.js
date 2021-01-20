const ul = document.querySelector('ul');
const input = document.querySelector('#add');
const btn = document.querySelector('button');
const search = document.querySelector('#search');
let listItems = [];
btn.addEventListener('click', function() {
    if (input.value) {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.classList.add('delete');
        btn.textContent = 'delete';
        li.textContent = input.value;

        ul.appendChild(li);
        li.appendChild(btn);
        listItems.push(li);
        input.value = '';
        btn.addEventListener('click', () => {
            event.target.remove();
            li.remove();
            listItems.splice(listItems.indexOf(li), 1);
        });

    }
})


search.addEventListener('input', (e) => {
    let filteredList = listItems.filter(li => li.textContent.toLowerCase().includes(e.target.value.toLowerCase()))
    ul.textContent = '';
    filteredList.forEach(item => {
        ul.appendChild(item);
    })
})


// tasksList.forEach(task => {
//     const li = document.createElement('li');
//     li.textContent = task;
//     ul.appendChild(li);
// })
// const li = document.querySelectorAll('li');

// if (del) {
//    

// }
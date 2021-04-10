const addTodos = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generatTodoes = todo =>{

    const html = `
        <li class="list-group-item text-light d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    list.innerHTML += html;
}

addTodos.addEventListener('submit', e =>{
    e.preventDefault();

    const todo = addTodos.add.value.trim();

    if(todo.length){
        generatTodoes(todo);
        addTodos.reset();
    }
    
});

list.addEventListener('click', e => {

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterTodos = term =>{
    Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('filtred'));

    Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('filtred'));
};

search.addEventListener('keyup', e =>{
    const term = search.value.trim().toLowerCase();

    filterTodos(term);
});
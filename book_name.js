// const del = document.querySelectorAll('.delete');
// del.forEach(function(btn)
// {
//     btn.addEventListener('click',function(e){
//         const li= e.target.parentElement;
//         li.parentNode.removeChild(li);


    
//     });
// });

const list = document.querySelector('.list');

list.addEventListener('click',function(e){
    if(e.target.className=='delete'){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
});

const form = document.querySelector('.book-add');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const value = document.querySelector('.search').value;
    document.querySelector('.search').value= null;
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const del = document.createElement('span');

    bookName.textContent= value;
    del.textContent = 'delete';

    //give class name to elements
    bookName.classList.add('name');
    del.classList.add('delete');

    //appending the elements to dom
    li.appendChild(bookName);
    li.appendChild(del);
    list.appendChild(li);


});


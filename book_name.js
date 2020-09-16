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
    if(value){
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
    }

});

const search1 = document.querySelector('.search1');

search1.addEventListener('keyup',function(e){
    const value = e.target.value.toLowerCase();
    
    const books = list.querySelectorAll('li');
    books.forEach(function(book){
        const name = book.firstElementChild.textContent;
        if(name.toLowerCase().indexOf(value) != -1){
            book.style.display='flex';
        }
        else{
            book.style.display= 'none';
        }
    });
});

const dark = document.querySelector('.dark');

dark.addEventListener('click',function(e){
    if(document.body.getAttribute('class')!='darkMode'){
        document.body.setAttribute('class','darkMode');
        dark.textContent='Dark Mode On';
        
    }
    else{
        document.body.removeAttribute('class');
        dark.textContent='Dark Mode'
    }
});

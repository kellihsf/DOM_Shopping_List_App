let headerTitle = document.getElementById('header-title')
let items = document.getElementsByClassName('list-group-item')

let input = document.querySelector('input')

let submit = document.querySelector('input[type="submit"]')
submit.value = 'SUBMIT'

// Sets LI background colors
let odd = document.querySelectorAll('li:nth-child(odd)')
for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = "#f4f4f4"
}

let even = document.querySelectorAll('li:nth-child(even)')
for(let i = 0; i < even.length; i++) {
    even[i].style.backgroundColor = "#adb5bd"
}

////////////////////////////////////////////////////////////
let itemInput = document.querySelector('input[type="text"]')
let form = document.querySelector('form')
let select = document.querySelector('select');

itemInput.addEventListener('keydown', runEvent)
itemInput.addEventListener('keyup', runEvent)

let button = document.getElementById('button').addEventListener('click', runEvent)

function runEvent(event) {
    event.preventDefault()
    console.log('EVENT TYPE: '+ event.type)
    console.log(event.target.value)
}

select.addEventListener('change', runEvent)
select.addEventListener('input', runEvent)

form.addEventListener('submit', runEvent)
let headerTitle = document.getElementById('header-title')
let items = document.getElementsByClassName('list-group-item')

let input = document.querySelector('input')
input.value = 'Add List Items'

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

let itemList = document.querySelector('#items')
// parentNode
console.log(itemList.parentNode)
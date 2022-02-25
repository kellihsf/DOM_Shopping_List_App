let form = document.getElementById('addForm')
let itemList = document.getElementById('items')
let filter = document.getElementById('filter')

//Form Submit event
form.addEventListener('submit', addItem)

// Delete event
itemList.addEventListener('click', removeItem)

// Filter/Search event
filter.addEventListener('keyup', filterItems)

// Add item
function addItem(event) {
    event.preventDefault()

   // Get Input Value
   let newItem = document.getElementById('item').value

   // Create new li element
   let li = document.createElement('li')

   // Add class
   li.className = 'list-group-item'
   // Add text node with input value
   li.appendChild(document.createTextNode(newItem))


   //Create delete button for each new element
    let deleteButton = document.createElement('button')

    // Add classes to delete button
    deleteButton.className = 'btn btn-danger btn-sm float-right delete'

    //Append text node
    deleteButton.appendChild(document.createTextNode('X'))

    // Append button to LI
    li.appendChild(deleteButton)

    // Append LI to list 
    itemList.appendChild(li)
}

// Remove Item
function removeItem(event) {
    // if the button has the class of delete
    if(event.target.classList.contains('delete')) {
        if(confirm('Are you sure?')) {
            let li = event.target.parentElement
            itemList.removeChild(li)
        }
    }
}

function filterItems(event) {
    // Change text to lower case
    let text = event.target.value.toLowerCase()
    let items = itemList.getElementsByTagName('li')
    // Turn collection into array
    Array.from(items).forEach(function(item) {
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none';
        }
    })
}
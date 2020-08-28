// querySelector - NodeList
// can convert NodeList in an array depending on what needs to be done
const inputs = document.querySelectorAll(".controls input");

// create a function for handling update
function handleUpdate() {
    console.log('YOU ARE IN HANDLE UPDATE')
}

// iterate over each input and add an event listener if there is a change to pass on the handle update function
inputs.forEach( input => input.addEventListener('change', handleUpdate))




// let controlsMove = false;
// querySelector - NodeList
// can convert NodeList in an array depending on what needs to be done
const inputs = document.querySelectorAll(".controls input");

// create a function for handling update
function handleUpdate() {
    // console.log('YOU ARE IN HANDLE UPDATE', this.value)
    // dataset is an object that will contain all the data attributes for that particular element
    // this will append 'px' on elements that need it
    const suffix = this.dataset.sizing || '';
    // console.log(suffix)

    // update the css variable to manipulate updates
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)

}

// refactor:
inputs.forEach(input => {
    input.addEventListener('change', handleUpdate);
    input.addEventListener('mousemove', handleUpdate);
})


// iterate over each input and add an event listener if there is a change to pass on the handle update function
// inputs.forEach( input => input.addEventListener('change', handleUpdate))

// Event listener for mouse movement
// needs to have a ternary only for controls
// inputs.forEach( input => input.addEventListener('mousemove', handleUpdate))

// event listener for only when the mouse is clicked
// inputs.forEach( input => input.addEventListener('mousedown', handleUpdate))
// inputs.forEach( input => input.addEventListener('mousedown', handleUpdate, controlsMove=true))
// inputs.forEach( input => input.addEventListener('mouseup', handleUpdate, controlsMove=false))





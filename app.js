
// set initial count
let counter = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn')
 console.log(btns)

 btns.forEach(function(btn){
    console.log(btn);
    btn.addEventListener('click', function(e){
        // console.log(e.currentTarget.classList);
        const styles = (e.currentTarget.classList);

        if(styles.contains('decrease')){
            counter--;
        } else if(styles.contains('increase')){
            counter++;
        } else {
            counter = 0;
        }

        if(counter > 0){
            value.style.color = 'green';
        } else if(counter < 0){
            value.style.color = 'red';
        } else {
            value.style.color = 'black';
        }

        value.textContent = counter;
    })
 })
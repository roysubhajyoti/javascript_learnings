const buttons= document.querySelectorAll('.button')
//console.log(buttons);

const body = document.querySelector('body')

buttons.forEach(function(button) {
    console.log(button);

    button.addEventListener('click',function(e) {

        if(e.target.id === 'bg-orange-500')
            body.style.backgroundColor = '#ff6600';
        if(e.target.id === 'bg-slate-600')
            body.style.backgroundColor = 'gray';
        if(e.target.id === 'bg-blue-500')
            body.style.backgroundColor = 'blue';
        if(e.target.id === 'bg-teal-400')
            body.style.backgroundColor = '#00FFFF';




    })



});


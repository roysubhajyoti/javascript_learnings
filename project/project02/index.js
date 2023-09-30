//how to take value form input 

//how to select the form 

//submit type event in form 

const form = document.querySelector('form')

//by POST or GET form sends data to the server by default we need to stop that 

//this usecase will give epty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',(e)=>{

    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result =(document.querySelector('#result'))

    if(height === '' || height <0 || isNaN(height)){
        result.innerHTML = "please give a valid height"
    }
    else if(weight === '' || weight <0 || isNaN(weight)){
        result.innerHTML = "please give a valid weight"
    }
    else{
        const Bmi = (weight /((height*height)/10000)).toFixed(1)
        result.innerHTML = `YOUR BMI : ${Bmi}`

        if(Bmi < 18.6 )
        {
            const h3 = document.createElement('h3')
            h3.appendChild(document.createTextNode('Under Weight '))
            result.appendChild(h3)
        }
        else if(Bmi>=18.6 && Bmi<=24.9)
        {
            const h3 = document.createElement('h3')
            h3.appendChild(document.createTextNode(' Normal Range '))
            result.appendChild(h3)
        }
        else{
            const h3 = document.createElement('h3')
            h3.appendChild(document.createTextNode('Overweight '))
            result.appendChild(h3)

        }
    }
    

})

form.addEventListener('reset',(e) => {
    const result = document.querySelector('#result')
    result.innerHTML = "";

    
})
console.log('javascript file is loaded')

fetch('http://puzzle.mead.io/puzzle').then( (response) =>{
    response.json().then( (data)=>{
        console.log(data)
    })
} )

// fetch('http://localhost:3000/weather?address=pune').then( (response) =>{
//     response.json().then( (data) =>{

//         if(data.error){
//             console.log(error)
//         }
//         else{
//             console.log(data)
//         }
        
//     } )
// }  )


 const weatherForm =  document.querySelector('form')
const search = document.querySelector('input')

const message0 = document.querySelector('#message0')
const message1 = document.querySelector('#message1')
const message2 = document.querySelector('#message2')
const message3 = document.querySelector('#message3')
const message4 = document.querySelector('#message4')

message0.textContent = ''
message1.textContent = ''
message2.textContent = ''
message3.textContent = ''
message4.textContent = ''


 weatherForm.addEventListener('submit' , (e)=>{
   e.preventDefault()

     const location = search.value
      // console.log(location)
      message1.textContent = 'Loading...'

   //  fetch('http://localhost:3000/weather?address='+ location).then((response)=>{
    fetch('/weather?address='+ location).then((response)=>{
        response.json().then((data)=>{

            if(data.error){
                message0.textContent = data.error
            }
            else{
                console.log(data)
                message1.textContent = data.data.location
                message2.textContent = data.data.long
                message3.textContent = data.data.lat
                message4.textContent = data.data.center
            }

            
        })
     })

 })

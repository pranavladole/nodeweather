const express = require('express')
const path = require('path');
const hbs = require('hbs')
const request = require('request')
const geocode = require('../express1/src/app2')

const app = express()
const port = process.env.PORT || 3000

app.engine('hbs', require('hbs').__express);


//define path
const publicDirectoryPath = path.join(__dirname, './public')
const viewPath = path.join(__dirname,"./template/views")
const partialPath = path.join(__dirname,"./template/partials")

//setup handlebars
app.set('view engine', 'hbs');
app.set('views', viewPath)
hbs.registerPartials(partialPath)


//set up static directory
app.use(express.static(publicDirectoryPath))

// const help = path.join(__dirname,'./public/help.html')
// app.use(express.static(help))
// app.get(' ' ,(req,res)=>{
//     res.render('index')
// })


app.get('', (req, res) => {
    res.render('index', {
       title:'weather app',
       name:'pranav'
    })
})





app.get('/help/*' , (req,res) =>{
    res.send('help fwd not found')
})


app.get('/about', (req,res) =>{
    res.render('about',{
        title:'about page',
        
    })
})

app.get( '/help' ,(req,res) =>{
    res.render('help' , {
        title:'help'
    })
} )

app.get('/weather', (req,res) =>{
    if(!req.query.address){
        return res.send({
            error : 'provide proper address'
        })}
        geocode( req.query.address , (error,data) =>{
          return res.send( { data })
            }
)

        // res.send({
        //     city:'amt',
        //     state:'mah',
        //     address : req.query.address
        // })
    }
)

app.get('/products' , (req,res)=>{

    if(!req.query.search){

       return res.send({
            error:'you must provide search term!'
        })
    }

    console.log(req.query.search)
    res.send({
        products:[]
    })

})


// app.get('' , (req,res)=>{
//         res.send("<h1>Hello</h1>")
//        // res.render('index')

// })

// app.get('/about' , (req,res)=>{
//     res.send('<div><title>about</title><h1>this is about page</h1></div>')

// })



// app.get('/help' , (req,res)=>{
   
//     res.send({
//         name:"pranav",
//         age:23
//     })
//     })

// app.listen(3000 , ()=>{
//     console.log("running here")
// }) 



app.listen(port , ()=>{
        console.log("running "+port)
    }) 
    
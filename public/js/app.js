console.log('Javascript loaded from client side')

// fetch('http://localhost:3001/weather?address=%27varanasi%27').then((response)=>{
//     console.table(response)
// })
// for production
fetch('/weather?address=%27varanasi%27').then((response)=>{
    console.table(response)
})
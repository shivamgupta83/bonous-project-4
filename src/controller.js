const model = require('./model')
const cron = require('node-cron');
const moment = require('moment')


const scheduler = async (req,res)=>{
    try{
        let data=req.body
      //  data.dateTime = moment().format('MMMM Do YYYY, h:mm:ss a')
        data.dateTime = moment().format('ss mm h Do MMMM ')
        let dataCreated= await model.create(data)
        res.status(201).send({Status:true, data:dataCreated})
    }
    catch(error){
        return res.status(500).send({Status:false, Message:error.message})
    }
} 

function trigger(text) {
    // Sleep for the duration of text length
    const sleepTime = text.length * 1000;
    console.log(`Sleeping for ${sleepTime}ms...`);
    setTimeout(() => {
      // Return text backwards
      console.log(text.split('').reverse().join(''));
    }, sleepTime);
  }

const  triggerFunction=  async (req, res) => {
   try{
   // let text = req.params.text
    let data =  await model.find().select({_id : 0,__v : 0})
     
    data.forEach(event => {
       
       let b = event.text.length
       let x = event.text.split('').reverse().join('')
      var task = cron.schedule( `*/${b} * * * * *`, () =>  {
        console.log(`${x}`);
      }, {
        scheduled: false
      });
      task.start();
    
      })
    
    return res.send("done")
   }catch(err){
    return res.status(500).send({message : err.message})
   }

    // let  data1 = (final.split('').reverse().join(''));
    // let b = data1.length
    
   
};

// * * * * * *
//   | | | | | |
//   | | | | | day of week
//   | | | | month
//   | | | day of month
//   | | hour
//   | minute
//   second ( optional )

// const cron = require('node-cron');

// // Define the trigger function
// function triggerFunction(text) {
//   // Sleep for the duration of text length
//   const sleepTime = text.length * 1000;
//   console.log(`Sleeping for ${sleepTime}ms...`);
//   setTimeout(() => {
//     // Return text backwards
//     console.log(text.split('').reverse().join(''));
//   }, sleepTime);
// }



// // Schedule the events
// events.forEach(event => {
//   cron.schedule(event.dateTime, () => {
//     triggerFunction(event.text);
//   });
// });


module.exports = {scheduler, triggerFunction}
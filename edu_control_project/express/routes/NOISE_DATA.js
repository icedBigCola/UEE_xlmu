var express = require('express');
var router = express.Router();
var NOISE_DATA = require('../sequelize/NOISE_DATA')




// //查询特定信息接口
// router.get('/map_town_info',async(req,res,next)=>{
//   try{
//     await mapTown.findAll({
//       where:{
//         town_name:req.user.name,
//       }
//     }).then(function(users){
//       res.send({code:0,msg:'成功',data:users[0]})
//     })
//   }
//   catch{
//     console.log(e)
//     next(e)
//   }
// })

//查询素有用户信息接口                  
router.get('/all_noise',async(req,res,next)=>{
  try{
    await NOISE_DATA.findAll().then(function(rives){
      res.send({code:0,msg:'成功',data:rives})
    })
  }
  catch(e){
    console.log(e)
    next(e)
  }
})

//通过名字查询
router.post('/recent_noise',async(req,res,next)=>{

  let noise = req.body.noise;
  var noiseResult = [];
  for(var i=0; i<noise.length; i++)
  {
    try{
      await NOISE_DATA.findOne({
        where: {
          POINTNAME: noise[i]
        },
        order:[['RECTIME', 'DESC'],]
      }).then(function(noise){
        noiseResult[i] = noise;
        // console.log(noise);
      })
    }
    catch(e){
      console.log(e)
      next(e)
    }
  }
  res.send({code:0,msg:'成功',data:noiseResult})
})

module.exports = router;
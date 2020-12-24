var express = require('express');
var router = express.Router();
var AIRSTATIONDYNAMIC = require('../sequelize/AIRSTATIONDYNAMIC')




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
router.get('/all_air',async(req,res,next)=>{
  try{
    await AIRSTATIONDYNAMIC.findAll().then(function(rives){
        console.log(rives);
      res.send({code:0,msg:'成功',data:rives})
    })
  }
  catch(e){
    console.log(e)
    next(e)
  }
})

//通过名字查询
router.post('/recent_air',async(req,res,next)=>{
    let air = req.body.air;
    var airResult = [];
    for(var i=0; i<air.length; i++)
    {
      try{
        await AIRSTATIONDYNAMIC.findOne({
          where: {
            AIRSTATIONNAME: air[i]
          },
          order:[["MONITORTIME", 'DESC'],]
        }).then(function(air){
            airResult[i] = air;
          // console.log(noise);
        })
      }
      catch(e){
        console.log(e)
        next(e)
      }
    }
    res.send({code:0,msg:'成功',data:airResult})
})

module.exports = router;
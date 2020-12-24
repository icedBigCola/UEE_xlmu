var express = require('express');
var router = express.Router();
var WEV_RIVER_WATERQUALITY_HOUR = require('../sequelize/WEV_RIVER_WATERQUALITY_HOUR')




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
router.get('/all_river_hour',async(req,res,next)=>{
  try{
    await WEV_RIVER_WATERQUALITY_HOUR.findAll().then(function(rives){
      res.send({code:0,msg:'成功',data:rives})
    })
  }
  catch(e){
    console.log(e)
    next(e)
  }
})

//通过名字查询
router.post('/search_by_name',async(req,res,next)=>{
  let {town_name} = req.body;
  // console.log(town_name);
  try{
    await mapTown.findAll({
      where: {
        town_name: town_name
      }
    }).then(function(towns){
      res.send({code:0,msg:'成功',data:towns})
      // console.log(towns);
    })
  }
  catch{
    console.log(e)
    next(e)
  }
})

//搜索一个最近日期的河流
router.post('/search_recent',async(req,res,next)=>{
  let rivers = req.body.rivers;
  var riverResult = [];
  for(var i=0; i<rivers.length; i++)
  {
    try{
      await WEV_RIVER_WATERQUALITY_HOUR.findOne({
        where: {
          RIVERNAME: rivers[i]
        },
        order:[['MONITORTIME', 'DESC'],]
      }).then(function(river){
        riverResult[i] = river;
        // console.log(river);
      })
    }
    catch(e){
      console.log(e)
      next(e)
    }
  }
  res.send({code:0,msg:'成功',data:riverResult})
})

module.exports = router;
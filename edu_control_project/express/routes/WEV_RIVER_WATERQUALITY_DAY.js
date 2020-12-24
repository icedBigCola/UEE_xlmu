var express = require('express');
var router = express.Router();
var WEV_RIVER_WATERQUALITY_DAY = require('../sequelize/WEV_RIVER_WATERQUALITY_DAY')
const { Op } = require("sequelize");




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
router.get('/all_river_day',async(req,res,next)=>{
  try{
    await WEV_RIVER_WATERQUALITY_DAY.findAll().then(function(rives){
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
  let {rivername,start,end} = req.body;
  console.log(req.body);
  try{
    await WEV_RIVER_WATERQUALITY_DAY.findAll({
      where: {
        RIVERNAME: rivername,
        MONITORDAY: {
          [Op.lt]: end,
          [Op.gt]: start,
      },
      }
    }).then(function(towns){
      res.send({code:0,msg:'成功',data:towns})
      // console.log(towns);
    })
  }
  catch(e){
    console.log(e)
    next(e)
  }
})

module.exports = router;
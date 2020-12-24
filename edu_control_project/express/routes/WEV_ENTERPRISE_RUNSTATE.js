var express = require('express');
var router = express.Router();
var WEV_ENTERPRISE_RUNSTATE = require('../sequelize/WEV_ENTERPRISE_RUNSTATE')




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
router.get('/all_enterprise',async(req,res,next)=>{
  try{
    await WEV_ENTERPRISE_RUNSTATE.findAll().then(function(rives){
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
  console.log(town_name);
  try{
    await mapTown.findAll({
      where: {
        town_name: town_name
      }
    }).then(function(towns){
      res.send({code:0,msg:'成功',data:towns})
      console.log(towns);
    })
  }
  catch{
    console.log(e)
    next(e)
  }
})

module.exports = router;
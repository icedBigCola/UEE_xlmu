var express = require('express');
var router = express.Router();
var WEV_MAP_SECTIONWITHENTERPRISE = require('../sequelize/WEV_MAP_SECTIONWITHENTERPRISE')




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
router.get('/all_map_enterprise',async(req,res,next)=>{
  try{
    await WEV_MAP_SECTIONWITHENTERPRISE.findAll(
      
    ).then(function(rives){
      res.send({code:0,msg:'成功',data:rives})
    })
  }
  catch(e){
    console.log(e)
    next(e)
  }
})

//分页查询
router.post('/all_map_enterprise_page',async(req,res,next)=>{
  console.log(req.body);
  let {limit=10, currentPage=1, total} = req.body;
  let offset = (currentPage - 1) * limit;
  try{
    await WEV_MAP_SECTIONWITHENTERPRISE.findAndCountAll(
      {
        limit:limit,
        offset:offset,
      }
    ).then(function(rives){
      res.send({code:0,msg:'成功',data:rives})
      // console.log(rives);
    })
  }
  catch(e){
    console.log(e)
    next(e)
  }
})

//通过名字查询分页
router.post('/search_by_name',async(req,res,next)=>{
  console.log(req.body);
  let {limit=10, currentPage=1, total,para} = req.body;
  let offset = (currentPage - 1) * limit;
  console.log(para);
  try{
    await WEV_MAP_SECTIONWITHENTERPRISE.findAndCountAll({
      limit:limit,
      offset:offset,
      where: {
        OBJNAME: para
      }
    }).then(function(enterprise){
      res.send({code:0,msg:'成功',data:enterprise})
      // console.log(enterprise);
    })
  }
  catch(e){
    console.log(e)
    next(e)
  }
})

//通过名字查询
router.post('/search_by_name_export',async(req,res,next)=>{
  var para = req.body.param;
  try{
    await WEV_MAP_SECTIONWITHENTERPRISE.findAll({
      where: {
        OBJNAME: para
      }
    }).then(function(enterprise){
      res.send({code:0,msg:'成功',data:enterprise})
      // console.log(enterprise);
    })
  }
  catch(e){
    console.log(e)
    next(e)
  }
})

module.exports = router;
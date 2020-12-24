var express = require('express');
var router = express.Router();
const { Op } = require("sequelize");
var WEV_WATERQUALITYHOUR_NATIONAL_DAY = require('../sequelize/WEV_WATERQUALITYHOUR_NATIONAL_DAY')




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
router.post('/all_nation_water_day',async(req,res,next)=>{
  var dateList = req.body.date;
  console.log(dateList);
  try{
    if (dateList == null)
    {
      await WEV_WATERQUALITYHOUR_NATIONAL_DAY.findAll({

      }).then(function(rives){
        res.send({code:0,msg:'成功',data:rives})
      })
    }
    else{
      await WEV_WATERQUALITYHOUR_NATIONAL_DAY.findAll({
        where:{
          MONITORDAY: {
            [Op.lt]: dateList[1],
            [Op.gt]: dateList[0],
        },
        }
      }).then(function(rives){
        res.send({code:0,msg:'成功',data:rives})
      })
    }
  }
  catch(e){
    console.log(e)
    next(e)
  }
})

router.post('/all_nation_water_day_page',async(req,res,next)=>{
  console.log(req.body);
  let {limit=10, currentPage=1, total} = req.body;
  var dateList = req.body.date;
  let offset = (currentPage - 1) * limit;
  if (dateList==null)
  {
    try{
      await WEV_WATERQUALITYHOUR_NATIONAL_DAY.findAndCountAll(
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
  }
  else{
    try{
      await WEV_WATERQUALITYHOUR_NATIONAL_DAY.findAndCountAll(
        {
          limit:limit,
          offset:offset,
          where: {
            MONITORDAY: {
              [Op.lt]: dateList[1],
              [Op.gt]: dateList[0],
          },
          }
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
  }
})

//通过名字查询分页
router.post('/search_by_name',async(req,res,next)=>{
  console.log(req.body);
  let {limit=10, currentPage=1, total,para} = req.body;
  let offset = (currentPage - 1) * limit;
  var dateList = req.body.date;
  if (dateList == null)
  {
    try{
      await WEV_WATERQUALITYHOUR_NATIONAL_DAY.findAndCountAll({
        limit:limit,
        offset:offset,
        where: {
          POINTNAME: para
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
  }
  else{
    try{
      await WEV_WATERQUALITYHOUR_NATIONAL_DAY.findAndCountAll({
        limit:limit,
        offset:offset,
        where: {
          POINTNAME: para,
          MONITORDAY: {
            [Op.lt]: dateList[1],
            [Op.gt]: dateList[0],
        },
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
  }
})

//通过名字查询
router.post('/search_by_name_export',async(req,res,next)=>{
  var para = req.body.param;
  var dateList = req.body.date;
  if (dateList == null){
    try{
      await WEV_WATERQUALITYHOUR_NATIONAL_DAY.findAll({
        where: {
          POINTNAME: para
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
  }
  else{
    try{
      await WEV_WATERQUALITYHOUR_NATIONAL_DAY.findAll({
        where: {
          POINTNAME: para,
          MONITORDAY: {
            [Op.lt]: dateList[1],
            [Op.gt]: dateList[0],
        },
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
  }
})

module.exports = router;
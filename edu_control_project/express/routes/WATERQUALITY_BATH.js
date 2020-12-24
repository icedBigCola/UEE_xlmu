var express = require('express');
var router = express.Router();
var WATERQUALITY_BATH = require('../sequelize/WATERQUALITY_BATH')




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
router.get('/WATERQUALITY_BATH1',async(req,res,next)=>{
  try{
    await WATERQUALITY_BATH.findAll().then(function(rives){
      res.send({code:0,msg:'成功',data:rives})
    })
  }
  catch(e){
    console.log(e)
    next(e)
  }
})

//通过名字查询
router.post('/WATERQUALITY_BATH2',async(req,res,next)=>{

  let BathAD = req.body.BathAD;
  var BathAD_Result = [];
  for(var i=0; i<BathAD.length; i++)
  {
    try{
      await WATERQUALITY_BATH.findOne({
        where: {
          POINTNAME: BathAD[i]
        },
        order:[['MONITORTIME', 'DESC'],]
      }).then(function(BathAD){
        BathAD_Result[i] = BathAD;
        // console.log(river);
      })
    }
    catch(e){
      console.log(e)
      next(e)
    }
  }
  res.send({code:0,msg:'成功',data:BathAD_Result})
})

module.exports = router;
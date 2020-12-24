var express = require('express');
var router = express.Router();
// var db = require('../mssql/index.js');
var User = require('../sequelize/user')
const querySql = require('../mssql/index'); //引入sql组件
const {PWD_SALT,PRIVATE_KEY,EXPRIESD} = require('../utils/constant') //引入常量
const {md5} = require('../utils/index') //引入md5加密
const jwt = require('jsonwebtoken') //引入token

// 注册接口
router.post('/register', async(req, res, next) => {
  console.log(req.body)
  let {username,password,authority} = req.body
  try {
    //查是否存在账号
    await User.findAll({
      where:{
        username:username,
      }
    }).then(function(user){
      console.log(user)
      if(!user||user.length ===0)
      {
        password = md5(`${password}${PWD_SALT}`)
        console.log(password)
        User.create({ username: username, password: password, authority:authority}).then(function(msg){
          console.log(msg);
        });
        res.send({code:0,msg:'注册成功'})
      }else{
        res.send({code:-1,msg:'该账号已注册'})
      }
    })
  }catch(e){
    console.log(e)
    next(e)
  }
});

//登陆接口
router.post('/login',async(req,res,next)=>{
  let {name,password} = req.body;
  var user;
  var result;

  // db.selectAll('user', function (err, result) {//查询所有news表的数据
  //   res.render('newsList', {results:records.recordset, moment:moment});
  // });

  try {
    //查找是否存在账户
    await User.findAll({
      where:{
        username:name,
      }
    }).then(function(users){
       user = users;
       if(!user||user.length ===0)
        {
          res.send({code:-1,msg:'当前没有任何账户'})//不存在返回查询结果
        }else{
          password = md5(`${password}${PWD_SALT}`) //密码再次加密
            User.findAll({
            where:{
              username:name,
              password:password,
            }
          }).then(function(users){
            result = users;
            if(!result || result.length === 0) //查找账号或密码没有查到结果
            {
              res.send({code:-1,msg:'账号或密码不正确'}) //有一个不正确
            }
            else //如果查到结果
            {
              let token = jwt.sign({name},PRIVATE_KEY,{expiresIn:EXPRIESD}) //生成token
              res.send({code:-0,msg:'登陆成功',token:token})
            }
            })
          }
        })
  }catch(e){
    console.log(e)
    next(e)
  }
})

//查询特定信息接口
router.get('/userinfo',async(req,res,next)=>{
  try{
    await User.findAll({
      where:{
        username:req.user.name,
      }
    }).then(function(users){
      res.send({code:0,msg:'成功',data:users[0]})
    })
  }
  catch{
    console.log(e)
    next(e)
  }
})

//查询素有用户信息接口
router.get('/alluserinfo',async(req,res,next)=>{
  try{
    await User.findAll().then(function(users){
      res.send({code:0,msg:'成功',data:users})
    })
  }
  catch{
    console.log(e)
    next(e)
  }
})

module.exports = router;

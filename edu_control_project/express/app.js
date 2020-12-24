var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors'); //引入跨域
var expressJWT = require('express-jwt'); //引入jwt
const {PRIVATE_KEY} = require('./utils/constant') //引入常量

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var maptownRouter = require('./routes/map_town');
var WEV_RIVER_WATERQUALITY_DAY = require('./routes/WEV_RIVER_WATERQUALITY_DAY');
var WEV_RIVER_WATERQUALITY_HOUR = require('./routes/WEV_RIVER_WATERQUALITY_HOUR');
var WEV_DIC_WATERQUALITYSTANDARDVALUE = require('./routes/WEV_DIC_WATERQUALITYSTANDARDVALUE');
var WEV_ENTERPRISE_RUNSTATE = require('./routes/WEV_ENTERPRISE_RUNSTATE');
var WEV_MAP_SECTIONWITHENTERPRISE = require('./routes/WEV_MAP_SECTIONWITHENTERPRISE');
var WEV_WATERQUALITYHOUR_NATIONAL_DAY = require('./routes/WEV_WATERQUALITYHOUR_NATIONAL_DAY');
var WEV_WATERQUALITYHOUR_OCEAN_DAY = require('./routes/WEV_WATERQUALITYHOUR_OCEAN_DAY');
var MAP_AIRSTATION_evw = require('./routes/MAP_AIRSTATION_evw');
var WATERQUALITY_BATH = require('./routes/WATERQUALITY_BATH');
var NOISE_DATA = require('./routes/NOISE_DATA');
var AIRSTATIONDYNAMIC = require('./routes/AIRSTATIONDYNAMIC');
// var xinxicourse_ku = require('./routes/xinxicourse_ku');
var xinxicourse_ku = require('./routes/xinxicourse_ku');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//jwt校验
app.use(expressJWT({
  secret:PRIVATE_KEY,
  algorithms:['HS256'],
}).unless({
  path:['/users/register','/users/login']//白名单，除了这些之外，其他url都需要验证
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/map_town', maptownRouter);
app.use('/river_day', WEV_RIVER_WATERQUALITY_DAY);
app.use('/river_hour', WEV_RIVER_WATERQUALITY_HOUR);
app.use('/water_quality', WEV_DIC_WATERQUALITYSTANDARDVALUE);
app.use('/enterprise', WEV_ENTERPRISE_RUNSTATE);
app.use('/map_enterprise', WEV_MAP_SECTIONWITHENTERPRISE);
app.use('/nation_water_day', WEV_WATERQUALITYHOUR_NATIONAL_DAY);
app.use('/nation_ocean_day', WEV_WATERQUALITYHOUR_OCEAN_DAY);
app.use('/map_airstation', MAP_AIRSTATION_evw);
app.use('/WATERQUALITY_BATH',WATERQUALITY_BATH);
app.use('/noise',NOISE_DATA);
app.use('/air',AIRSTATIONDYNAMIC);
app.use('/xinxicourse_ku',xinxicourse_ku);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  if (err.name === 'UnauthorizedError')
  {
    res.status(401).send({code:-1,msg:'token验证失败'}); //如果是token验证
  }
  else
  {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.render('error');
  }
});

module.exports = app;

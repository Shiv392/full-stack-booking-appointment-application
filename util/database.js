const Sequelize=require('sequelize');

const sequelize=new Sequelize('appointment','root','Shiv@3923',{
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize;
const Sequelize=require('sequelize');
const sequelize=require('../util/database.js');

const User=sequelize.define('form',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
        
        
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
   type:Sequelize.STRING,
   allowNull:false,
   unique:true
    },
    phonenumber:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    }
})
module.exports=User;
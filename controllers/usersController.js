const { Sequelize, sequelize } = require('../models');
const models = require('../models');
const Op = require('sequelize').Op;

exports.checkExistUser = async(req,res,next)=>{
}

exports.registHolder = async(req,res,next)=>{
}


exports.getUser = async(req, res, next) => {
}

//계약정보 가져오기
exports.getContract = async(req, res, next) => {
}



//의전팀장용 검색. 이름 민번 번호가 모두 들어오면 3항목이 모두 일치하는것을 고름
exports.getSearchForProtocoler = async(req, res, next) => {
}
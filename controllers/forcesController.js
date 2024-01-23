const models = require('../models');
const axios = require('axios');

//서버 구동 확인용. 아무 의미 없음.
exports.index = async(req, res, next) => {
    

    return res.send({name : req.query.name});
}


exports.all = async(req, res, next) => {
    
    let data = await getDataFromGo(req.query.year, req.query.month, req.query.day, req.query.isLunar)

    console.log(data);
    return res.send({day : req.query.day});
}


getDataFromGo = async(solYear, solMonth, solDay, isLunar)=>{
    const key = "iy1Nkheon98EFCKY/XZCAjs7xL/nmcSNs1BxK6GuSD3IWU+hdKklchI8x2WH4C/Z+BnVEKN8R6YTSLwT0E5QLg==";
    let xmlData;
    if(isLunar){
        xmlData = await axios.get('http://apis.data.go.kr/B090041/openapi/service/LrsrCldInfoService/getLunCalInfo',{
            params: {
                ServiceKey : key,
                solYear : solYear,
                solMonth : solMonth,
                solDay : solDay,
            }
        });    
    }else{
        xmlData = await axios.get('http://apis.data.go.kr/B090041/openapi/service/LrsrCldInfoService/getLunCalInfo',{
            params: {
                ServiceKey : key,
                solYear : solYear,
                solMonth : solMonth,
                solDay : solDay,
            }
        });
    }
    const item = xmlData.data.response.body.items.item
    console.log(item);
    const result = {yearPillar : item.lunSecha.substr('3, 2'), dayPillar : item.lunIljin.substr('3, 2')};
    return result;
}

const compony = require('../models/company/company')

module.exports.main = async(req ,res)=>{
    try {
        // const data = {name: "Aditya" , title:"panday"};
        const data = await compony.find();
        if(!data){
            return res.status(402).json({
                message:"Error"
            })
        }
        return res.status(200).json({
            data:data
        })
        // return res.send(data);
    } catch (error) {
        return res.send(`**************This is error*********** ${error}`);
    }
}   



module.exports.healthchecker = async(req , res)=>{
    try {
        return res.status(200).json({
            message:"Every Thing Good"
        })
    } catch (error) {
       return res.status(404).json({
         message:"Error in Container Health"
       }) 
    }
}
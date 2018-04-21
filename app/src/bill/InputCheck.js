export function inputCheck(name,district,city,state,mailNumber,address, mobile){
  let result ;



  if(!name || !district  || !city|| !state || !mailNumber || !address || !mobile ){ //檢查是否餘額不足
    result = {status:false,message: '请将所有必填资料填齐'}
    return result;
  }


  //姓名檢查
  let UserName_rule = /^.[\u4e00-\u9fa5]+$/;
  if(!UserName_rule.test(name)){
    result = {status:false,message: '真实姓名只能为中文'}
    return result;
  }

  //手機檢查
  let mobile_rule = /^1[3|4|5|7|8][0-9]{9}$/;
   if(!mobile_rule.test(mobile)){
     result = {status:false,message:'手机号码格式错误'}
     return result;
   }

   //姓名 區域 城市 省分 中文檢查
   let Chinese_rule = /^.[\u4e00-\u9fa5]+$/;
   if(!Chinese_rule.test(name)){
     result = {status:false,message: '真实姓名只能为中文'}
     return result;
   }
   if(!Chinese_rule.test(district)){
     result = {status:false,message: '区域只能为中文'}
     return result;
   }
   if(!Chinese_rule.test(city)){
     result = {status:false,message: '城市只能为中文'}
     return result;
   }
   if(!Chinese_rule.test(state)){
     result = {status:false,message: '省份只能为中文'}
     return result;
   }


     //數字檢查
     let Number_rule = 	/^[0-9]*$/;
     if(!Number_rule.test(mailNumber)){
       result = {status:false,message: '邮政编码只能为数字'}
       return result;
     }

result = {status:true}

 return result ;
}

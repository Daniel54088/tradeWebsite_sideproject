export function inputCheck(name, district, city, state, mailNumber, address, mobile) {
  let result;

  if (!name || !district || !city || !state || !mailNumber || !address || !mobile) { //檢查是否餘額不足
    result = {
      status: false,
      message: '请将所有必填资料填齐'
    }
    return result;
  }

  //姓名檢查
  let UserName_rule = /^.[\u4e00-\u9fa5]+$/;
  if (!UserName_rule.test(name)) {
    result = {
      status: false,
      message: '真实姓名只能为中文'
    }
    return result;
  }

  //手機檢查
  let mobile_rule = /^1[3|4|5|7|8][0-9]{9}$/;
  if (!mobile_rule.test(mobile)) {
    result = {
      status: false,
      message: '手机号码格式错误'
    }
    return result;
  }

  //姓名 區域 城市 省分 中文檢查
  let Chinese_rule = /^.[\u4e00-\u9fa5]+$/;
  if (!Chinese_rule.test(name)) {
    result = {
      status: false,
      message: '真实姓名只能为中文'
    }
    return result;
  }
  if (!Chinese_rule.test(district)) {
    result = {
      status: false,
      message: '区域只能为中文'
    }
    return result;
  }
  if (!Chinese_rule.test(city)) {
    result = {
      status: false,
      message: '城市只能为中文'
    }
    return result;
  }
  if (!Chinese_rule.test(state)) {
    result = {
      status: false,
      message: '省份只能为中文'
    }
    return result;
  }


  //數字檢查
  let Number_rule = /^[0-9]*$/;
  if (!Number_rule.test(mailNumber)) {
    result = {
      status: false,
      message: '邮政编码只能为数字'
    }
    return result;
  }

  result = {
    status: true
  }

  return result;
}



export function loginInputCheck(account, password) { //login頁面輸入檢查

  let result;

  if (!account || !password) {
    result = {
      status: false,
      message: 'Please Enter Account & Password'
    }
    return result;
  }

  let rule1 = /^[\d|a-zA-Z]{6,14}$/; //用戶名檢察

  if (!rule1.test(account)) {
    result = {
      status: false,
      message: 'Please Enter 6-14 characters in account'
    }
    return result;
  }

  if (!rule1.test(password)) {
    result = {
      status: false,
      message: 'Please Enter 6-14 characters in password'
    }
    return result;
  }
  //確認無誤
  result = {
    status: true
  }
  return result;
}


export function registerInputCheck(account, email, password, passwordConfirm, recommand) { //register頁面輸入檢查

  let result;

  if (!account || !password || !passwordConfirm || !email) {
    result = {
      status: false,
      message: 'Please enter all forms'
    }
    return result;
  }

  if (password != passwordConfirm) {
    result = {
      status: false,
      message: 'Two passwords are not consistent'
    }
    return result;
  }

  let rule1 = /^[\d|a-zA-Z]{6,14}$/; //用戶名檢察
  if (!rule1.test(account)) {
    result = {
      status: false,
      message: 'Please Enter 6-14 characters in account'
    }
    return result;
  }

  if (!rule1.test(password)) {
    result = {
      status: false,
      message: 'Please Enter 6-14 characters in password'
    }
    return result;
  }
  //確認無誤
  result = {
    status: true
  }
  return result;
}

export function forgetPassword_Step1Check(account, phone) { //忘記密碼確認

  let result;

  if (!account || !phone) {
    result = {
      status: false,
      message: 'Please enter all forms'
    }
    return result;
  }

  let rule1 = /^[\d|a-zA-Z]{6,14}$/; //用戶名檢察
  if (!rule1.test(account)) {
    result = {
      status: false,
      message: 'Please Enter 6-14 characters in account'
    }
    return result;
  }

  result = {
    status: true
  }
  return result;

}

export function forgetPassword_Step2Check(verifycode) { //忘記密碼確認

  let result;

  if (!verifycode) {
    result = {
      status: false,
      message: 'Please enter verification code'
    }
    return result;
  }

  result = {
    status: true
  }
  return result;

}

export function forgetPassword_Step3Check(newPassword, confirmPassword) { //忘記密碼確認

  let result;

  if (!newPassword || !confirmPassword) {
    result = {
      status: false,
      message: 'Please enter all forms'
    }
    return result;
  }

  if (newPassword != confirmPassword) {
    result = {
      status: false,
      message: 'two passwords are not match'
    }
    return result;
  }

  let rule1 = /^[\d|a-zA-Z]{6,14}$/; //密码檢察
  if (!rule1.test(newPassword)) {
    result = {
      status: false,
      message: 'Please Enter 6-14 characters in password'
    }
    return result;
  }

  result = {
    status: true
  }
  return result;

}
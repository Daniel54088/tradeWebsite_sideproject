function errorCheck(data){

    switch (data.err_code) {
        case '890004':   //TOKEN 錯誤

           alert('请于官网重新登入');
            //location.href = URLForMainSite;
        break;
        case '890001':  //TOKEN 空直

           alert('请于官网重新登入');
            //location.href = URLForMainSite;
        break;
        case '890002':  //TOKEN 不存在

            alert('请于官网重新登入');
            //location.href = URLForMainSite;
        break;
      default:
      alert('錯誤');
    }

}

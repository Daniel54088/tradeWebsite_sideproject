var cookieForAll  ; //只能unique
function getCookie(cookieName) {  //取得cookie程式碼
  var name = cookieName + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
  }
  return "";
}

//cookieForAll =  getCookie('ggcarry_user_info');
cookieForAll = 'eLDtBe%2FPsR%2B5JhPqFgnngn4IihJCXrSP%2FK0ia308bL6q8fLgLsVQag%3D%3D';

 var URLForMainSite; //主站網址動態化
 URLForMainSite = location.host.substr(7);
 URLForMainSite = 'http://www.'+URLForMainSite + '/';

//根據版型修正
var DomainAPIURL = 'http://alvis.ggcarry.com/'; //api的URL
var isLogin = false;  //一開始預設沒有登入
if(cookieForAll){  //確認cookie是否存在
  isLogin = true;
}

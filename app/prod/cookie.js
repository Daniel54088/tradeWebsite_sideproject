var cookieForAll  ; //只能unique
function getCookie(cookieName) {
  var name = cookieName + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
  }
  return "";
}

cookieForAll =  getCookie('ggcarry_user_info');
//cookieForAll = 'LfpRlnb%2Bi9P6iRNWlI1r1KnHxBHk%2BTcEMG0eWg6mYz%2Bq8fLgLsVQag%3D%3D';


 var URLForMainSite; //主站動態化
 URLForMainSite = location.host.substr(7);
 //根據版型修正
 var DomainAPIURL = 'https://rsapi.'+ URLForMainSite + '/' ;
 
 URLForMainSite = 'https://www.'+URLForMainSite + '/';




var isLogin = false;
if(cookieForAll){
  isLogin = true;
}


//Country block
$.ajax({
  method: "GET",
  url: DomainAPIURL+"api/access/",
  dataType:'json',
  success: function(data){
    if(!data.status){
    location.href=  URLForMainSite;
    }
    console.log(data);
  }, //是個坑  無命名function奧在手動作bind

  error: function(data){
    console.log(data);
    location.href=  URLForMainSite;
  },
});

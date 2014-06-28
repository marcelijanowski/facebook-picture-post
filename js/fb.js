define(['facebook','jquery'], function () {
  FB.init({
    appId      : '494219500711161',
    cookie     : true,
    xfbml      : true, 
    version    : 'v2.0'
  });
  FB.getLoginStatus(function(response) {
    console.log(response);
  });
});
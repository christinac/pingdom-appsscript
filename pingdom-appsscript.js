function pingavgresponse(id) {
  var url = "https://api.pingdom.com/api/2.0/summary.average/" + id;

  var response = callhelper(url);
    
  return Utilities.jsonParse(response.getContentText()).summary.responsetime.avgresponse;
}

function pingtotaldown(id) {

  var now = (+new Date()) / 1000;
  var oneweek = now - (7 * 24 * 3600);

  var url = "https://api.pingdom.com/api/2.0/summary.average/" + id + "?includeuptime=true&from=" + oneweek;

  var response = callhelper(url);
      
  return Utilities.jsonParse(response.getContentText()).summary.status.totaldown;
}

function callhelper(url){  
  var authorization =
   {
     "Authorization": "Basic USERNAME:PASSWORD in Base64",
     "App-Key": "YOUR_APP_KEY"
   };

  return UrlFetchApp.fetch(url, {headers:authorization}); 
}
var ret;
//取得網路上的資源
function HTTPGetData(urlStr) {
    var HttpObj = new XMLHttpRequest();   
    HttpObj.onreadystatechange = function () {
        if (HttpObj.readyState === 4) {
            ret = HttpObj.responseText;
            //   alert(ret);
                 callBack(ret);
         //   alert("data retrieved");
        }
    }
	HttpObj.open("GET", urlStr, true);
    HttpObj.send();
}

//上傳 dataStr 到網路上
function HTTPPostData(urlStr, dataStr ) {
    var HttpObj = new XMLHttpRequest();
	HttpObj.open("POST", urlStr, true);
    HttpObj.setRequestHeader("Content-type", "application/json+fhir");
   // HttpObj.setRequestHeader("Content-type", "application/xml+fhir");

   /*token="Bearer 46f9cab1-9f60-4ff3-9580-51f77309f78c";
   /* 將大會給予的token放進去：token="Bearer + token" */

  /* HttpObj.setRequestHeader("authorization",token);*/

    HttpObj.onreadystatechange = function () {
        if (HttpObj.readyState === 4) {
            ret = HttpObj.responseText;
          
             alert(ret);
        }
    }
    HttpObj.send(dataStr);
  //  getData
}
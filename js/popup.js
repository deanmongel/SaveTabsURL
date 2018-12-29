//功能：去掉字符串前后的任何空白字符，包括制表符、空格、换行符等
function trimStr(str){
  return str.replace(/(^\s*)|(\s*$)/g,"");
}

function show_test2(result){
  var t = result[0]
  var targetDIV = $("#test2_table");
  $(targetDIV).children().remove();
  var tr1 = $("<tr></tr>");
  var tr2 = $("<tr></tr>");
  var td11 = $("<td>" + chrome.i18n.getMessage("phoneNumber") + "</td>");
  var td12 = $("<td></td>");
  var td21 = $("<td>" + chrome.i18n.getMessage("searchResult") + "</td>");
  var td22 = $("<td></td>");
  $(td12).text(t.url);
  $(td22).text(result.length);
  $(tr1).append(td11, td12);
  $(tr2).append(td21, td22);
  $(targetDIV).append(tr1, tr2);
}

document.addEventListener('DOMContentLoaded', function() {
    var search_button = $('#test1');
    // onClick's logic below:

    $(search_button).click(function(){
      chrome.tabs.query({"currentWindow":false}, function(tabs) {
        show_test2(tabs);
        
        });
    });
});
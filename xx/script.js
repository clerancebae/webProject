
function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }
window.onload = function(){
    document.getElementById("crosshairCopy").onclick=() => {
        crosshairCopy();
        console.log("worked1")
    }
  }
  
  function crosshairCopy() {
    var copyText = document.getElementById("crosshairInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    console.log("worked")
  }
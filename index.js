let items = document.getElementById("items");
var itm = document.getElementsByClassName("itm");

for(var i=0;i<itm.length;i++){
    itm[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        if (current.length > 0) { 
            current[0].className = current[0].className.replace(" active", "");
          }
        this.className += " active";
        });
}

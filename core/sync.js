/******************************
MAIN MODULE LOADING FUNCTION
******************************/
function loadModules() {
    var getBody = document.body.innerHTML;
    var setNav = '<div id="nav"></div>';
    var setFoo = '<div id="footer"></div>';
    document.body.innerHTML = setNav + getBody + setFoo;
    $("#nav").load("./sync.html");
    $("#footer").load("./sync-footer.html");
};

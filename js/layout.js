makeNavBar = function(filepath="html/"){
    var div = document.createElement("div");
    div.setAttribute("id", "nav-bar");
    document.body.appendChild(div);
    $("#nav-bar").load(filepath + "navBar.html",
        function(){MathJax.typesetPromise();});
}

makeFooter = function(filepath="html/"){
    var div = document.createElement("div");
    div.setAttribute("id", "footer");
    document.body.appendChild(div);
    $("#footer").load(filepath + "footer.html",
        function(){MathJax.typesetPromise();});

}
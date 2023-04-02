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

toggleShow =  function(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }

makeNavContent = function(filepath="html/"){
    // first create and append container
    var div = document.createElement("div");
    div.setAttribute("id", "nav-content");
    div.setAttribute("class", "w3-container w3-hide");
    jQuery.each(content, function(i, val){
        // create sections
        var sectionDiv = document.createElement("div");
        sectionDiv.setAttribute("class", "w3-container w3-cell section");
        sectionDiv.innerHTML = i;
        jQuery.each(val, function(j, val2){
            // create chapters
            var chapter = document.createElement("div");
            chapter.setAttribute("class", "chapter");
            chapter.innerHTML = "<a href=''>"+j+"</a>";
            sectionDiv.appendChild(chapter);
        });
        div.appendChild(sectionDiv);
        
    });
    document.body.appendChild(div);
    // now add divs to 
    // jQuery.each(content, function(i, val){})
    //$("#nav-content").load(filepath + "navContent.html",
    //    function(){MathJax.typesetPromise();});

}
loadHtml = function(filepath, filenames){
  var html = ""
  for(let i=0; i<filenames.length; i++){
      html += "<div class='external-content' id="+filenames[i]+"></div>"
  }
  $(".math-content").html( html );
  $(".external-content").each(
    function(index){
      $(this).load(filepath + filenames[index] + ".html",
      function(){MathJax.typesetPromise();});});
  }
loadHtml = function(filepath, filenames){
  /*var filepath = "content/"
  var filenames = [
      "01_groups_intro",
      "02_groups_intro2",
      "03_new_post"
      ]*/
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
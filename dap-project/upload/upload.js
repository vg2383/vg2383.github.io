function onSubmitFn(){
  var form = document.getElementById("mainForm");
  
  const files = document.querySelector('[type=file]').files;

  let file = files[0];

  // Store to training directory
  SaveAs(file.name, "../training_files");
}

function navToUpload()
    {
      location.href = "upload/upload.html"
    }


    function onResetFn()
    {
      var form = document.getElementById("mainForm");
      form.reset()
    }
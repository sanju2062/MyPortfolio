function ajaxpost () {
    // (A) GET FORM DATA
    var data = new FormData();
    data.append("name", document.getElementById("name").value);
    // data.append("email", document.getElementById("user-email").value);
   
    // (B) AJAX REQUEST
    // NOTE - AJAX WILL NOT WORK WITH file://
    var xhr = new XMLHttpRequest();
    xhr.open('POST', "../../views/index.pug");
    xhr.onload = function () {
      console.log(this.response);
      console.log(this.status);
   
      // (B1) SERVER NOT RESPONDING OR SOMETHING
      // HTTP response 200 is OK
      // See https://developer.mozilla.org/en-US/docs/Web/HTTP/Status for more
      if (xhr.status != 200) {
        alert("SERVER ERROR");
      }
   
      // (B2) WHEN SERVER IS DONE
      else {
        if (xhr.response == "OK") {
          alert("SUCCESSFUL!");
        } else {
          alert("FAILURE!");
        }
      }
    };
    xhr.send(data);
   
    // (C) PREVENT FORM SUBMIT
    return false;
  }

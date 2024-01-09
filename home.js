function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    boxes = document.getElementsByClassName("box");


    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }

    for (i = 0; i < boxes.length; i++) {
      box = boxes[i];
      titles = box.querySelectorAll(".info h1");
  
      for (j = 0; j < titles.length; j++) {
          txtValue = titles[j].textContent || titles[j].innerText;
  
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              box.style.display = "";
              break; // Show the box if any title matches and exit the inner loop
          } else {
              box.style.display = "none";
          }
        }
  } 
  }

  

  document.addEventListener("DOMContentLoaded", function () {
    
    function logout() {
        alert("Logged out successfully!");

        window.location.href = "main.html"; 
    }

    var logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", logout);
    }
});



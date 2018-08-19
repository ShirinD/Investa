 <script>
    // sandbox disable popups
    if (window.self !== window.top && window.name!="view1") {;
      window.alert = function(){/*disable alert*/};
      window.confirm = function(){/*disable confirm*/};
      window.prompt = function(){/*disable prompt*/};
      window.open = function(){/*disable open*/};
    }
    
    // prevent href=# click jump
    document.addEventListener("DOMContentLoaded", function() {
      var links = document.getElementsByTagName("A");
      for(var i=0; i < links.length; i++) {
        if(links[i].href.indexOf('#')!=-1) {
          links[i].addEventListener("click", function(e) {
          console.debug("prevent href=# click");
              if (this.hash) {
                if (this.hash=="#") {
                  e.preventDefault();
                  return false;
                }
                else {
                  /*
                  var el = document.getElementById(this.hash.replace(/#/, ""));
                  if (el) {
                    el.scrollIntoView(true);
                  }
                  */
                }
              }
              return false;
          })
        }
      }
    }, false);
  </script>
  
  <!--scripts loaded here-->
  
  <script src="//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"></script>
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js"></script>
  
  
  
  <script>
  // Hide submenus

$('#body-row .collapse').collapse('hide'); 



// Collapse/Expand icon

$('#collapse-icon').addClass('fa-angle-double-left'); 



// Collapse click

$('[data-toggle=sidebar-colapse]').click(function() {

    SidebarCollapse();

});



function SidebarCollapse () {

    $('.menu-collapsed').toggleClass('d-none');

    $('.sidebar-submenu').toggleClass('d-none');

    $('.submenu-icon').toggleClass('d-none');

    $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');

    

    // Treating d-flex/d-none on separators with title

    var SeparatorTitle = $('.sidebar-separator-title');

    if ( SeparatorTitle.hasClass('d-flex') ) {

        SeparatorTitle.removeClass('d-flex');

    } else {

        SeparatorTitle.addClass('d-flex');

    }

    

    // Collapse/Expand icon

    $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');

}
  </script>


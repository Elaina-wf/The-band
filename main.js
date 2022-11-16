confirm('Do you like music?')
alert('Welcome!')
var header = document.getElementById('header');
        var mobileMenu = document.getElementById('mobile-menu');
        var headerHeight = header.clientHeight;


            //Open & close menu
        mobileMenu.onclick = function() {            
            var isClose = header.clientHeight === headerHeight;
            if(isClose) {
                header.style.height = 'auto';
                
            } else {
                header.style.height = null;
                
            }
        }


            //Auto close menu when pick any menu

        var menuItems = document.querySelectorAll('#nav-pc li a[href*="#"]');
        for (var i = 0; i < menuItems.length; i++) {
            var menuIt = menuItems[i];
            
            menuIt.onclick = function(event) {
            var isParentMenu = this.nextElementSibling && menuIt.nextElementSibling.classList.contains('subnav');

                if (!isParentMenu) {
                    header.style.height = null;
                } else {
                    event.preventDefault();
                }
            }
            
        }


        
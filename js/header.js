
class HeaderComponent{
    tagName = "HeaderComponent";
    constructor(){
        this.render();
    }
    render(){
        let html = `
        <section>
        <div class="header-top">
            <div class="container">
                <div class="row">
                    <div class="header-top-left col-lg-6 col-md-0 col-sm-12">
                        We ship packages within 24 hours of ordering
                    </div>
                    <div class="header-top-right col-lg-6 col-md-12 col-sm-12">
                        <ul>
                            <li class="dropdown-features ">
                              <div class="menu__container">
                                <div class="menu__item">
                                  <div>Features <i class="fa-solid fa-chevron-down"></i></div>
                                  <div class="menu__dropdown">
                                    <div class="menu__dropdown--item">
                                      <div>Shop Layouts <i class="fa-solid fa-chevron-right"></i></div>
                                      <div class="dropdown--item--menu">
                                        <div class="dropdown--item--item">Grid 3 Columns</div>
                                        <div class="dropdown--item--item">Grid 4 Columns</div>
                                        <div class="dropdown--item--item">Masonry 3 Columns</div>
                                        <div class="dropdown--item--item">List</div>
                                      </div>
                                    </div>
                                    <div class="menu__dropdown--item">
                                      <div>Single Products Styles <i class="fa-solid fa-chevron-right"></i></div>
                                      <div class="dropdown--item--menu">
                                        <div class="dropdown--item--item">Default</div>
                                        <div class="dropdown--item--item">Accordion Bellow Image</div>
                                        <div class="dropdown--item--item">Tabs Bellow Image</div>
                                        <div class="dropdown--item--item">Accordion next to image</div>
                                        <div class="dropdown--item--item">Out of stock</div>
                                        <div class="dropdown--item--item">On sale</div>
                                        <div class="dropdown--item--item">Custom Template</div>

                                      </div>
                                    </div>
                                    <div class="menu__dropdown--item">
                                      <div>Product gallery styles <i class="fa-solid fa-chevron-right"></i></div>
                                      <div class="dropdown--item--menu">
                                        <div class="dropdown--item--item">Child 3</div>
                                        <div class="dropdown--item--item">Child 3</div>
                                        <div class="dropdown--item--item">Child 3</div>
                                        <div class="dropdown--item--item">Child 3</div>
                                      </div>
                                    </div>
                                    <div class="menu__dropdown--item">
                                        <div>Overlays styles <i class="fa-solid fa-chevron-right"></i></div>
                                        <div class="dropdown--item--menu">
                                          <div class="dropdown--item--item">Child 4</div>
                                          <div class="dropdown--item--item">Child 4</div>
                                          <div class="dropdown--item--item">Child 4</div>
                                          <div class="dropdown--item--item">Child 4</div>
                                        </div>
                                      </div>
                                  </div>
                                </div>
                              </div>
                            </li>
     
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Terms of use</a></li>
                            <li><a href="">Wishlist</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="header-scroll" id="myHeader">
        <section>
            <div class="header-pc">
                <div class="header-middle">
                    <div class="container">
                        <div class="row">
                            <div class="col-2">
                                <img src="/img/logo.png" alt="">
                            </div>
                            <div class="col-6">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="fa-regular fa-magnifying-glass"></i></span>
                                    <input type="text" class="form-control" placeholder="Enter your search" aria-label="Username" aria-describedby="basic-addon1">
                                  </div>
                            </div>
                            <div class="col-4 header-middle-right">
                               
                                    <div class="header-middle-right-item">
                                        <i class="fa-solid fa-headphones"></i>
                                        <div class="phone-sp">
                                            <div class="sp">Support 24/7</div>
                                            <div class="phone-number">+61 (0) 3 8376 6284</div>
                                        </div>
                                    </div>
                                    <div class=" header-middle-right-item">
                                        <i class="fa-light fa-user"></i>
                                        <div class="login-register">
                                            <div class="login">Login</div>
                                            <div class="register">
                                                or register
                                            </div>
                                        </div>
                                    </div>
                                    <div class=" header-middle-right-item">
                                        <i class="fa-sharp fa-light fa-basket-shopping-simple"></i>
                                        <div class="your-cart">
                                            <div class="your">Your</div>
                                            <div class="cart">cart</div>
                                        </div>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-bottom">
                    <div class="container">
                        <div class="header-bottom-item">
                            <div class="dropdown" onmouseover="onbackdrop()" onmouseout="closebackdrop()">
                                <button class="dropbtn"><i class="fa-light fa-laptop"></i> Computers <i class="fa-regular fa-angle-down"></i></button>
                                <div class="dropdown-content">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-4">
                                                <a href="#">PC's</a>
                                                <a href="#">Laptops</a>
                                                <a href="">Notebooks</a>
                                                <a href="#">PC accessories</a>
                                            </div>
                                            <div class="col-4">
                                                <div><img src="/img/nav-computer.svg" alt=""></div>
                                            </div>
                                            <div class="col-4 find-out">
                                                <div class="find-out-left">
                                                    <h3>Computers</h3>
                                                    <p>Customers Choice</p>
                                                    <button>
                                                        Find out
                                                    </button>
                                                </div>
                                                <div class="find-out-right">
                                                    <img src="/img/bethemestore2-products-pic18.webp" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="header-bottom-item">
                            <div class="dropdown" onmouseover="onbackdrop()" onmouseout="closebackdrop()">
                                <button class="dropbtn"><i class="fa-solid fa-mobile-notch"></i> SmartPhones <i class="fa-regular fa-angle-down"></i></button>
                                <div class="dropdown-content">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-4">
                                                <a href="#">PC's</a>
                                                <a href="#">Laptops</a>
                                                <a href="">Notebooks</a>
                                                <a href="#">PC accessories</a>
                                            </div>
                                            <div class="col-4">
                                                <div><img src="/img/nav-phone.svg" alt=""></div>
                                            </div>
                                            <div class="col-4 find-out">
                                                <div class="find-out-left">
                                                    <h3>Computers</h3>
                                                    <p>Customers Choice</p>
                                                    <button>
                                                        Find out
                                                    </button>
                                                </div>
                                                <div class="find-out-right">
                                                    <img src="/img/bethemestore2-products-pic18.webp" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="header-bottom-item">
                            <div class="dropdown" onmouseover="onbackdrop()" onmouseout="closebackdrop()">
                                <button class="dropbtn"><i class="fa-light fa-watch"></i> Watches <i class="fa-regular fa-angle-down"></i></button>
                                <div class="dropdown-content">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-4">
                                                <a href="#">PC's</a>
                                                <a href="#">Laptops</a>
                                                <a href="">Notebooks</a>
                                                <a href="#">PC accessories</a>
                                            </div>
                                            <div class="col-4">
                                                <div><img src="/img/nav-computer.svg" alt=""></div>
                                            </div>
                                            <div class="col-4 find-out">
                                                <div class="find-out-left">
                                                    <h3>Computers</h3>
                                                    <p>Customers Choice</p>
                                                    <button>
                                                        Find out
                                                    </button>
                                                </div>
                                                <div class="find-out-right">
                                                    <img src="/img/bethemestore2-products-pic18.webp" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="header-bottom-item">
                            <div class="dropdown" onmouseover="onbackdrop()" onmouseout="closebackdrop()">
                                <button class="dropbtn"><i class="fa-regular fa-tv"></i> TV/Audio <i class="fa-regular fa-angle-down"></i></button>
                                <div class="dropdown-content">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-4">
                                                <a href="#">PC's</a>
                                                <a href="#">Laptops</a>
                                                <a href="">Notebooks</a>
                                                <a href="#">PC accessories</a>
                                            </div>
                                            <div class="col-4">
                                                <div><img src="/img/nav-computer.svg" alt=""></div>
                                            </div>
                                            <div class="col-4 find-out">
                                                <div class="find-out-left">
                                                    <h3>Computers</h3>
                                                    <p>Customers Choice</p>
                                                    <button>
                                                        Find out
                                                    </button>
                                                </div>
                                                <div class="find-out-right">
                                                    <img src="/img/bethemestore2-products-pic18.webp" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="header-bottom-item">
                            <div class="dropdown" onmouseover="onbackdrop()" onmouseout="closebackdrop()">
                                <button class="dropbtn"><i class="fa-regular fa-tablet"></i> Tablets <i class="fa-regular fa-angle-down"></i></button>
                                <div class="dropdown-content">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-4">
                                                <a href="#">PC's</a>
                                                <a href="#">Laptops</a>
                                                <a href="">Notebooks</a>
                                                <a href="#">PC accessories</a>
                                            </div>
                                            <div class="col-4">
                                                <div><img src="/img/nav-computer.svg" alt=""></div>
                                            </div>
                                            <div class="col-4 find-out">
                                                <div class="find-out-left">
                                                    <h3>Computers</h3>
                                                    <p>Customers Choice</p>
                                                    <button>
                                                        Find out
                                                    </button>
                                                </div>
                                                <div class="find-out-right">
                                                    <img src="/img/bethemestore2-products-pic18.webp" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="header-bottom-item" >
                            <div class="dropdown" onmouseover="onbackdrop()" onmouseout="closebackdrop()">
                                <button class="dropbtn"><i class="fa-regular fa-gamepad-modern"></i> Gaming <i class="fa-regular fa-angle-down"></i></button>
                                <div class="dropdown-content">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-4">
                                                <a href="#">PC's</a>
                                                <a href="#">Laptops</a>
                                                <a href="">Notebooks</a>
                                                <a href="#">PC accessories</a>
                                            </div>
                                            <div class="col-4">
                                                <div><img src="/img/nav-computer.svg" alt=""></div>
                                            </div>
                                            <div class="col-4 find-out">
                                                <div class="find-out-left">
                                                    <h3>Computers</h3>
                                                    <p>Customers Choice</p>
                                                    <button>
                                                        Find out
                                                    </button>
                                                </div>
                                                <div class="find-out-right">
                                                    <img src="/img/bethemestore2-products-pic18.webp" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="header-bottom-item">
                            <div class="dropdown" >
                            <button class="dropbtn"><i class="fa-light fa-grid-round-2"></i> View all </button>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
            <div class="backdrop-menu" id="backdrop-menu"></div>
            </section>
        <section>
            <div class="header-mobile">
                <div class="header-middle">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6 col-md-4">
                                <button class="btn btn-nav" onclick="openNavHeader()"><i class="fa-solid fa-bars"></i></button>
                                <img src="/img/logo.png" alt="">
                            </div>
                            <div class="col-md-4 col-sm-0 input-search">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="fa-regular fa-magnifying-glass"></i></span>
                                    <input type="text" class="form-control" placeholder="Enter your search" aria-label="Username" aria-describedby="basic-addon1">
                                  </div>
                            </div>
                            <div class="col-sm-6 col-md-4 header-middle-right">
                                <div class="header-middle-right-item">
                                </div>
                                    <div class="header-middle-right-item item-input-search">
                                    <i class="fa-regular fa-magnifying-glass"></i>
                                    </div>
                                    <div class=" header-middle-right-item">
                                        <i class="fa-light fa-user"></i>
                                        <div class="login-register">
                                            <div class="login">Login</div>
                                            <div class="register">
                                                or register
                                            </div>
                                        </div>
                                    </div>
                                    <div class=" header-middle-right-item">
                                        <i class="fa-sharp fa-light fa-basket-shopping-simple"></i>
                                        <div class="your-cart">
                                            <div class="your">Your</div>
                                            <div class="cart">cart</div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-bottom" id="header-bottom">
                    <div class="container">
                        <div class="header-bottom-item">
                            <div class="dropdown">
                                <button class="dropbtn" onclick="closeNavHeader()"><i class="fa-solid fa-xmark"></i> </button>
                            </div>
                        </div>
                        <div class="header-bottom-item">
                            <div class="dropdown">
                                <button class="dropbtn"><i class="fa-light fa-laptop"></i> Computers</button>
                            </div>
                        </div>
                        <div class="header-bottom-item">
                            <div class="dropdown">
                                <button class="dropbtn"><i class="fa-solid fa-mobile-notch"></i> SmartPhones </button>
                            </div>
                        </div>
                        <div class="header-bottom-item">
                            <div class="dropdown">
                                <button class="dropbtn"><i class="fa-light fa-watch"></i> Watches </button>
                            </div>
                        </div>
                        <div class="header-bottom-item">
                            <div class="dropdown">
                                <button class="dropbtn"><i class="fa-regular fa-tv"></i> TV/Audio </button>
                            </div>
                        </div>
                        <div class="header-bottom-item">
                            <div class="dropdown">
                                <button class="dropbtn"><i class="fa-regular fa-tablet"></i> Tablets </button>
                            </div>
                        </div>
                        <div class="header-bottom-item">
                            <div class="dropdown">
                                <button class="dropbtn"><i class="fa-regular fa-gamepad-modern"></i> Gaming </button>
                            </div>
                        </div>
                        <div class="header-bottom-item">
                            <div class="dropdown">
                            <button class="dropbtn"><i class="fa-light fa-grid-round-2"></i> View all </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
        `;
        let headercomponents =  document.getElementsByTagName(this.tagName);
        for(let i=0;i<headercomponents.length;i++){
            headercomponents[i].innerHTML = html;
        };   
    }
}
new HeaderComponent()


var count=0

function openNavHeader(){
    count++;
   if(count%2==1){
    document.getElementById("header-bottom").style.display="block"
   }
   else{
    document.getElementById("header-bottom").style.display="none"
   }

}

function closeNavHeader(){
    document.getElementById("header-bottom").style.display="none   "
}

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function onbackdrop(){
    document.getElementById("backdrop-menu").style.display="block"
}

function closebackdrop(){
    document.getElementById("backdrop-menu").style.display="none"
}
class FooterComponent{
    tagName = "FooterComponent";
    constructor(){
        this.render();
    }
    render(){
        let html = `
<div class="footer">
    <div class="footer-top">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12 footer-left">
                    <div class="footer-left-item">
                        <div class="headphone">
                            <i class="fa-solid fa-headphones"></i>
                        </div>
                        <div class="phone">
                            <div class="call">Got questions? Call us 24/7</div>
                            <div class="number">+61 (0) 3 8376 6284</div>
                        </div>
                    </div>
                    <div class="footer-left-item">
                        Level 13, 2 Elizabeth St, Melbourne, Victoria 3000, Australia
                    </div>
                    <div class="footer-left-item-icon">
                        <div class="icon"><i class="fa-brands fa-facebook-f"></i></div>
                     <div class="icon"><i class="fa-brands fa-instagram"></i></div>
                     <div class="icon"><i class="fa-brands fa-pinterest-p"></i></div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 footer-right">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-12 footer-right-item">
                            <div class="footer-right-item-title">
                                Customer service
                            </div>
                            <div class="footer-right-item-content">
                                <a href="">Orders</a>
                                <a href="">Downloads</a>
                                <a href="">Addresses</a>
                                <a href="">Account details</a>
                                <a href="">Lost password</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 footer-right-item">
                            <div class="footer-right-item-title">
                                Customer service
                            </div>
                            <div class="footer-right-item-content">
                                <a href="">Orders</a>
                                <a href="">Downloads</a>
                                <a href="">Addresses</a>
                                <a href="">Account details</a>
                                <a href="">Lost password</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 footer-right-item">
                            <div class="footer-right-item-title">
                                Customer service
                            </div>
                            <div class="footer-right-item-content">
                                <a href="">Orders</a>
                                <a href="">Downloads</a>
                                <a href="">Addresses</a>
                                <a href="">Account details</a>
                                <a href="">Lost password</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
        </div>
       
    </div>
        
    <div class="footer-bottom">
     <div class="container">
        <div class="footer-bottom-left">
            © 2022 Betheme by Muffin group | All Rights Reserved | Powered by WordPress
        </div>
        <div class="footer-bottom-right">
            <img src="/img/visa.png" alt="">
            <img src="/img/footer-icon-2.png" alt="">
            <img src="/img/ft-icon-3.png" alt="">
            <img src="/img/ft-icon-4.png" alt="">
            <img src="/img/ft-icon-5.png" alt="">
            <img src="/img/ft-icon-6.png" alt="">
            <img src="/img/ft-icon-7.png" alt="">
            <img src="/img/ft-icon-8.png" alt="">
        </div>
     </div>
    </div>
</div>
<div class="sticky-footer">
    <div class="container">
        <i class="fa-sharp fa-light fa-grid-2"></i>
        <i class="fa-light fa-user"></i>
        <i class="fa-regular fa-basket-shopping-simple"></i>
        <i class="fa-regular fa-heart"></i>
    </div>
</div>
        `;
        let footercomponents =  document.getElementsByTagName(this.tagName);
        for(let i=0;i<footercomponents.length;i++){
            footercomponents[i].innerHTML = html;
        };   
    }
}
new FooterComponent()


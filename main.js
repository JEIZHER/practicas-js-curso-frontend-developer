const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');


const navMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const productDetailCloseIcon=document.querySelector('.product-detail-close');

const navShoppingCart = document.querySelector('.navbar-shopping-cart');
const shopingCartContainer = document.querySelector('#shopingCartContainer');
const productDetailContainer= document.querySelector('#productDetail');
const cardsContainer=document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleDesktopmenu);
navMobile.addEventListener('click', toggleMobiletopmenu);
navShoppingCart.addEventListener('click', toggleShoppingCart);
productDetailCloseIcon.addEventListener('click',productCloseIcon);


function toggleDesktopmenu() {
    desktopMenu.classList.toggle('inactive');
    shopingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function toggleMobiletopmenu() {
    mobileMenu.classList.toggle('inactive');
    shopingCartContainer.classList.add('inactive');

}

function toggleShoppingCart() {
    shopingCartContainer.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');


}

function clickEnProducto(){
    productDetailContainer.classList.remove('inactive');
    shopingCartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');

}

function productCloseIcon(){
    productDetailContainer.classList.add('inactive');
}


const productList = []
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg'
});
productList.push({
    name: 'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push({
    name: 'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push({
    name: 'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push({
    name: 'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push({
    name: 'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push({
    name: 'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});

// crear el html del producto desde JS 

/* <div class="product-card">
  <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
  <div class="product-info">
    <div>
      <p>$120,00</p>
      <p>Bike</p>
    </div>
    <figure>
      <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
  </div>
</div> */

function renderproduct(array){
for (produc of array) {

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    

    const productImage = document.createElement('img');
    productImage.setAttribute('src', produc.image);
    productImage.addEventListener('click', clickEnProducto);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    
/* ------------------------------------------------------------------*/
    const productInfDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText= '$' + produc.price;

    const productName = document.createElement('p');
    productName.innerText= produc.name;

    /* colocar productName y productPrice dentro de productInfoDiv */
    productInfDiv.append(productPrice,productName);

    const productInfoFigure = document.createElement('figure');
    const productImageCart = document.createElement('img');
    productImageCart.setAttribute('src', './icons/bt_add_to_cart.svg');
   
    /* colocar productImageCard dentro de productInfoFigure */
    productInfoFigure.appendChild(productImageCart);

/* colocar productInfoDiv y productInfoFigure en productInfo */
    productInfo.append(productInfDiv,productInfoFigure);
   /* colocar  productImage y productInfo dentro de productCard */
   productCard.append(productImage,productInfo);

   cardsContainer.appendChild(productCard)
}
}

renderproduct(productList);





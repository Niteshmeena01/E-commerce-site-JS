let addItem = 0;
function addTocart(item){
     console.log(item);
        addItem += 1;
     let selectItem = document.createElement('div');
   selectItem.classList.add('new1');
   selectItem.setAttribute('id',addItem);
   var img = document.createElement('img')
   img.setAttribute('src',item.querySelector('img').currentSrc);
   var cartItems = document.getElementById('title')
   selectItem.appendChild(img)
   cartItems.appendChild(selectItem);  
}


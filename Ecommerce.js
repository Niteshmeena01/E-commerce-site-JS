let item = document.getElementById('item')
let cart = document.getElementById('cart')
let like = document.getElementById('like')


item.addEventListener('click',(i)=>{
     localStorage.getItemItem(item, item.innerHTML)
})
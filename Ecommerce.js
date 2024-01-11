let addItem = 0;
var result =1
function addTocart(item){
        addItem += 1;

     let selectItem = document.createElement('div');
   selectItem.classList.add('new1');
   selectItem.setAttribute('id',addItem);

   var img = document.createElement('img')
   img.setAttribute('src',item.querySelector('img').currentSrc);


   var productName = document.createElement('h5')
   productName.innerText = item.children[2].innerText
   

   var productQuantity = document.createElement('h5')
   productQuantity.innerText = item.children[3].innerText


   var productPrice = document.createElement('h5')
   productPrice.innerText = item.children[4].innerText


   var quantityButton = document.createElement('button')
   quantityButton.innerText = "+"

  
   var addNumber = document.createElement('span')
   addNumber.innerText = result ;
  
                    
quantityButton.addEventListener("click", function quantityNumber(){

            ++result;

   addNumber.innerText = result
     })
   var removeButton = document.createElement('button')
   removeButton.innerText = "-"
   removeButton.addEventListener("click",()=>{
      --result;
      addNumber.innerText= result

   })

   let deleteButton = document.createElement('button')
   deleteButton.innerText="Delete"
   deleteButton.setAttribute("id",'delete')
  
  



   var cartDiv = document.getElementById('title')
   selectItem.appendChild(img)
   selectItem.appendChild(productName)
   selectItem.appendChild(productQuantity)
   selectItem.appendChild(productPrice)
   selectItem.appendChild(quantityButton)
   selectItem.appendChild(addNumber)
   selectItem.appendChild(removeButton)
   selectItem.appendChild(deleteButton)
   cartDiv.appendChild(selectItem);
   

    let Remove = document.createElement('div');
    Remove.setAttribute("id","remove")
   
   deleteButton.addEventListener('click',()=>{
              selectItem.id = "remove"
   })
}


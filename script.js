let bagitems;
onload();

function onload(){
    let bagitemsStr= localStorage.getItem('bagItems');
    bagitems= bagitemsStr ? JSON.parse(bagitemsStr) :[];
    displayItemsOnHomePage();
    displayBagIcon();
}

function addTobag(itemID){
       bagitems.push(itemID);
       localStorage.setItem('bagItems', JSON.stringify(bagitems));
       displayBagIcon();
}

function displayBagIcon(){
    let bagitemcountElement=document.querySelector('.bag-item-count');
    if(bagitems.length>0){
        bagitemcountElement.style.visibility='visible';
        bagitemcountElement.innerText=bagitems.length;
    }
    else{
        bagitemcountElement.style.visibility='hidden';
    }
}
function displayItemsOnHomePage(){
    let itemscontainerelement=document.querySelector('.items_container');
     if(!itemscontainerelement){
        return;
     }
    let innerHTML='';
    items.forEach(item =>{

        innerHTML+=`
        <div class="item-container">
            <img class="item-image" src="${item.image}" alt="item image">
            <div class="rating">
                ${item.rating.stars}⭐ |${item.rating.count}
            </div>
            <div class="company-name">${item.company}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price">
                <span class="current-price">Rs.${item.current_price}</span>
                <span class="original-price">Rs.${item.original_price}</span>
                <span class="discount">(${item.discount_percentage}% OFF)</span>
            </div>
            <button class="btn-add-bag" onclick="addTobag(${item.id})">Add to Bag</button>
        </div>`
});
itemscontainerelement.innerHTML=innerHTML;
}
// use local storage to manage cart data
const addToDb = id =>{
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const getStroadCart = () =>{
    let shoppingCart = {};

        //get the shopping cart from local storage
        const storedCart = localStorage.getItem('shopping-cart');
        if(storedCart){
            shoppingCart = JSON.parse(storedCart);
        }
        return shoppingCart;
    
}
export {
    addToDb, 
    getStroadCart
}
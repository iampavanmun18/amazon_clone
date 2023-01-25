// redux thunk for asynchronous call to api which will connect to the store
export const getProducts = ()=> async(dispatch)=>{
try {
    const data = await fetch("/getproducts", {
        method: "GET",
        credentials:"include",
        headers:{
            "Content-Type": "application/json",
         
        }
    });

    const res = await data.json();
    console.log("res", res)
    dispatch({type:"SUCCESS_GET_PRODUCTS",payload:res})

} catch (error) {
    dispatch({type:"FAIL_GET_PRODUCTS",payload:error.response})
}
}


export const ADD = (item)=>{
    console.log('item', item)
    return {
        type : "ADD_CART",
        payload : item
    }
}
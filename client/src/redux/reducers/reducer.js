const products = []

export const getProductsreducer = (state = { products }, action) => {
    switch (action.type) {

        case "SUCCESS_GET_PRODUCTS":
            return {
                ...state,
                products: action.payload

            };

        case "FAIL_GET_PRODUCTS":
            return {
                ...state,
                products: action.payload


            };

        case "ADD_CART":
            console.log('inside ADD_CART')

            //same item to be added to cart logic
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id)
            console.log('itemindex', itemIndex)
            if (itemIndex >= 0) {
                state.carts[itemIndex].qnty += 1
                console.log(state.carts[itemIndex].qnty);
            } else {
                const temp = { ...action.payload, qnty: 1 }

                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }


        default:
            return state
    }
};

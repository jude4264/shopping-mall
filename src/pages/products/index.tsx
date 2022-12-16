import { useQuery } from "react-query"
// import { useFetcher } from "react-router-dom"
import { queryKeys , fetcher } from "../../queryClient"
import { Product } from "../../types";

const ProductsIndex = () => {
    const { data } = useQuery<Product[]>( queryKeys.PRODUCTS, () => 
    fetcher({
        method : 'GET',
        path : '/products',
    }))
    
    console.log(data);

    return (
    <div>
        <ul>
            {data?.map(product=>(
                <ProductItem {...product} key={product.id}/>
            ))}
        </ul>
    </div>
    )
}

// category,description,id,image,price,rating,title

/** 형태 */
// category: "men's clothing"
// description : "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price : 109.95
// rating : {rate: 3.9, count: 120}
// title : "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"


export default ProductsIndex
import { QueryClient } from "react-query";


type AnyOBJ = {[key: string] : any } 

// Create a client
export const getClient = (() => {
  let client: QueryClient | null = null;
  return () => {
    if (!client) client = new QueryClient({});
    return client;
  };
})();

const BASE_URL = 'https://fakestoreapi.com'

export const fetcher =async ({
    method,
    path,
    body,
    params
}:{
    method : 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    path : string;
    body ?: AnyOBJ;
    params ?:AnyOBJ;
}) => {
    try {
        const url = `${BASE_URL}${path}`
        const fetchOption : RequestInit = {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': BASE_URL
            }

        }
        
        const res = await fetch (url, fetchOption)
        const json = await res.json()
        return json
    } catch (err) {
        console.error(err)
        
    }
    
}

export const queryKeys = {
    PRODUCTS: 'PRODUCTS',
}

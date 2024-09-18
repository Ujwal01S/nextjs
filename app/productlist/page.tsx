'use client'
import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

// async function productList() {
//     let data = await fetch('https://dummyjson.com/products');
//     data = await data.json();
//     return data.products
// };

const ProductPage = () => {
  const [product, setProduct] = useState([]);

  const {data, isLoading} = useQuery({
    queryKey: ['product'],
    queryFn: () => fetch('https://dummyjson.com/products').then((res) => 
    res.json()),

  });



  useEffect(() => {
    if(data) {
        setProduct(data?.products);
    }
  }, [data]);

  if(isLoading) return <p>Data is loading....</p>

  console.log(data);

    // useEffect(() => {
    //     const fetchData = async() => {

    //         let data = await fetch('https://dummyjson.com/products');
    //         data = await data.json();
    //         console.log(data);
    //         setProduct(data.products);
    //     }
    //     fetchData();

        // let data = await fetch('https://dummyjson.com/products');
        // data = await data.json();
        // console.log(data);
    // }, []);

    // let products = await productList();
    // console.log(products);

  return (
 
    <>
    
    <div className=' flex flex-col items-center'>
        Product List
        {product.map((p) => (

            <Card className='w-1/2 my-2' key={p.id}>
            <CardHeader>
              <CardTitle>{p.title}</CardTitle>
              <CardDescription>{p.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className='font-semibold text-cyan-700'>{p.price}</p>
            </CardContent>
          </Card>
        ))}
    </div>


    </>
  )
}

export default ProductPage;
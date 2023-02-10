import React from 'react'
import Hero from './Hero'
import PopularProducts from './PopularProducts'
import ProductsYouLinke from './ProductsYouLike'
import Third from './Third'
import TopPicks from './TopPicks'
import Zero from './Zero'

export default function index() {
  return (
    <>
     <Hero />
     <PopularProducts /> 
     <Zero />
     <ProductsYouLinke />
     <Third />
     <TopPicks />
    </>
  )
}

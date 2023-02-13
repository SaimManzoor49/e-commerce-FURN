import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { FiMinus } from 'react-icons/fi'
import { GrAdd } from 'react-icons/gr'
import { AiOutlineHeart } from 'react-icons/ai'
import Reviews from '../../../components/Reviews'
import Description from '../../../components/Description'
import Specification from '../../../components/Specification'
import Comments from '../../../components/Comments'


import fakeProducts from '../../../data/fakeProducts'


export default function Index() {
  let mainImg = 'https://images.unsplash.com/photo-1634643836960-c345b3c3e998?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8c29mYXx8fHx8fDE2NzYxMTQzMDA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600'
  
  const [info, setInfo] = useState('reviews')
  const [count, setCount] = useState(0)
  const [viewProduct, setViewProduct] = useState(0)
  const [imgSrc, setImgSrc] = useState(mainImg)
  
  const img2 = 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8c29mYXx8fHx8fDE2NzYyMTgzNzc&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600'
  const img3 = 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8c29mYXx8fHx8fDE2NzYyMTgzNzc&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600'
  const img4 = 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8c29mYXx8fHx8fDE2NzYyMTgzNzc&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600'
  const img5 = 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8c29mYXx8fHx8fDE2NzYyMTgzNzc&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600'
  
  const handleInfo = (e) => {
    setInfo(e.target.value)
  }

  
  const handleImg = (e) => {
    setImgSrc(e.target.currentSrc)
  }
  
  
  
  const {productId} = useParams()
  
  useEffect(() => {
    
    
    const productToShow = fakeProducts.find((p)=>{
      return productId==p.id;
      
    })
    setViewProduct(productToShow)
    setImgSrc(productToShow.image)
  }, [])
  
  return (
    <>



      <div className="container-fluid">
        <div className="row bg-primary">
          <div className="col ms-1">
            {/* <div className="bg-img1 ms-1"></div> */}
            <div className="position-relative">
              <img className='img-fluid' src='https://images.unsplash.com/photo-1634643836960-c345b3c3e998?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8c29mYXx8fHx8fDE2NzYxMTQzMDA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920' alt="" />
              <div className="col-4 bg-primar position-about py-2 py-md-4 px-2 px-md-5 fw-bold">
                <h1 className='fw-bold f2 text-white '>Products Details</h1>
                <h5 className=' f3 text-white text-decoration-none  '><Link to={'/'} className=' f3 text-white text-decoration-none  hover-color' >Home </Link>  &gt; <Link to={'/contact'} className=' f3 text-white text-decoration-none hover-color' >ProductDetails</Link></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary ms-3 ms-md-5 bottom-line"></div>


      <div className="container mt-5 mb-3">
        <div className="row">
          <div className="col-12 col-md-6">

            <img className='img-fluid' src={imgSrc} alt="" />

            <div className="row mt-3 mb-3">
              <div className="col-3">

                <img className='img-fluid' onClick={handleImg} src={img2} alt="" />
              </div>
              <div className="col-3">
                <img className='img-fluid' onClick={handleImg} src={img3} alt="" />

              </div>
              <div className="col-3">
                <img className='img-fluid' onClick={handleImg} src={img4} alt="" />

              </div>
              <div className="col-3">

                <img className='img-fluid' onClick={handleImg} src={img5} alt="" />
              </div>
            </div>
          </div>


          <div className="col-12 col-md-6">

            <h3>{viewProduct.name}</h3>
            <h5 className='text-secondary'>{viewProduct.price}</h5>
            <small>Catagory   : {viewProduct.category}</small><br />
            <small>Avaliablity   : In Stock</small>
            <hr className='mt-3 disabled' />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eveniet architecto perferendis maxime molestiae. Eum, delectus fuga corrupti, modi accusantium earum velit aspernatur culpa ut officia consequatur, eligendi iure doloribus!</p>

            <div className="btn-group " role="group" aria-label="Basic outlined example">
              <button type="button" className="btn btn-secondary btn-outline-primary  fs-6 fw-bold px-3" onClick={() => { setCount(count === 0 ? 0 : count - 1) }}><FiMinus className='mb-1 text-dark' /></button>
              <button type="button" className="btn btn-secondary disabled text-black fw-bold fs-6 px-3 btn-outline-primary">{count}</button>
              <button type="button" className="btn btn-secondary btn-outline-primary  fs-6 fw-bold px-3" onClick={() => { setCount(count + 1) }}><GrAdd className='mb-1' /></button>
            </div><br />
            <button className='btn btn-secondary borderBottom text-white fw-bold rounded-0 mt-1 mt-md-3 mb-0 mb-md-2 f4 px-5 py-3' >ADD TO CART</button>
            <button className='btn btn-outline-secondary outline-transparent py-2 ms-4 mt-1 shadow rounded-circle'><AiOutlineHeart /></button>

          </div>
        </div>







        {/* /////////////////////////////////////////////////// */}





        <div className="row">
          <div className="col-12 col-md-6">


            <button className='btn btn-outline-secondary ms-2 mt-4 rounded-5' value='description' onClick={handleInfo}>Description</button>
            <button className='btn btn-outline-secondary ms-2 mt-4 rounded-5' value='specification' onClick={handleInfo}>Specifications</button>
            <button className='btn btn-outline-secondary ms-2 mt-4 rounded-5' value='comments' onClick={handleInfo}>Comments</button>
            <button className='btn btn-outline-secondary ms-2 mt-4 rounded-5' value='reviews' onClick={handleInfo}>Reviews</button>




          </div>



          <div className="col-12 col-md-6"></div>
        </div>



      </div>

      {
        info === 'description' && <Description />
      }
      {
        info === 'specification' && <Specification />
      }
      {
        info === 'comments' && <Comments />
      }
      {
        info === 'reviews' && <Reviews />
      }


    </>
  )
}

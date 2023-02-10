import React, { useEffect, useState } from 'react'
import productsList from '../../../data/fakeProducts'

export default function ProductsYouLinke() {
    const [filteredProducts, setFilteredProducts] = useState(productsList)
    const [isActive, setIsActive] = useState(true)
    const [isLoading, setIsLoading] = useState(false)



    useEffect(() => {

        let tempSave = productsList.filter((p) => {
            return p.category === 'decorate'
        }
        )
        setFilteredProducts(tempSave)
    }, [])





    return (
        <>

            <div className="container-fluid mt-5 ">
                <div className="row">
                    <div className="col-3 "></div>
                    <div className="col-6">
                        <div className="text-center">
                            <h3 className='fw-bold'>PRODUCTS YOU MAY LIKE</h3>
                            <small className='fw-bold disabled py-5'>Lorem ipsum dolor sit amet elit.quos id doloribus alias facilis eveniet maiores repudiandae, rem delectus hic nisi ratione! Magni, sapiente!</small>
                        </div>
                    </div>
                    <div className="col-3 "></div>
                </div>





            </div>
            <div className="container my-5">
                <div className="row mb-5">
                    {isLoading ? <div className='spinner spinner-border ms-auto me-auto text-secondary'></div> :
                        <div className="col">
                            <div className="card-group" onClick={() => { console.log(filteredProducts[0].category) }}>
                                <div className="card border-0 px-1 rounded">
                                    <img style={{ height: 250 }} src={filteredProducts[0].image} className="card-img-top" alt={filteredProducts[0].id} />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{filteredProducts[0].name}</h5>
                                        <p className="card-text text-center fw-bold text-secondary fs-4">{filteredProducts[0].price}</p>
                                    </div>
                                </div>
                                <div className="card  border-0 px-1 rounded">
                                    <img style={{ height: 250 }} src={filteredProducts[1].image} className="card-img-top " alt={filteredProducts[1].id} />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{filteredProducts[1].name}</h5>
                                        <p className="card-text text-center fw-bold text-secondary fs-4">{filteredProducts[1].price}</p>
                                    </div>
                                </div>
                                <div className="card  border-0 px-1 rounded">
                                    <img style={{ height: 250 }} src={filteredProducts[3].image} className="card-img-top img-fluid" alt={filteredProducts[3].id} />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{filteredProducts[3].name}</h5>
                                        <p className="card-text text-center fw-bold text-secondary fs-4">{filteredProducts[3].price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>}
                </div>
            </div>

        </>
    )
}
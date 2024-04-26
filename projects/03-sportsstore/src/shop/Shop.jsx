/* REACT */
import { useEffect, useState } from "react"
/* ROUTER */
import { useParams } from "react-router-dom"
/* REDUX */
import { useDispatch, useSelector } from "react-redux"
import { filterData } from "../data/ActionCreators"
/* COMPONENTS */
import { CategoryNavigation } from "./CategoryNavigation"
import { ProductList } from "./ProductList"
import { CartSummary } from "./CartSummary"

export const Shop = () => {
  let { category } = useParams()
  const filterProducts = useSelector((state) => state.filterProducts)
  const categories = useSelector((state) => state.categories)
  const cartItems = useSelector((state) => state.cartItems)
  const cartPrice = useSelector((state) => state.cartPrice)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(filterData(category))
  }, [category])

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col bg-dark text-white">
            <div
              className="navbar bg-dark border-bottom border-body"
              data-bs-theme="dark"
            >
              SPORTS STORE
              <CartSummary cartItems={cartItems} cartPrice={cartPrice} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3 p-2">
            <CategoryNavigation
              categories={categories}
              baseUrl="/shop/products"
            />
          </div>
          <div className="col-9 p-2">
            <ProductList products={filterProducts} />
          </div>
        </div>
      </div>
    </>
  )
}

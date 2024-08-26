import React from 'react'
import { priceFormatter } from '../utils/helpers'

function ProductCard({product, handleOpen}) {
  return (
    <div className='products-card' onClick={() => handleOpen(product)}>
        <div className="products-card__image">
            <img src={product.image} alt={product.title} />
        </div>
        <div className="products-card__content">
            <h4 className="products-card__title">{product.title}</h4>
            <p className="products-card__subtitle">{product.subtitle}</p>
            {product.discount > 0 ? <div className='products-card__discount'>
                <span className='products-card__old'>{priceFormatter(product.old_price)}</span>
                <span className='products-card__badge'>{product.discount}</span>
            </div> : null}
            <p className="products-card__price">{priceFormatter(product.price)}</p>
        </div>
    </div>
  )
}

export default ProductCard
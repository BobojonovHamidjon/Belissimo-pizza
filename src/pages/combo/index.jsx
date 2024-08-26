import React from 'react'
import {useParams  } from "react-router-dom";
import {categories} from "../../constants/data"

function ComboPage() {
  const {id } = useParams()
  let data = categories?.[0]?.products?.[id-1]
  console.log(data);
  return (
    <div className="container">
    <div className="combo-rov">
      <div className="combo-image">
            <img src={data.image} alt={data.title} />
        <h2 className="combo-title">{data.title}</h2>
    <br />
        <p className="combo-subtitle">2 ta bellisster, 5 ta tovuqli strips va 2 ta razliv ichimlik — do’stlar bilan birga ayni muddao.</p>
      </div>
      </div>
    </div>

  )
}

export default ComboPage
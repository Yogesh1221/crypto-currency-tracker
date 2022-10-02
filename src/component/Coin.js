import React from 'react'
import './Coin.css'
const Coin = (props) => {
  let { name, image, price, symbol, volume, priceChange, marketcap ,lastUpdated} = props
  return (
    <>
      <div className="my-3">
        <div className="card text-center color-back shadow-lg p-3 mb-5 bg-white rounded">
          <img style={{ height: '100px', width: '100px', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px' }} src={image} alt="crypto" />
          <div className="card-body">
            <h1 className="card-title"><strong>{name}</strong></h1>
            <hr />
            <p className="card-text"><strong>abbreviation: </strong>{symbol}</p>
            <p className="card-text"><strong>Price: </strong>₹{price.toLocaleString()}</p>
            <p className="card-text"><strong>Volume: </strong>₹{volume.toLocaleString()}</p>
            {priceChange < 0 ? (
              <p className="red card-text"><strong>Price-Change: </strong>{priceChange.toFixed(2)}% ↓</p>
            ) : (<p className="green card-text"><strong>Price-Change: </strong>{priceChange.toFixed(2)}% ↑</p>)}
            <p className="card-text"><strong>MKt Cap:</strong> ₹{marketcap.toLocaleString()}</p>
            <p className="card-text"><small className="text-muted">Last updated on {new Date(lastUpdated).toGMTString()}</small></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Coin

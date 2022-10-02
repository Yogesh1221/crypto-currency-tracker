import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Coin from './Coin';
import Spinner from './Spinner';

const CoinItem = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
            .then(res => {
                setCoins(res.data);
                setLoading(false)
            }).catch(error => console.log(error))
    }, []);

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const filteredCOins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <>
        <div className='title-crypto'>
            <h1 className="coin-text"><strong>CRYPTO-CURRENCY</strong></h1>
        </div>
        <div className="container my-3">
            <div className="coin-search">
                <form style={{height: '40px'}}>
                    <input type="text" placeholder='Search' className="coin-input shadow-lg p-3 mb-5 bg-white rounded" onChange={handleChange} />
                </form>
            </div>
            {loading && <Spinner/>}
            <div className='row'>
            {filteredCOins.map(coin => {
                return (
                    <div className="col-md-3">
                    <Coin key={coin.id} name={coin.name} image={coin.image} price={coin.current_price} symbol={coin.symbol} marketcap={coin.market_cap} priceChange={coin.price_change_percentage_24h} volume={coin.total_volume} lastUpdated={coin.last_updated}/>
                    </div>
                )
            })}
            </div>
        </div>
        </>
    )
}

export default CoinItem

import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import {Card,Row,Col,Input} from "antd";
import { useGetCryptosQuery } from "../Services/cryptoApi";



const Game = ({simplified}) => {
    const count = simplified ? 10 :100;
    const [search,setSearch] = useState('');
const {data:cryptoList,isFetching} = useGetCryptosQuery(count);
const [cryptos,setCryptos] = useState([]);
// console.log(cryptos);

useEffect(()=>{

const filterData = cryptoList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(search.toLowerCase())); 
setCryptos(filterData);
},[search,cryptoList])




if(isFetching) return "loading....."

    return(
        <>
        {!simplified && (<div className="search-crypto">
            <Input placeholder="Search Cryptocurency" onChange={(event)=>setSearch(event.target.value)} ></Input>
        </div>)}
        <Row gutter={[32,32]} className="crypto-card-container">
            {cryptos?.map((currency)=>(
                <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
<Link to={`/crypto/${currency.id}`}>
    <Card title={`${currency.rank}. ${currency.name}`}
     extra={<img src={currency.iconUrl} className="crypto-image"></img>} hoverable>
         <p>Price: {millify(currency.price)}</p>
         <p>Market Cap: {millify(currency.marketCap)}</p>
         <p>Daily Change: {millify(currency.change)} %</p>
     </Card>
</Link>
                </Col>
            ))}
        </Row>
        
        
        
        
        </>
    )
}

export default Game;
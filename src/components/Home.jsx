import React from "react";
import millify from 'millify';
import { Typography, Row,Col,Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../Services/cryptoApi";
import Game from "./Game";
import News from "./News";
import '../App.css';

const {Title} = Typography;


 const Home = () =>

 {

    const {data, isFetching} = useGetCryptosQuery(10);
    const result1 = data?.data?.stats;
    // console.log(data);
    if(isFetching) return "loading .....";

     return(
         <>
       <Title level={2} className="heading"style={{textTransform:'uppercase',textShadow:'4px 4px 8px rgba(0,0,0,0.2)',color:'var(--secondry)'}}>Global Crypto Stats</Title>
       <Row >
       <Col span={12}><Statistic title="Total Cryptocurency" value={result1.total} style={{color:'var(--text)'}}></Statistic></Col>
           <Col span={12}><Statistic title="Total Exchanges" value={millify(result1.totalExchanges)}></Statistic></Col>
           <Col span={12}><Statistic title="Total Market Cap" value={millify(result1.totalMarketCap)}></Statistic></Col>
           <Col span={12}><Statistic title="Total 24h Volume" value={millify(result1.total24hVolume)}></Statistic></Col>
           <Col span={12}><Statistic title="Total Markets" value={millify(result1.totalMarkets)}></Statistic></Col>
       </Row>

       <div className="home-heading-container"style={{margin:'1rem 0'}}>
           <Title level={3} className="home-title" style={{textTransform:'uppercase',textShadow:'4px 4px 8px rgba(0,0,0,0.2)',color:'var(--secondry)'}}>Top 10 Cryptocurency in the world</Title>
           <Title level={4} className="show-more"><Link to="/cryptocurency">Show More</Link></Title>
       </div>
    <Game simplified></Game>
     <div className="home-heading-container" style={{margin:'1rem 0'}}>
           <Title level={3} className="home-title" style={{textTransform:'uppercase',textShadow:'4px 4px 8px rgba(0,0,0,0.2)',color:'var(--secondry)'}} >Latest Crypto News</Title>
           <Title level={4} className="show-more"><Link to="/news">Show More</Link></Title>
       </div>
     <News simplified></News>
         
         
         </>
     )


 }

 export default Home;
import {configureStore} from "@reduxjs/toolkit";
import { cryptoApi } from "../Services/cryptoApi";
import { cryptoNewsApi } from "../Services/CryptoNewsApi";



export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]:cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]:cryptoNewsApi.reducer,
    },
});


// ye ak tara se parent wraper ka kam karta hain isko hum store nam se index file me wrap karenge as the parent
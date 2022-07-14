import {useEffect, useContext} from "react";
import {API_KEY, API_URL} from "../config";
import {ShopContext} from "../context";
import {Preloder} from "../components/preloder";
import {GoodsList} from "../components/GoodsList";
import {Cart} from "../components/Cart";
import {BasketList} from "../components/BasketList";
import {Alert} from "../components/Alert";

function Main() {
    const {
        setGoods,
        loading,
        order,
        isBasketShow,
        alertName
    } = useContext(ShopContext);

    useEffect(function getGoods() {
        fetch(API_URL, {headers:
                {
                    'Authorization': API_KEY
                },
        })
            .then(response => response.json())
            .then((data) => {
                setGoods(data.shop);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    return <main className="container content">
        <Cart quantity = {order.length} />
        { loading ? <Preloder /> : <GoodsList /> }
        { isBasketShow &&  <BasketList />  }
        { alertName && <Alert /> }
        <div className="overlay"></div>
    </main>
}

export {Main}
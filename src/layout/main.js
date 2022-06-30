import {useState, useEffect} from "react";
import {API_KEY, API_URL} from "../config";
import {Preloder} from "../components/preloder";
import {GoodsList} from "../components/GoodsList";
import {Cart} from "../components/Cart";

function Main() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);

    function addOrder(item) {
        const itemIndex = order.findIndex(
            (orderItem) =>  orderItem.id === item.id
        );

        if(itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if(index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    }
                } else {
                    return index;
                }
            })
        }
    }

    useEffect(function getGoods() {
        fetch(API_URL, {headers:
                {
                    'Authorization': API_KEY
                },
        })
            .then(response => response.json())
            .then((data) => {
                data.shop && setGoods(data.shop);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, [])

    return <main className="container content">
        <Cart quantity = {order.length} />
        {
            loading ? <Preloder /> : <GoodsList goods={goods} addOrder={addOrder} />
        }
    </main>
}

export {Main}
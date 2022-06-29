import {useState, useEffect} from "react";
import {API_KEY, API_URL} from "../config";
import {Preloder} from "../components/preloder";
import {GoodsList} from "../components/GoodsList";

function Main() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function getGoods() {
        fetch(API_URL, {headers:
                {
                    'Authorization': API_KEY
                },
        })
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                data.shop && setGoods(data.shop);
                setLoading(false);
            });
    }, [])

    return <main className="container content">
        {
            loading ? <Preloder /> : <GoodsList goods={goods} />
        }
    </main>
}

export {Main}
function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeOrder = Function.prototype
    } = props
    return <li className="collection-item">
        {name} x {quantity} = {price * quantity}
        <span className="secondary-content" onClick={() => removeOrder(id)}>
            <i className="material-icons">close</i>
        </span>
    </li>
}

export {BasketItem}
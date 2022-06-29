function GoodsItem(props) {
    console.log(props)
    const  {
        id,
        name,
        description,
        images,
    } = props.granted[0];

    const {
        finalPrice: price,
    } = props.price

    return <div className="card" id={id}>
        <div className="card-image">
            <img src={images.full_background} alt={name} />
        </div>
        <div className="card-content">
            <span className="card-title">{name}</span>
            <p>{description}</p>
        </div>
        <div className="card-action">
            <button className='btn'>Buy</button>
            <span className='right' style={{fontSize: '1.5rem'}}>{price}</span>
        </div>
    </div>
}

export {GoodsItem}
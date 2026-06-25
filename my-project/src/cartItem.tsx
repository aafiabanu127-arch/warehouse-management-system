import '.CartItem.css';
type CartItemProps = {
    image: string;
    name: string;
    price: number;
    email: string;

};

const CartItem =({image, name, price, email}: CartItemProps) => (
    <div className="cart-item">
        <img src={image} alt={name} width={150} />
        <div className="cart-item-detail">
        <h2>{name}</h2>
        <p className="cart-item-price">Price: ${price.toFixed(2)}</p>
        <p>Email:{email}</p>
    </div>
    </div>
);

export default CartItem;
import { useStoreContext } from "../context/user";
import "./CartView.css";

function CartView() {
    const { cart, setCart } = useStoreContext();

    return (
        <div className="cart-container">
            <h1>Cart</h1>
            {cart.entrySeq().map(([key, value]) => {
                return (
                    <div key={key} className="cart-item">
                        <img
                            className="cart-image"
                            src={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
                            alt={value.title}
                        />
                        <div className="cart-details">
                            <h2>{value.title}</h2>
                            <p>{value.overview}</p>
                            <button
                                onClick={() => {
                                    setCart((prev) => prev.delete(value.id));
                                }}
                            >
                                Remove from Cart
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default CartView;
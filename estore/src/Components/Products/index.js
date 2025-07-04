// This component displays a list of products fetched from the Redux store
// Each product is displayed with its image, name, price, and a rating
import { useSelector, useDispatch } from "react-redux";
import "./_products.scss";
import { useEffect } from "react";
import { getProducts } from "../../Redux/Product/productAction";
import { addCartItem } from "../../Redux/Cart/cartSlice";

// The productData is fetched from the Redux store using useSelector
const Products = () => {
  const productData = useSelector((state) => state.productReducer.products);

  const cartData = useSelector((state) => state.cartReducer); // Fetching cart items from the Redux store
  console.log(cartData); // Logging cart items to the console for debugging
  const dispatch = useDispatch(); // Dispatch function to trigger actions

  useEffect(() => {
    dispatch(getProducts()); // Dispatch the action to fetch products when the component mounts
  }, [dispatch]); // Empty dependency array means this effect runs once when the component mounts

  const addToCart = (itemData) => {
    dispatch(addCartItem(itemData)); // Dispatching the action to add the item to the cart
    console.log("Item added to cart:", itemData);
    // Here you would typically dispatch an action to add the item to the cart
    // dispatch(addItemToCart(itemData));
  };
  return (
    <div className="products-container">
      {productData.map((product, key) => {
        return (
          <div
            className="mx-5 p-3 product-card"
            key={product._id || key}
            style={{ borderRadius: "16px", overflow: "hidden" }}
          >
            <div
              className="product-image-container"
              style={{ borderRadius: "16px 16px 0 0", overflow: "hidden" }}
            >
              <img
                src={require("../../assets/images/shop/" + product.product_img)}
                alt=""
                style={{ borderRadius: "16px 16px 0 0" }}
              />
            </div>
            <div
              className="product-info"
              style={{ borderRadius: "0 0 16px 16px" }}
            >
              <h5>
                <a href="#">{product.product_name}</a>
              </h5>
              <p className="product-price"> ${product.price}</p>
              <div className="product-rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="product-cart-section">
                <button
                  onClick={() => addToCart(product)}
                  className="add-to-cart-btn"
                  style={{ borderRadius: "8px" }}
                >
                  <i className="fa fa-shopping-cart" /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

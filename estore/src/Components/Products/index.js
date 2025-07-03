// This component displays a list of products fetched from the Redux store
// Each product is displayed with its image, name, price, and a rating
import { useSelector, useDispatch } from "react-redux";
import "./_products.scss";
import { useEffect } from "react";
import { getProducts } from "../../Redux/Product/productAction";

// The productData is fetched from the Redux store using useSelector
const Products = () => {
  const productData = useSelector((state) => state.productReducer.products);

  const dispatch = useDispatch(); // Dispatch function to trigger actions

  useEffect(() => {
    dispatch(getProducts()); // Dispatch the action to fetch products when the component mounts
  }, [dispatch]); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="products-container">
      {productData.map((product, key) => {
        return (
          <div className="mx-5 p-3 product-card">
            <div className="product-image-container">
              <img
                src={require("../../assets/images/shop/" + product.product_img)}
                alt=""
              />
            </div>
            <div className="product-info">
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
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

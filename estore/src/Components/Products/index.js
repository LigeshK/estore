import "./_products.scss";

const Products = () => {
  const productData = [
    { pName: "Jacket", price: 45, img: "shop-1.jpg" },
    { pName: "Purse", price: 50, img: "shop-2.jpg" },
    { pName: "Dress", price: 69, img: "shop-3.jpg" },
    { pName: "Denim", price: 30, img: "shop-4.jpg" },
    { pName: "Boots", price: 49, img: "shop-5.jpg" },
  ];
  return (
    <div className='products-container'>
      {productData.map((product, key) => {
        return (
          <div className="mx-5 p-3 product-card">
            <div className="product-image-container">
              <img
                src={require("../../assets/images/shop/"+product.img)}
                alt=""
              />
            </div>
            <div className="product-info">
              <h5><a href="#">{product.pName}</a></h5>
              <p className="product-price"> ${product.price}</p>
              <div className='product-rating'>
                <i className='fa fa-star'/>
                <i className='fa fa-star'/>
                <i className='fa fa-star'/>
                <i className='fa fa-star'/>
                <i className='fa fa-star'/>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

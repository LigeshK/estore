import { useDispatch, useSelector } from "react-redux";
import "./_side-nav.scss";
import { useEffect, useState } from "react";
import { getCategories } from "../../Redux/Category/actions";
import { filterProducts } from "../../Redux/Product/productSlice";

const SideNav = () => {
  const accordionData = useSelector(
    (state) => state.categoryReducer.categories
  ); // Fetching categories from the Redux store
  // This data is used to populate the side navigation with categories and subcategories
  const fetchedProductData = useSelector((state) => state.productReducer); // Fetching product data from the Redux store
  const [products, setProducts] = useState(); // Local state to hold products
  const dispatch = useDispatch(); // Dispatch function to send actions to the Redux store

  useEffect(() => {
    dispatch(getCategories);
  }, []); // Fetching categories when the component mounts

  useEffect(() => {
    setProducts(fetchedProductData.products);
  }, [fetchedProductData.status]); // Updating local products state when fetched product data changes

  const filterData = (selectedCategory) => {
    console.log("Selected Category:", selectedCategory);
    console.log("Products:", products);
    const payload = { selectedCategory, products };
    dispatch(filterProducts(payload));
  }; // Function to filter products based on the selected category

  return (
    <div className="side-nav">
      <div className="section-title">
        <h3>Category</h3>
      </div>

      <div className="accordion">
        {accordionData.map((accordionCategory, index) => {
          // Check if the category doesnt have a parent_category_id - so main categories
          if (accordionCategory.parent_category_id === null) {
            return (
              <div className="accordion-item individual-category">
                <div className="accordion-header">
                  <button
                    className="accordion-button"
                    data-bs-target={"#collapse" + index}
                    data-bs-toggle="collapse"
                  >
                    <div className="category-title">
                      <a href="#">{accordionCategory.category}</a>
                    </div>
                  </button>
                </div>
                <div
                  className="accordion-collapse collapse show"
                  id={"collapse" + index}
                >
                  <div className="accordion-body">
                    <ul>
                      {accordionData.map((subCategory) => {
                        if (
                          accordionCategory.id ===
                          subCategory.parent_category_id
                        ) {
                          return (
                            <li className="sub-items" key={subCategory.id}>
                              <a
                                href="#"
                                onClick={() => filterData(subCategory)}
                              >
                                {subCategory.category}
                              </a>
                            </li>
                          );
                        }
                        return null;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SideNav;

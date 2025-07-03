import { useDispatch, useSelector } from "react-redux";
import accordionSlice from "../../Redux/Accordion/accordionSlice";
import "./_side-nav.scss";
import { use, useEffect } from "react";
import { getCategories } from "../../Redux/Category/actions";

const SideNav = () => {
  const accordionData = useSelector(
    (state) => state.categoryReducer.categories
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories);
  }, []);

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
                              <a href="#">{subCategory.category}</a>{" "}
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

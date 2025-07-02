import { useSelector } from "react-redux";
import accordionSlice from "../../store/slices/accordionCatSlice";
import "./_side-nav.scss";

const SideNav = () => {
  const accordionData = useSelector(accordionSlice.getInitialState);

  return (
    <div className="side-nav">
      <div className="section-title">
        <h3>Category Detail</h3>
      </div>

      <div className="accordion">
        {accordionData.map((accordionCategory, index) => {
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
                    {accordionCategory.items.map((item, itemKey) => {
                      return (
                        <li className="sub-items" key={itemKey}>
                          <a href="#">{item}</a>{" "}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideNav;

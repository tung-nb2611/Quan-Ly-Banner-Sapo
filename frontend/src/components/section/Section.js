import { Link } from "react-router-dom";
import "../../styles/section/Section.css"

function Section({ data }) {
  return (
    <div className="section-info p-3">
      <div className="row">
        <div className="detail-info col-sm-8 col-md-9 col-lg-8 col-xl-9">
          <label> Section: <span>{data.id}</span></label>
          <label> Web_id: <span>{data.webId}</span></label>
          <label> Div: <span>{data.divId}</span></label>
        </div>
        <div className="button col-sm-4 col-md-3 col-lg-4 col-xl-3">
          <Link to={"/banner/display/" + data.id}>
            <button className="section">
              <h4>Quản lý hiển thị banner</h4>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Section;
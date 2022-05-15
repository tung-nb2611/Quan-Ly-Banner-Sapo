import { Link } from "react-router-dom";
import "../../styles/section/Section.css"

function Section({ data }) {
  return (
    <div className="section-info p-3">
      <div className="row">
        <div className="detail-info col-12 col-sm-8">
          <label> Section: <span>{data.id}</span></label>
          <label> Web_id: <span>{data.webId}</span></label>
          <label> Div: <span>{data.divId}</span></label>
        </div>
        <div className="button col-12 col-sm-4">
          <Link to={"/banner/display/" + data.id}>
            <button className="section">
              Quản lý hiển thị banner
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Section;
import { Link } from "react-router-dom";
import "../../styles/section/Section.css";

function Website({ data }) {
  return (
    <div className="section-info p-3">
      <div className="row">
        <div className="detail-info col-12 col-sm-8">
          <label> Section: <span>{data.id}</span> </label>
          <label> Web name: <span>{data.name}</span> </label>
          <label> Url: <span>{data.url}</span> </label>
        </div>
        <div className="button col-12 col-sm-4">
          <Link to={"/websites/websiteId=" + data.id + "/sections"}>
            <button className="section">
              Các khu vực banner của trang web
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Website;
import { Link } from "react-router-dom";
import "../../styles/section/Section.css"

function Website({ data }) {
  return (
    <div className="section-info p-3">
      <div className="row">
        <div className="detail-info col-md-7 col-lg-6 col-xl-7">
          <label> Section: <span>{data.id}</span></label>
          <label> Web name: <span>{data.name}</span></label>
          <label> Url: <span>{data.url}</span></label>
        </div>
        <div className="button col-md-5 col-lg-6 col-xl-5">
          <Link to={"/banner/display/" + data.id}>
            <button className="section">
              <h4>Quản lý hiển thị banner</h4>
            </button>
          </Link>
          <Link to={"/websites/websiteId=" + data.id + "/sections"}>
            <button>Sections của trang web</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Website;
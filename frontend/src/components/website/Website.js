import { Link } from "react-router-dom";
import "../../styles/section/Section.css";

function Website({ data }) {
  return (
    <div className="section-info p-3">
      <div className="row">
        <div className="detail-info col-12 col-sm-8">


          <label> Tên Website: {data.name} </label>
          <label> Đường dẫn: {data.url} </label>

        </div>
        <div className="button col-12 col-sm-4">
          <Link className="btn btn-block btn-success" to={"/websites/websiteId=" + data.id + "/sections"}>
              Các khu vực banner của trang web
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Website;
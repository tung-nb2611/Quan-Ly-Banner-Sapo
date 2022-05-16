import { Link } from "react-router-dom";
import "../../styles/section/Section.css"

function Section({ data }) {

  const webId = data.webId;

  return (
    <div className="section-info p-3">
      <div className="row">
        <div className="detail-info col-12 col-sm-8">
          <label> Section: <span>{data.id}</span></label>
          <label> Web_id: <span>{data.webId}</span></label>
          <label> Div: <span>{data.divId}</span></label>
        </div>
        <div className="button col-12 col-sm-4">
          <Link to={{pathname: "/banner/display/" + data.id, state: {webId}}}>
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
import { Link } from "react-router-dom";
import "../../styles/section/Section.css"

function Section({ data }) {
  return (
    <div className="section-info p-3">
      <div className="row">
<<<<<<< HEAD
        <div className="detail-info col-sm-8 col-md-9 col-lg-8 col-xl-9">
=======
        <div className="detail-info col-12 col-sm-8">
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21
          <label> Section: <span>{data.id}</span></label>
          <label> Web_id: <span>{data.webId}</span></label>
          <label> Div: <span>{data.divId}</span></label>
        </div>
<<<<<<< HEAD
        <div className="button col-sm-4 col-md-3 col-lg-4 col-xl-3">
          <Link to={"/banner/display/" + data.id}>
            <button className="section">
              <h4>Quản lý hiển thị banner</h4>
=======
        <div className="button col-12 col-sm-4">
          <Link to={"/banner/display/" + data.id}>
            <button className="section">
              Quản lý hiển thị banner
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Section;
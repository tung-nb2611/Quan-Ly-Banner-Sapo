<<<<<<< HEAD
import { useBootstrapBreakpoints } from "react-bootstrap/esm/ThemeProvider";
import { Link } from "react-router-dom";
import "../../styles/section/Section.css";
import { Row, Col } from "react-bootstrap";

function Website({ data }) {
  return (

    <div>
      <div className="banner-info m-4 p-3">
        <Row>
          <Col className="detail-info">
            <label>Section:{data.id}</label>
          </Col>
          <Col className="detail-info">
            <label>Web name: {data.name}</label>
          </Col>
          <Col className="detail-info">
            <label>Url: {data.url}</label>
          </Col>
          <Col>
            <Link to={"/websites/websiteId=" + data.id + "/sections"}>
              <button>Các khu vực banner của trang web</button>
            </Link>
          </Col>
        </Row>

=======
import { Link } from "react-router-dom";
import "../../styles/section/Section.css";

function Website({ data }) {
  return (
    <div className="section-info p-3">
      <div className="row">
        <div className="detail-info col-12 col-sm-8">
          <label> Section:{data.id} </label>
          <label> Web name: {data.name} </label>
          <label> Url: {data.url} </label>
        </div>
        <div className="button col-12 col-sm-4">
          <Link to={"/websites/websiteId=" + data.id + "/sections"}>
            <button className="section">
              Các khu vực banner của trang web
            </button>
          </Link>
        </div>
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21
      </div>
    </div>
  );
}

export default Website;
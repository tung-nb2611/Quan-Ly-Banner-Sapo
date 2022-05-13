import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

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
            <Link to={"/banner/display/" + data.id}>
              <button className="section">
                <h4>Quản lý hiển thị banner</h4>
              </button>
            </Link>
            <Link to={"/websites/websiteId="+data.id+"/sections"}>
              <button>Sections của trang web</button>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Website;
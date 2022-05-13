import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Section({ data }) {
  return (
    <div>
      <div className="banner-info m-4 p-3">
        <Row>
          <Col className="detail-info">
            <label>Section:{data.id}</label>
          </Col>
          <Col className="detail-info">
            <label>Web_id: {data.webId}</label>
          </Col>
          <Col className="detail-info">
            <label>Div: {data.divId}</label>
          </Col>
          <Col>
            <Link to={"/banner/display/" + data.id}>
              <button className="section">
                <h4>Quản lý hiển thị banner</h4>
              </button>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Section;
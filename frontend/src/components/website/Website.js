import { Link } from "react-router-dom";
import "../../styles/section/Section.css"

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

      </div>
    </div>
  );
}

export default Website;
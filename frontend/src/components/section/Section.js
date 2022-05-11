import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Rnd } from "react-rnd";

function Section({ data }) {
  let { position_web } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [section, setSection] = useState([]);
  let id = data.id;
  console.log(data);
  useEffect(() => {
    fetch(`http://localhost:8080/api/${position_web}/sections/${id}`)
      .then((res) => res.json())
      .then(
        (section) => {
          setIsLoaded(true);
          setSection(section);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [id]);

  return (
    <div>
      <div className="banner-info m-4 p-3">
        <Row>
          <Col className="detail-info">
            <label>Section:{data.id}</label>
          </Col>
          <Col className="detail-info">
            <label>Web name: {data.position_web}</label>
          </Col>
          <Col className="detail-info">
            {/* // Thêm link vào */}
            <label>Url: {data.url}</label>
          </Col>
          <Col>
            <Link to={"/banner/display/" + section.id}>
              <button className="section">
                <h4>Quản lý hiển thị banner</h4>
              </button>
            </Link>
            <button>Sectors của trang web</button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Section;

import "../../styles/banner/BannerInfo.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

const BASE_URL = "http://localhost:8080/api/users/";

const UserInfo = ({ userInfo, userList, setUserList }) => {


  const [detailInfo, setDetailInfo] = useState(userInfo);

  const updatePage = {
    pathname: "/banner1/update/" + userInfo.code,
    detailInfo: detailInfo
  }

  const deleteConfirmation = () => {
    const confirm = window.confirm("Do you want to remove this user?");
    if (confirm === true) {
      axios
        .delete(BASE_URL + userInfo.id)
        .then(() => console.log("Delete successful"));
      setUserList(userList.filter(info => info.id !== userInfo.id));
    }
  };

  const [show, setShow] = useState(true);

  const handleShowInfo = (userInfo) => {

    alert("thong tin:", userInfo.code)
  }


  const updateUer = () => {
    console.log("Update");
  };

  return (
    <div className="banner-info">
      <Container>
        <Row>
          <Col xs={4} lg={4}>
            <Row>
              <Col xs={6} md={4} lg={4} xl={4} className="detail-info">
                <p>Name</p>
                <p>{userInfo.name}</p>
              </Col>
              <Col xs={6} md={4} lg={4} xl={4} className="detail-show">
                <button onClick={(userInfo) => handleShowInfo(userInfo)}>Hide Show</button>
              </Col>
            </Row>
            <Row>

            </Row>
          </Col>
          <Col lg={7}>
            <Row>
              <Col xs={6} md={10} lg={10} xl={9} className="image-container">
                <Image src="https://mdbootstrap.com/img/new/slides/041.webp" />
              </Col>
              <Col xs={3} md={3} lg={3} xl={2} className="button-choice">
                <button type="button" className="btn btn-secondary"><Link to={updatePage}>Update</Link></button>
                <button type="button" className="btn btn-danger" onClick={deleteConfirmation}>Delete</button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container >
    </div >
    // <div>
    //   <Container>
    //     <table className="table table-striped">
    //       {/* <thead>
    //         <tr>
    //           <th scope="col">Id</th>
    //           <th scope="col">Tên banner</th>
    //           <th scope="col"> HÌnh ảnh Banner</th>
    //           <th scope="col"></th>
    //         </tr>
    //       </thead> */}
    //       <tbody>
    //         <tr>
    //           <th scope="row">1</th>
    //           <td className="name">{bannerInfo.name}</td>
    //           <td className="img"><Image src="https://mdbootstrap.com/img/new/slides/041.webp" /></td>
    //           <td>
    //             <button><Link to={updatePage}>Update</Link></button>
    //             <button onClick={deleteConfirmation}>Delete</button>

    //           </td>
    //         </tr>

    //       </tbody>
    //     </table>
    //   </Container>
    // </div>
  );
};

export default UserInfo;

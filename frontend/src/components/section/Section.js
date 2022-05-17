import { Link } from "react-router-dom";
import SectionService from "../../services/section/SectionService";
import "../../styles/section/Section.css"

function Section({ data, sectionList, setSectionList }) {
  const webId = data.webId
  let user = JSON.parse(window.localStorage.getItem('user'));
  const deleteConfirmation = () => {
    const confirm = window.confirm(" Bạn có muốn xáo banner banner?");
    if (confirm === true) {
      SectionService.deleteSection(data.id)
        .then(() => console.log("Delete successful"));
      setSectionList(sectionList.filter(info => info.id !== data.id));
    }
  };



  return (
    <div className="section-info p-3">
      <div className="row">
        <div className="detail-info col-12 col-sm-8">
          <label> Section: <span>{data.id}</span></label>
          <label> Web_id: <span>{data.webId}</span></label>
          <label> Div: <span>{data.divId}</span></label>
        </div>
        <div className="btnSection">
          <div className="button col-12 col-sm-4">
            <Link to={{ pathname: "/banner/display/" + data.id, state: { webId } }}>
              <button className="section">
                Quản lý hiển thị banner
              </button>
            </Link>
          </div>
          <div className="button col-12 col-sm-4">
            <Link to={"/websites/websiteId=" + data.webId + "/sectionId=" + data.id + "/update"}>
              <button className="section">
                Sửa khu vực
              </button>
            </Link>
          </div>
          <div className="button col-12 col-sm-4">

            <button className="section" onClick={deleteConfirmation}>
              Xóa khu vực
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}


export default Section;
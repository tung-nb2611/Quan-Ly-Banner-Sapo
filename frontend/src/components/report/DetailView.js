const DetailView = ({ viewInfoList }) => {

    return (
        <tr>
            <td>{viewInfoList.sectionID}</td>

            <td>{viewInfoList.browserName}</td>

            <td>{viewInfoList.timeView}</td>
            <td>{viewInfoList.userView}</td>


        </tr>
    )
};

export default DetailView;
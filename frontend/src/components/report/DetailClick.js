const DetailClick = ({ clickInfoList }) => {

    return (
        <tr>
            <td>{clickInfoList.sectionId}</td>

            <td>{clickInfoList.browserName}</td>

            <td>{clickInfoList.timeClick}</td>
            <td>{clickInfoList.userClick}</td>


        </tr>
    )
};

export default DetailClick;
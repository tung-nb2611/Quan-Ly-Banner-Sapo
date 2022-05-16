const DetailClick = ({ clickInfo }) => {

    return (
        <tr>
            <td>{clickInfo.sectionID}</td>

            <td>{clickInfo.browserName}</td>

            <td>{clickInfo.timeView}</td>
            <td>{clickInfo.userView}</td>


        </tr>
    )
};

export default DetailClick;
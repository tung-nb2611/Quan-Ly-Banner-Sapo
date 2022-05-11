const DetailClick = ({ clickInfo }) => {

    return (
        <tr>
            <td>{clickInfo.timeClick}</td>
            <td>{clickInfo.userClick}</td>
            <td>{clickInfo.sectionID}</td>
        </tr>
    )
};

export default DetailClick;
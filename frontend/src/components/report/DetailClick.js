const DetailClick = ({ clickInfo }) => {

    return (
        <tr>
            <td>{clickInfo.userClick}</td>

            <td>{clickInfo.sectionID}</td>

            <td>{clickInfo.timeClick}</td>


        </tr>
    )
};

export default DetailClick;
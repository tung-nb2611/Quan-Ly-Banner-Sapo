const DetailClick = ({clickInfo}) => {
    
    return(
        <tr>
            <td>{clickInfo.timeClick}</td>
            <td>{clickInfo.userClick}</td>
        </tr>
    )
};

export default DetailClick;
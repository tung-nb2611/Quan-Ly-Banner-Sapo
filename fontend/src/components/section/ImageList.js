import { useEffect, useState } from "react";
import SectionService from "../../services/section/SectionImage";
import Image from "./Image";

const ImageList = ({ sectionId }) => {
    const [imageUrl, setImageUrl] = useState([]);

    useEffect(() => {
        SectionService.getImageList(sectionId).then((response) => {
            console.log(response.data);
            setImageUrl(response.data);
        });
    }, []);

    const ImageDisplay = imageUrl.map((url) => {
        return <Image url={url} />;
    });

    return <div>{ImageDisplay}</div>;
};

export default ImageList;
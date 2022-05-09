import { useParams } from 'react-router-dom';
import React from "react-dom";
import { useEffect, useState } from 'react';
import Section from "./Section";
import "../../styles/section/SectionList.css"

function SectionList(props) {
    let { position_web } = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [sections, setSections] = useState([]);
    // position_web = props.position_web;

    useEffect(() => {
        fetch(`http://localhost:8080/api/${position_web}/sections`)
            .then(res => res.json())
            .then(
                (sections) => {
                    setIsLoaded(true);
                    setSections(sections);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [position_web])
    const displaySections = sections.map(
        (data) => {

            return (
                <div key={data.id}>
                    <Section id={data.id} />
                </div>
            )
        }
    )
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="container">
                {displaySections}
            </div>
        )
    }
}

export default SectionList;
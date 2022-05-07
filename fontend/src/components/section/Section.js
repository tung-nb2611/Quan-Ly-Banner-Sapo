import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Rnd } from "react-rnd";

function Section(props) {
    let { position_web } = useParams();
    // let { id } = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [section, setSection] = useState([]);
    let id = props.id;

    useEffect(() => {
        fetch(`http://localhost:8080/api/${position_web}/sections/${id}`)
            .then(res => res.json())
            .then(
                (section) => {
                    setIsLoaded(true);
                    setSection(section);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [id])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <Link to={'/banner/display/' + section.id}>
                    <button className="section" >
                        <h1>Section: {section.id}</h1>
                    </button>
                </Link>

            </div>
        )

    }
}

export default Section;
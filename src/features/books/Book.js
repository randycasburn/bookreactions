import { useState } from 'react';
import PropTypes from 'prop-types';
import { Placeholder, Image } from 'react-bootstrap';
import {  Link } from "react-router-dom";

function Book({ title = "unknown", author = "unknown", cover = 'NoImage.png', bookId }) {
    let [imgLoaded, setImgLoaded] = useState(false);
    function delay() {
        setTimeout(()=>setImgLoaded(true), 1000);
    }

    return (
        <tr>
            <td>
            <Link  to={`/reviews/${bookId}/${title}`}>{title}</Link>
            </td>
            <td>{author}</td>
            <td>
                { !imgLoaded &&
                <Placeholder animation="glow">
                    <Placeholder xs={12} bg="dark" style={{height: "150px", width: "250px"}}/>
                </Placeholder>
                }
                <img src={cover} onLoad={delay} alt={title} style={{display: !imgLoaded ? "none" : "block"}}/>
            </td>
        </tr>
    );
}

Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    cover: PropTypes.string,
    bookId: PropTypes.number.isRequired
};

export default Book;
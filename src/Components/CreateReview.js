import Card from './UserInterface/Card'
import ReactStars from "react-rating-stars-component";
import React, { useState } from 'react'

export default function CreateReview({ handleReviewCreate }) {
    const [rating, setRating] = useState(0);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [disable, setDisable] = useState(false);
    const [validateName, setValidateName] = useState(false);
    const [validateComment, setValidateComment] = useState(false);

    function ratingChanged(value) {
        setRating(value);
    }

    function handlename(name) {
        if (name.length < 8) {
            setValidateName(true);
            setDisable(true);
        }
        else {
            setValidateName(false);
            setDisable(false);
        }
        setName(name);
    }

    function handleComment(comment) {
        if (name.length < 8) {
            setValidateComment(true);
            setDisable(true);
        }
        else {
            setValidateComment(false);
            setDisable(false);
        }
        setComment(comment);
    }

    function makeid(length) {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    // Add Review
    function processForm() {
        setName('');
        setComment('');
        setRating(0);
        handleReviewCreate({
            id: makeid(20),
            rating,
            name,
            comment
        })
    }

    // Styling
    const nameStyle = {
        color: 'red',
        padding: '30px 0px'
    }
    const commentStyle = {
        color: 'red',
        padding: '30px 0px'
    }
    return (
        <>
            <Card>
                <label>
                    Rating
                </label>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                    value={rating}
                />
                <input
                    type="text"
                    placeholder="Name Here"
                    className="nameInput"
                    value={name}
                    onChange={e => handlename(e.target.value)}
                />

                <textarea
                    className='comment'
                    value={comment}
                    onChange={e => handleComment(e.target.value)}
                ></textarea>

                <button
                    className='sbt-btn'
                    disabled={`${disable === true ? 'disabled' : ''}`}
                    onClick={() => processForm()}
                >
                    Save
                </button>

                {validateName && <span style={nameStyle}>
                    <hr />
                    * Name Must be at least 8 characters or more
                </span>}

                {validateComment && <span style={commentStyle}>
                    <hr />
                    * Comment Must be at least 8 characters or more
                </span>}
            </Card>
        </>
    )
}
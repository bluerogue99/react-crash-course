import { useState } from 'react';
import Post from './Post';
import classes from './PostsList.module.css';
import NewPost from './NewPost';
import Modal from './Modal';

function PostsList({ isPosting, onStopPosting}) {
    const [modalIsVisible, setModalIsVisible] = useState(true);
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }
    
    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    

    return (
    <>
        {isPosting && (
            <Modal onClose={onStopPosting}>
            <NewPost 
            onCancel={onStopPosting}
            />
        </Modal>
        )}
        <ul className={classes.posts}>
            <Post author="Manuel" body="Such a beautiful day!"/>
        </ul>
    </>
    );
}

export default PostsList;
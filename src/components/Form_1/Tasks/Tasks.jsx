import React from 'react';
import s from './Tasks.module.css';
import Notification from './Notification/Notification';


const Tasks = (props) => {
    let postsElements =
        props.posts.map( n => <Notification id={n.id}/>);
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return <div className = {s.content}>
        <div className = {s.posts}>My posts</div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            <button onClick={onAddPost}>Add</button>
			<button>Delete</button>
            {postsElements}
        </div>
}
export default Tasks;
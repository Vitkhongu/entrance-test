import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../redux/actions/actions";
import { useNavigate } from 'react-router-dom';
import style from "./post.module.scss";

const PostForm = () => {
    const [post, setPost] = useState({
        userId: 1,  // Giá trị mặc định, có thể cập nhật tùy theo logic ứng dụng
        title: "",
        body: ""
    });

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (post.title.trim() && post.body.trim()) {
            dispatch(createPost(post));
            window.alert('Post added successfully!'
                +`\n Title: ${post.title}`
                +`\n Content: ${post.body}`);
            navigate('/task3/postlist')
            setPost({ userId: 1, title: "", body: "" }); // Reset form sau khi gửi
        }
    };

    return (
        <div>
            <h2>Add New Post</h2>
            <form onSubmit={handleSubmit} className={style.PostForm}>
                <input
                    type="text"
                    name="title"
                    value={post.title}
                    onChange={handleChange}
                    placeholder="Enter post title..."
                />
                <textarea
                    name="body"
                    value={post.body}
                    onChange={handleChange}
                    placeholder="Enter post content..."
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default PostForm;
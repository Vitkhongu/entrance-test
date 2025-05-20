import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsRequest, deletePost } from "../redux/actions/actions";
import style from "./post.module.scss";

const PostList = () => {
    const dispatch = useDispatch();
    const { loading, posts, error } = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(fetchPostsRequest());
    }, [dispatch]);

    console.log("posts", posts);
    

    const handleDelete = (id) => {
        dispatch(deletePost(id));
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Post List</h2>
            <div className={style.postList}>
                {posts.map(post => (
                    <div key={post.id} className={style.postItem}>
                        <b>Post {post.id}</b>
                        <span><b>Title:</b> {post.title}</span>
                        <br />
                        <span><b>Body:</b> {post.body}</span>
                        <button onClick={() => handleDelete(post.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostList;
import styles from '../styles/Home.module.scss'
import { useState, useEffect } from "react"
import PostItem from "../components/PostItem";

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json();
            setPosts(data);
        }
        getPosts();
    }, [])
    return (
        <div className={styles.container}>
        <h1 className={styles.h1}>All Posts</h1>
        <ul className={styles.ul}>
            {posts && posts.map((post, i) => {
                return (
                    <PostItem key={i} {...post}/>
                )
            })}
        </ul>
        </div>
    )
}
export default Home
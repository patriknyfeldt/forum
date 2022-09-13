import styles from '../styles/Post.module.scss'
import { useEffect, useState } from "react"
import { useParams, useNavigate, useLocation } from "react-router-dom"
import Comments from "../components/Comments";
import Button from '@mui/material/Button';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
const Post = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const onNavigate = (page) => {
    navigate(page)
  }
    const {id} = useParams();

    const [post, setPost] = useState(null)

    useEffect(() => {
        if(location.state){
            setPost(location.state)
            console.log('found state')
        }
        else{
        const getPost = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const data = await res.json()
            setPost(data)
            console.log('fetching')
        }
        getPost()
    }
    }, [location.state, id])
    
    return (
        <>
            {post && (
                <>
                    <Button className={styles.button} onClick={() => {onNavigate('/')}}>
                        <HomeOutlinedIcon fontSize="large" className={styles.homeIcon}/>
                    </Button>
                    <div className={styles.container}>
                        <div className={styles.postBox}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <div className={styles.commentsBox}>
                            <Comments id={id}/>
                        </div>
                    </div>
                </>
            )
            }
        </>
    )
}
export default Post
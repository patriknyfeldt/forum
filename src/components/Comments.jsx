import styles from '../styles/Comments.module.scss'
import { useState, useEffect } from "react"

const Comments = ({id}) => {

    const [comments, setComments] = useState()
    useEffect(() => {
        const getComments = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            const data = await res.json()
            setComments(data)
        }
        getComments()
    }, [id])
    return (
        <>
        <h3>Comments:</h3>
            {comments && comments.map((comment, i) => {
                return (
                    <li className={styles.li} key={i}>
                        <p>{comment.body}</p>
                        <p><strong>By:</strong> {comment.name}</p>
                        <p><strong>Mail:</strong> {comment.email}</p>
                    </li>
                    
                )
            })}
        </>
    )
}
export default Comments
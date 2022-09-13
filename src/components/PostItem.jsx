import styles from '../styles/PostItem.module.scss'
import { Link } from "react-router-dom"

const PostItem = (props) => {
    const {title, id} = props;
    return (
        <li className={styles.li}>
            <Link className={styles.link} to={`/post/${id}`} state={props}>
                <h3>{title}</h3>
            </Link>
        </li>
    )
}
export default PostItem
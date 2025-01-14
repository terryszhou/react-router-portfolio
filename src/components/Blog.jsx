import { Link } from 'react-router-dom'

export const Blog = (props) => {
    let postData = props.postArray.map((e, id) => {
        return (
            <div className="blog-entry-box">
                <Link
                    to={`/blog/${e.id}`}
                    className="linkStyle">
                    <h3>{e.title}</h3>
                </Link>
            </div>
        )
    })
    return (
        <div>
            <h1>Blog</h1>
            <div className="blog-box">
                {postData}
            </div>
        </div>
    )
}
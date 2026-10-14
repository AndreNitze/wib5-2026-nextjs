import {BlogTitleType} from "@/app/blog/blog-title-type";

export default function BlogTitle(props: { post: BlogTitleType }) {
    return <span><strong><a href="#">{props.post.title}</a></strong> ({props.post.date})<br/>
                by {props.post.author}<br/>
        in category {props.post.category}<br/>
        with {props.post.likes} likes<br/>
              </span>
}
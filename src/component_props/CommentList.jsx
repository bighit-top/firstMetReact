import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "크롱",
        comment: "안녕, 크롱크롱!"
    },
    {
        name: "몽실",
        comment: "멍멍"
    },
    {
        name: "둘리",
        comment: "요리보고 저리봐도"
    },
]

function CommentList(props){
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;
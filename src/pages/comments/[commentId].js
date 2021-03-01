import React from "react";
import processHTML from "next/dist/next-server/lib/post-process";

const CommentDetails = ({comment}) =>{
    if (!comment){
        return "No se puedo mostrar el comentario";
    }
    return (
        <div>
            {comment.text}
        </div>
    );
}
export default CommentDetails;

export async function getStaticProps(context) {

    console.log('context',context)
    const{commentId} = context.params
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/comments/${commentId}`)
    const data = await res.json()

    console.log("data",data)
    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            comment:data
        }, // will be passed to the page component as props
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { commentId: '1' } },
            { params: { commentId: '2' } }
        ],
        fallback: true// See the "fallback" section below
    };
}
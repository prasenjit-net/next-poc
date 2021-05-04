import React from 'react'
import { useRouter } from 'next/router'

function BlogPost(params) {
    return (
        <div>
            <p>Welcome to {params.slug} post.</p>
        </div>
    )
}

export default BlogPost

export async function getStaticProps({ params }) {
    return {
        props: params,
        revalidate: 60,
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'hello' } },
            { params: { slug: 'world' } }
        ],
        fallback: 'blocking'
    };
}

import React from 'react'

function Ssr({ time }) {
    return (
        <div>
            <p>{time}</p>
        </div>
    )
}

export default Ssr

export async function getServerSideProps(context) {
    return {
        props: {
            time: new Date().toISOString()
        },
    }
}

import React from 'react'
import Link from 'next/link'
import style from '../../styles/Navbar.module.css'

function Navbar() {
    return (
        <div className={style.navbar}>
            <Link href="/">Home</Link>
            <Link href="/auth">Auth Link</Link>
            <Link href="/blog/world">Blog World</Link>
        </div>
    )
}

export default Navbar

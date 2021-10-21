import React from 'react'
import Link from 'next/link'

const Navigation = () => {
    return (

      <div><div className="nav">
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>Test</a></Link>
            </div>


        <style jsx>{`
            .nav {
                background:#285E68;
                display: flex;
                gap:25px;
                width: auto;
                margin-top: 5px;
                margin-left: 0px;
                font-size:25px;
                }

            .nav a{
                text-decoration:none;
                color:#abc1c7;
            }


        `} </style>

        </div>
    )
}

export default Navigation

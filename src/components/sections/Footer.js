import { useRouter } from 'next/router'
import React from 'react'
import '../../../styles/Footer.module.scss'
import MyText from '../../../util/strings/MyText'

export default function Footer(){
    const router = useRouter()

    return <footer className="basic-footer">
        <div className="content">
            <div className="items"></div>
            <div className="logo">
                <img  src={router.locale === 'en-US' ? `/logo/colorful.png` : `/logo/colorida.png`} />
            </div>
        </div>

        <div className="copyright">
        © {(new Date()).getFullYear()} <MyText>COPYRIGHT</MyText>
        </div>
    </footer>
}
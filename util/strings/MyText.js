import React from 'react'
import {useRouter} from 'next/router'
import ReactHtmlParser from 'react-html-parser'

export default function MyText({html = false, children}){
    const router = useRouter()
    const strings = {
        "pt-BR": require("./pt-BR.json"),
        "en-US": require("./en-US.json"),
    }[router.locale]
    return html
        ? ReactHtmlParser((strings && strings[children]) ? strings[children] : " ")
        : (strings && strings[children]) ? strings[children] : " "
}
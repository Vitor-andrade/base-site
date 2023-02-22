import React from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'

export default function MetaHead({params}){
    const router = useRouter()
    let {title, description, image, keywords = []} = require("./DefaultHead.json")[router.locale];
    title = (params && params.title) ? params.title : title
    description = (params && params.description) ? params.description : description
    image = (params && params.image) ? params.image : image
    keywords = (params && params.keywords) ? params.keywords : keywords


    return <Head>
        <title>{title}</title>

        <meta property="title" content={title}/>
        <meta property="description" content={description}/>
        <meta property="keywords" content={keywords.join(",")}/>

        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description}/>
        <meta property="og:image" content={image}/>
        <meta property="og:type" content="website"/>

        <meta name="twitter:title" content={title}/>
        <meta name="twitter:description" content={description}/>
        <meta name="twitter:image" content={image}/>
    </Head>
}
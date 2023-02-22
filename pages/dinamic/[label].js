import React from 'react'
import MetaHead from '../../src/components/custom/MetaHead';
import apiRequest from '../../util/apiRequest';

export default function DinamicScreen({dinamic = {}, head, error}) {
    return (
        <div>
            <MetaHead params={head} />
        </div>
    )
}

DinamicScreen.getInitialProps = async ({req, query}) => {
    const { label } = query

    try{
        const dinamic = await apiRequest('GET', `/public/search/dinamic/by-label/${label}`)
       
        const title = dinamic.title
        const description = `Saiba mais sobre ${dinamic.title} - Incluir & Preservar`
        const image = dinamic.url_image

        return {
            dinamic,
            label,
            head: { title, image, description }
        }
    }catch(err){
        return { 
            error: err.message,
            label,
            dinamic: {title: label},
            head: {
                title: label,
                image: null,
                description: null,
            }
        }
    }
}

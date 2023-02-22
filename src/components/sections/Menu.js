import React from 'react'
import Link from 'next/link'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import '../../../styles/Menu.module.scss'
import {useRouter} from 'next/router'
import { AppBar } from '@material-ui/core'

function usePrevious(value) {
    const ref = React.useRef();
    React.useEffect(() => {
      ref.current = value;
    });
    return ref.current;
}

export default function Menu({arrowBack = false}){
    const router = useRouter()
    const [transparent, setTransparent] = React.useState(false);
    const [scrollPosition, setScrollPosition] = React.useState(0);
    const previousScroll = usePrevious(scrollPosition)

    const handleScroll = e => {
        setScrollPosition(document.documentElement.scrollTop)
    }

    React.useEffect(() => {
        setTransparent(scrollPosition > 100 && previousScroll < scrollPosition)
    }, [scrollPosition])

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return <AppBar className={`basic-header ${transparent ? 'transparent' : ''}`}>
        
            <nav className="header-menu">
                
                <div className="logo-collapse">
                    {/* <img className="collapse" src="/icons/collapse.png"/> */}
                    <Link href={`/${router.locale}`}>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer'}}>
                            {arrowBack && <ArrowBackIcon style={{margin: '0 10px', color: "#3f9060", fontSize: 32}} />}
                            <img 
                                className="logo" 
                                src={router.locale === 'en-US' 
                                    ? `/logo/colorful.png` 
                                    : `/logo/colorida.png`
                                } 
                            />
                        </div>
                    </Link>
                </div>
               
                
                    <ul className="menu-nav">       
                        <li>
                            {/* <a href="#" >O que é esse portal?</a> */}
                        </li>
                        <li>
                            {/* <a href="#" >Contato</a> */}
                        </li>                    
                    </ul>
                
            
            </nav>
        
    </AppBar>
}
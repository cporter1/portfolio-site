import {forwardRef} from "react"

export default function ScrollToLink({children, id}) {
    const executeScroll = 
        () => document.getElementById(id).scrollIntoView({block: 'end'})

    return (
        <button 
            onClick={executeScroll} 
            className='scrollto-link'>
            {children}
        </button>
    )
};
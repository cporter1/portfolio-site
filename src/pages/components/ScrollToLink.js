export default function ScrollToLink({children, id, className}) {
    const executeScroll = 
        () => {document?.getElementById(id).scrollIntoView({block: 'end'})}

    return (
        <button 
            onClick={executeScroll} 
            className={className}>
            {children}
        </button>
    )
};
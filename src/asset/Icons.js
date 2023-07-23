const Icons = ({ name, size, color }) => {
    switch(name){
        case 'edit':
            return <Pencil size={size} color={color}/>
        case 'delete':
            return <Bin size={size} color={color}/>
        default:
            return null
    }
}

export default Icons


const Pencil = () => {
    return(
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" >
            <g>
                <path d="M2.8576 15.2794L13.8301 4.31149L11.9558 2.42927L0.975382 13.3972L0.0247971 15.691C-0.0904366 15.9834 0.21796 16.2955 0.496278 16.1837ZM14.765 3.39255L15.8216 2.35369C16.3461 1.82927 16.3754 1.24822 15.8945 0.765604L15.5132 0.382598C15.0404-0.0920096 14.4558-0.0494316 13.9297 0.465216L12.8748 1.51033Z" fill="#fff"/>
            </g>
        </svg>
    )
}


const Bin = () => {
    return(
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="19" height="22">
            <g>
                <path d="M6.63281 19.0078C6.21328 19.0078 5.93925 18.7516 5.91797 18.3383L5.62324 7.71991C5.60996 7.31288 5.88222 7.04862 6.31503 7.04862C6.72206 7.04862 7.00585 7.30487 7.01737 7.71014L7.32987 18.3348C7.3414 18.7418 7.06112 19.0078 6.63281 19.0078ZM9.62714 19.0078C9.2041 19.0078 8.91582 18.7453 8.91582 18.34L8.91582 7.71639C8.91582 7.31112 9.2041 7.04862 9.62714 7.04862C10.0484 7.04862 10.3447 7.31112 10.3447 7.71639L10.3447 18.34C10.3447 18.7453 10.0484 19.0078 9.62714 19.0078ZM12.6277 19.0078C12.1994 19.0078 11.9191 18.7418 11.9307 18.3348L12.2352 7.71815C12.2484 7.30487 12.5305 7.04862 12.9375 7.04862C13.3703 7.04862 13.6426 7.31288 13.6293 7.71991L13.3346 18.3383C13.3133 18.7516 13.0392 19.0078 12.6277 19.0078ZM5.19062 4.49277L6.99296 4.49277L6.99296 2.46445C6.99296 1.95878 7.34667 1.63437 7.89042 1.63437L11.3461 1.63437C11.8898 1.63437 12.2436 1.95878 12.2436 2.46445L12.2436 4.49277L14.0459 4.49277L14.0459 2.37382C14.0459 0.880468 13.0928 0 11.4746 0L7.76191 0C6.14375 0 5.19062 0.880468 5.19062 2.37382ZM0.864252 5.55526L18.3963 5.55526C18.8775 5.55526 19.2525 5.17304 19.2525 4.69179C19.2525 4.21406 18.8775 3.83984 18.3963 3.83984L0.864252 3.83984C0.391014 3.83984 0 4.21406 0 4.69179C0 5.18104 0.391014 5.55526 0.864252 5.55526ZM5.14218 22.0363L14.1184 22.0363C15.6133 22.0363 16.5842 21.1211 16.6543 19.6244L17.3256 5.35194L1.92695 5.35194L2.60625 19.6324C2.67812 21.1291 3.63125 22.0363 5.14218 22.0363Z" fill="#fff"/>
            </g>
        </svg>
    )
}
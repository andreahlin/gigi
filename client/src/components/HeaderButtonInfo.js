import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export function HeaderButtonInfo(props) {
    const ref = useRef(null);
    const { hideOnClick } = props;

    useEffect(() => {
        const handleAnyClick = () => {
            if (ref.current) {
                hideOnClick && hideOnClick();
            }
        };

        document.addEventListener('click', handleAnyClick, true);
        return () => {
            document.removeEventListener('click', handleAnyClick, true);
        };
    }, [hideOnClick]);

    if (!props.show)
        return null;
    
    if (props.name === 'art') {
        return (
            <ul className={props.className} ref={ref}>
                <Link className='page-link' to='/art/zine'> zine </Link>
                <Link className='page-link' to='/art/animation'> animation </Link>
                <Link className='page-link' to='/art/sketch'>sketch </Link>
                {/* <Link className='page-link' to='/art/potpourri'> potpourri </Link>  */}
                </ul>
        );
    } else if (props.name === 'tech') {
        return (<ul className={props.className} ref={ref}>
            <Link className='page-link' to='/tech/software'> software </Link>
            <Link className='page-link' to='/tech/ux'> ux </Link> </ul>
        )
    }
}

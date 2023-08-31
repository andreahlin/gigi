import React, { useEffect, useRef } from 'react';
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
    
    if (props.name === "art") {
        return (
            <ul className={props.className} ref={ref}>
                <Link className="page-link" to="/home/design"> design </Link>
                <Link className="page-link" to="/home/animation"> animation </Link>
                <Link className="page-link" to="/home/figure">figure </Link>
                <Link className="page-link" to="/home/deepcuts"> deep cuts </Link> </ul>
        );
    } else if (props.name === "tech") {
        return (<ul className={props.className} ref={ref}>
            <Link className="page-link" to="/home/software"> software </Link>
            <Link className="page-link" to="/home/projects"> past projects </Link> </ul>
        )
    }
}

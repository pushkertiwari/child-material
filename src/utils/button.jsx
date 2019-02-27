import React from 'react';
import Link from '@material-ui/core/Link';

export default function ButtonLink(props) {
    return (
        <Link
            component="button"
            // href={props.href}
            target="_blank"
            onClick={() => { props.onClick('e.target.value'); }}
        >
            {props.textprops}
        </Link>
    );
}
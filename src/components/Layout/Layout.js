import React from 'react';

const layout = ( props ) => (
    <>
        <div>Toolbar, sidedrawer, backdrop</div>
        <main>
            {props.children}
        </main>
    </>
);

export default layout;
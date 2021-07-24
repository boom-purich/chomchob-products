import * as React from 'react';

export const NoneScrollStyle = () => {
    return <style jsx global>{`
        body {
            overflow: hidden;
            height:100vh;
            width:100%;
            position:absolute;
        }
    `}</style>
}
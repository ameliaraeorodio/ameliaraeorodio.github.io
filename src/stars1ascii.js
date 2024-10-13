import React, { useEffect, useState } from 'react';

function Stars1ascii({sx}){
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        const loadHtml = async () => {
            try {
                const response = await fetch('/stars1.html');
                if (!response.ok) throw new Error('Network response was not ok');
                const text = await response.text();
                setHtmlContent(text);
            } catch (error) {
                console.error('Error fetching HTML:', error);
            }
        };

        loadHtml();
    }, []);
    return(
        <div style = {sx} dangerouslySetInnerHTML={{ __html: htmlContent }} />
    )
}
export default Stars1ascii;
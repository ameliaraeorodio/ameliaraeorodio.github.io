import React, { useEffect, useState } from 'react';

function CatAscii(){
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        const loadHtml = async () => {
            try {
                const response = await fetch('/cat.html');
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
        <div className = "cat" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    )
}
export default CatAscii;
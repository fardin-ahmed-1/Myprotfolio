import React from 'react'

const Resumi = () => {
    const handleDownloadResume = async () => {
        const googleDocsLink =
            'https://docs.google.com/document/d/1uRYq5OoAHHlNpspSZ7NMt92Fb1HP-gHKKpEfRddABwA/edit?usp=sharing';
        try {
            const response = await fetch(googleDocsLink);

            if (!response.ok) {
                throw new Error('Failed to fetch resume');
            }
            const blob = await response.blob();
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.target = '_blank';
            link.download = 'Fardin_Ahmed.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error downloading resume:', error);
            // Handle the error here (e.g., show an error message to the user)
        }
    }
    return (

        <div className='flex items-center gap-4'>
            <Button lable='Download CV' handleClick={handleDownloadResume} icon={MdOutlineDownloading} />
        </div>

    )
}

export default Resumi
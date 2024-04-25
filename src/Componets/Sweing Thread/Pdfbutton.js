import React from 'react'

const Pdfbutton = ({url}) => {
    const openPDF = () => {
        // Replace 'your_pdf_url.pdf' with the actual URL of your PDF file
        window.open({url}, '_blank');
    };

    return (
        <div className=' flex justify-center items-center'>
            <div classname=" w-10">
                <button className='bg-black text-white p-5 rounded-md' onClick={openPDF}>Download Brochure</button>
            </div>
        </div>
    )
}

export default Pdfbutton
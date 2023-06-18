import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import { heading } from "../SuperParent/superParentContent";
import { AiOutlineDownload } from "react-icons/ai";
import './styles.css';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const Header = () => {
    const [downloadUrl, setDownloadUrl] = useState('');
    const firebaseConfig = {
        apiKey: process.env.apiKey,
        authDomain: process.env.apiKey,
        projectId: process.env.apiKey,
        storageBucket: process.env.apiKey,
        messagingSenderId: process.env.apiKey,
        appId: process.env.apiKey,
        measurementId: process.env.apiKey
    };

    console.log(firebaseConfig);

    initializeApp(firebaseConfig);
    const storage = getStorage();
    const gsReference = ref(storage, 'gs://pdfdownload-44db1.appspot.com/pratik_lavhale_resume.pdf');
    const downloadUrlPromise = new Promise((resolve, reject) => {
        try {
            resolve(getDownloadURL(gsReference));
        } catch (err) {
            reject(err);
        }
    });
    const downloadPDF = async () => {
        try {
            downloadUrlPromise.then(res => setDownloadUrl(res));
        } catch (error) {
            console.log('Error downloading PDF:', error);
        }
    };
    downloadPDF();
    return (<div className='header-parent'>
        <NavBar />
        <div className="dummy-height"></div>
        <>{heading}</>
        <div className="header-buttons">
            <a className="resume-button" href={downloadUrl} target="_blank"><span className="resume-text-style">Resume</span><span><AiOutlineDownload size='30px' className="icon-fix" /></span></a>
        </div>
    </div>)
}

export default Header;
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
        REACT_APP_apiKey: process.env.apiKey,
        REACT_APP_authDomain: process.env.apiKey,
        REACT_APP_projectId: process.env.apiKey,
        REACT_APP_storageBucket: process.env.apiKey,
        REACT_APP_messagingSenderId: process.env.apiKey,
        REACT_APP_appId: process.env.apiKey,
        REACT_APP_measurementId: process.env.apiKey
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
            <a className="resume-button" href={downloadUrl} rel='noreferrer' target="_blank"><span className="resume-text-style">Resume</span><span><AiOutlineDownload size='30px' className="icon-fix" /></span></a>
        </div>
    </div>)
}

export default Header;
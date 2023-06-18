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
        apiKey: "AIzaSyCcPVMt9tgcO2HOa7MzpxT2Xex5yPWaUpE",
        authDomain: "pdfdownload-44db1.firebaseapp.com",
        projectId: "pdfdownload-44db1",
        storageBucket: "pdfdownload-44db1.appspot.com",
        messagingSenderId: "453838884138",
        appId: "1:453838884138:web:8114193ef493fb0d846253",
        measurementId: "G-82WG2054XW"
    };

    initializeApp(firebaseConfig);
    const storage = getStorage();
    const gsReference = ref(storage, 'gs://pdfdownload-44db1.appspot.com/pratik_lavhale_resume.pdf');
    const testProm = new Promise((resolve, reject) => {
        try {
            resolve(getDownloadURL(gsReference));
        } catch (err) {
            console.log(err);
        }
    });
    const downloadPDF = async () => {
        try {
            testProm.then(res => setDownloadUrl(res));
            console.log('downloadable url is: ', downloadUrl);
            // Use the URL to download the PDF
            window.open(downloadUrl, '_blank');
        } catch (error) {
            console.log('Error downloading PDF:', error);
        }
    };
    return (<div className='header-parent'>
        <NavBar />
        <div className="dummy-height"></div>
        <>{heading}</>
        <div className="header-buttons">
            <a className="resume-button" onClick={() => downloadPDF()}><span className="resume-text-style">Resume</span><span><AiOutlineDownload size='1x' className="icon-fix" /></span></a>
        </div>
    </div>)
}

export default Header;
import React, { useState, useEffect } from 'react';
import './RandomQR.css';

const RandomQrCode = () => {
  const [text, setText] = useState('');
  const [qrCode, setQrCode] = useState('');

  useEffect(() => {
    if (text) {
      const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}`;
      setQrCode(apiUrl);
    }
  }, [text]);

  return (
    <div className='container'>
      <h1>QR Code Generator</h1>
      <input type="text" placeholder="Enter your text" value={text} onChange={(e)=>setText(e.target.value)} />
      {qrCode ? <img src={qrCode} alt="QR Code"  />:'Enter to get QR code'}
    </div>
  );
};

export default RandomQrCode;

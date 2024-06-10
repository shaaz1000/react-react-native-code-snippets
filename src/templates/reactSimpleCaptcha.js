import React, { useState } from "react";
import Captcha from "react-simple-captcha";

const SimpleCaptcha = () => {
  const [captchaCode, setCaptchaCode] = useState("");

  const handleCaptchaChange = (code) => {
    setCaptchaCode(code);
  };

  return (
    <div>
      <Captcha onChange={handleCaptchaChange} />
      <input type="text" value={captchaCode} readOnly />
    </div>
  );
};

export default SimpleCaptcha;

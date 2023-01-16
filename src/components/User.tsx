import { useState } from "react";
import "../css/main.css";
import Data from "../json/UserInfo.json";

export default function User() {
  const [lastname, setLastName] = useState(Data.lastname);
  const [firstname, setFirstName] = useState(Data.firstname);
  const [lastnameR, setLastNameR] = useState(Data.lastnameR);
  const [firstnameR, setFirstNameR] = useState(Data.firstnameR);
  const [tel, setTel] = useState(Data.TEL);
  const [mail, setMail] = useState(Data.mail);
  const [postcode, setPostCode] = useState(Data.postcode);
  const [address, setAddress] = useState(Data.address);

  const getValue = () => {
    // json更新したかったけどできなかった(´;ω;｀)
  };
  return (
    <div className="user">
      <h2>UserInfo</h2>
      <div className="contentflex">
        <p className="ex">姓</p>
        <input
          type="text"
          value={lastname}
          className="box"
          onChange={(event) => setLastName(event.target.value)}
        ></input>
        <p className="ex">名</p>
        <input
          type="text"
          value={firstname}
          className="box"
          onChange={(event) => setFirstName(event.target.value)}
        ></input>
      </div>
      <div className="contentflex">
        <p className="ex">セイ</p>
        <input
          type="text"
          value={lastnameR}
          className="box"
          onChange={(event) => setLastNameR(event.target.value)}
        ></input>
        <p className="ex">メイ</p>
        <input
          type="text"
          value={firstnameR}
          className="box"
          onChange={(event) => setFirstNameR(event.target.value)}
        ></input>
      </div>
      <div className="contentflex">
        <p className="ex">電話番号</p>
        <input
          type="tel"
          value={tel}
          className="box"
          onChange={(event) => setTel(event.target.value)}
        ></input>
        <p className="ex">e-mail</p>
        <input
          type="email"
          value={mail}
          className="box"
          onChange={(event) => setMail(event.target.value)}
        ></input>
      </div>
      <div className="contentflex">
        <p className="ex">郵便番号</p>
        <input
          type="text"
          value={postcode}
          className="postcode"
          onChange={(event) => setPostCode(event.target.value)}
        ></input>
        <p className="ex">住所</p>
        <input
          type="text"
          value={address}
          className="address"
          onChange={(event) => setAddress(event.target.value)}
        ></input>
      </div>
      <button onClick={getValue}>変更</button>
    </div>
  );
}

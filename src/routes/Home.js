import React from "react";
import { useState, useEffect } from "react";
import { dbService } from "fbase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";


const Home = ({ userObj }) => {
  const [twit, setTwit] = useState("");
  const [twits, setTwits] = useState([]);
  
  useEffect(() => {
    onSnapshot(collection(dbService, "wwtwitter"), (snap) => {
      snap.forEach(doc => {
        const twtObj = { ...doc.data(), id: doc.id };
        setTwits((prev) => [twtObj, ...prev]);
      });
    });
  }, []);
  
  const onSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(dbService, "wwtwitter"), {
      text: twit,
      createdAt: Date.now(),
      creatorId: userObj.uid
    });
    setTwit("");
  };

  const onChange = (e) => {
    e.preventDefault();
    const {
      target: { value }
    } = e;
    setTwit(value);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          value={twit}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Twit" />
      </form>
      <div>
        {twits.map((twt) => (
          <div key={twt.id}>
            <h4>{twt.text}</h4>
          </div>
        ))}
      </div>
    </>
  );
};


export default Home;
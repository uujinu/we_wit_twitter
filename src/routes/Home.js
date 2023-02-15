import React from "react";
import { useState } from "react";


const Home = () => {
  const [twit, setTwit] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    e.preventDefault();
    const {
      target: { value }
    } = e;
    setTwit(value);
  };

  return (
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
  );
};


export default Home;
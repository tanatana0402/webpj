import React, { useState, useEffect } from "react";
import { dbService } from "../fbase";
import Career from "../components/Career";
import Factory from "../components/Factory";

const Home = ({ userObj }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    dbService.collection("career").onSnapshot((snapshot) => {
      console.log(snapshot)
      const careerArray = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(careerArray);
      setList(careerArray);
    });
  }, []);

  return (
    <div>
      <Factory userObj={userObj} />
      <div>
        {list.map((career, index) => (
          <Career
            key={index}
            careerObj={career}
            isOwner={career.createrId === userObj.uid}
            userObj={userObj}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
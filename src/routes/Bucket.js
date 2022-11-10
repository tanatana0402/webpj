import { dbService } from "../fbase";
import React, { useEffect } from "react";

function Bucketlist() {
  useEffect(() => {
    const bucket = dbService.collection("bucket");
    bucket.get().then((docs) => {
      docs.forEach((doc) => {
        if(doc.exists){
          console.log(doc.data());
          console.log(doc.id);
        }
      });
    });
  });

  return (
    <div>
      firebase 확인
    </div>
  );
}



export default Bucketlist;
import { dbService } from "../fbase";
import React, { useEffect, useState } from "react";

function Product() {
  const [list, setList] = useState([])
  console.log(dbService)

  useEffect(() => {
    const db = dbService.collection("books");
    db.get().then((docs) => {
      // 반복문으로 docuemnt 하나씩 확인
      docs.forEach((doc) => {
        if(doc.exists){
          // document의 데이터
          console.log(doc.data());
          // document의 id
          console.log(doc.id);
        }
        setList(db)
      });
    });
  
  }, []);

  return (
    <div>
      test
    </div>
  );
}



export default Product;
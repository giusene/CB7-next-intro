import { useEffect } from "react";
import styles from "./index.module.scss";

const Test = () => {
  useEffect(() => {
    fetch("http://localhost:3000/api/hello", {
      method: "POST",
      body: "CIAO",
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return <div>COmponente Test</div>;
};

export default Test;

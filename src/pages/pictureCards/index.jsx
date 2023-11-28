import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import Card from "./cards/index";
import img1 from "../../assets/Rectangle 12.png";
import img2 from "../../assets/rectangle2.svg";
import img3 from "../../assets/rectangle3.svg";
import img4 from "../../assets/rectangle4.svg";
import img5 from "../../assets/rectangle5.svg";
import profileimg from "../../assets/profileImg.svg";

function CardSection() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState(null);

  const fetchInfo = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div className="card-section">
      <Card
        image={img1}
        heading="5 things about the zuba culture"
        text="Lorem ipsum dolor sit amet,  consectetur adipis cing elit sed do eiusmod tempor incididun cing elit sed do eiusmod tempor incididun"
        profName="John Ebube Ehni"
        profImg={profileimg}
        profDate="27th November 2017"
      />
       <Card
        image={img2}
        heading="5 things about the zuba culture"
        text="Lorem ipsum dolor sit amet,  consectetur adipis cing elit sed do eiusmod tempor incididun cing elit sed do eiusmod tempor incididun"
        profName="John Ebube Ehni"
        profImg={profileimg}
        profDate="27th November 2017"
      />
       <Card
        image={img3}
        heading="5 things about the zuba culture"
        text="Lorem ipsum dolor sit amet,  consectetur adipis cing elit sed do eiusmod tempor incididun cing elit sed do eiusmod tempor incididun"
        profName="John Ebube Ehni"
        profImg={profileimg}
        profDate="27th November 2017"
      />
       <Card
        image={img4}
        heading="5 things about the zuba culture"
        text="Lorem ipsum dolor sit amet,  consectetur adipis cing elit sed do eiusmod tempor incididun cing elit sed do eiusmod tempor incididun"
        profName="John Ebube Ehni"
        profImg={profileimg}
        profDate="27th November 2017"
      />
       <Card
        image={img5}
        heading="5 things about the zuba culture"
        text="Lorem ipsum dolor sit amet,  consectetur adipis cing elit sed do eiusmod tempor incididun cing elit sed do eiusmod tempor incididun"
        profName="John Ebube Ehni"
        profImg={profileimg}
        profDate="27th November 2017"
      />
    </div>
  );
}
export default CardSection;

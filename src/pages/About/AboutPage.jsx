import React from "react";
import styles from "./AboutPage.module.scss";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

const AboutPage = () => {
  const img1 =
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80";
  const img2 =
    "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z3V5fGVufDB8fDB8fA%3D%3D&w=1000&q=80";
  const img3 =
    "https://images.unsplash.com/photo-1541855492-581f618f69a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZXxlbnwwfHwwfHw%3D&w=1000&q=80";
  const img4 =
    "https://media.istockphoto.com/photos/headshot-of-44-year-old-mixed-race-man-in-casual-polo-shirt-picture-id1264106963?k=20&m=1264106963&s=170667a&w=0&h=TC6RShu_LhRPJth5UVdSYzO63iXCI4tKkMb0Wafsprk=";
  return (
    <div className={styles.aboutPage}>
      <div className={styles.topContent}>
        <p className={styles.head}>About us</p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ab
          quo asperiores necessitatibus fuga cum, inventore aliquid, at labore
          odit quibusdam quaerat. Fugit iure rerum harum illum ea, nemo
          dignissimos voluptate repellendus optio dolorem laborum, omnis
          reprehenderit numquam voluptatem modi recusandae veritatis impedit
          quisquam incidunt deserunt tenetur libero commodi facere!
        </p>
      </div>
      <div className={styles.midContent}>
        <p className={styles.head}>Leadership</p>
        <div className={styles.mainBlock}>
          <img src={img1} alt="" />
          <p className={styles.text}>
            <span>
              {" "}
              <strong>Rushikesh Mehtre</strong>
            </span>
            <span>Founder and CEO</span>
          </p>
        </div>
        <div className={styles.subBlocks}>
          <div className={styles.subBlock}>
            <img src={img2} alt="" />
            <p className={styles.text}>
              <span>
                {" "}
                <strong>John Doe</strong>
              </span>
              <span>Operations Head</span>{" "}
            </p>
          </div>
          <div className={styles.subBlock}>
            <img src={img3} alt="" />
            <p className={styles.text}>
              <span>
                {" "}
                <strong>Brad Traversy</strong>
              </span>
              <span>Sales Executive</span>{" "}
            </p>
          </div>
          <div className={styles.subBlock}>
            <img src={img4} alt="" />
            <p className={styles.text}>
              <span>
                {" "}
                <strong>Hitesh Chuadhary</strong>
              </span>
              <span>HR Executive</span>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.bottomContent}>
        <p className={styles.head}>Numbers are testimonials ! </p>
        <div className={styles.numbers}>
          <p className={styles.numberBlock}>
            <span className={styles.count}>250+</span>
            <span className={styles.text}>employees</span>
          </p>
          <p className={styles.numberBlock}>
            <span className={styles.count}>10000+</span>
            <span className={styles.text}>customers</span>
          </p>
          <p className={styles.numberBlock}>
            <span className={styles.count}>50+</span>
            <span className={styles.text}>cities</span>
          </p>
          <p className={styles.numberBlock}>
            <span className={styles.count}>5+</span>
            <span className={styles.text}>countries</span>
          </p>
        </div>
      </div>
      <div className={styles.infoContent}>
        <div className={styles.infoBlock}>
          <span>
            <MdEmail className={styles.icon} />
          </span>

          <span>Email</span>
          <span>rsmrsm5952@gmail.com</span>
        </div>
        <div className={styles.infoBlock}>
          <span>
            <MdLocationOn className={styles.icon} />
          </span>
          <span>Location</span>
          <span>Wakad, Pune</span>
        </div>
        <div className={styles.infoBlock}>
          <span>
            <BsTelephoneFill className={styles.icon} />
          </span>
          <span>Contact</span>
          <span>+91-7303133973</span>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

import React from "react";
import styles from "../styles/Blogs.module.scss";
const Blogs = () => {
  const blogsArray = [
    {
      id: "1",
      imgUrl:
        "https://i0.wp.com/www.inventiva.co.in/wp-content/uploads/2022/03/211631-general-13.jpg?resize=780%2C470&ssl=1",
      title: "Top 10 Most Promising and Scalable Startups in Delhi 2022",
      author: "Sunita Chabra",
      date: "12/02/2022",
      link: "https://www.inventiva.co.in/trends/promising-and-scalable-startups-delhi/",
    },
    {
      id: "2",
      imgUrl:
        "https://static.toiimg.com/thumb/msid-89142345,width-800,height-600,resizemode-75,imgsize-23338,pt-32,y_pad-40/89142345.jpg",
      title: "Organic beauty brands revolutionising Indian skin care",
      author: "Jasmine Dawda",
      date: "23/01/2022",
      link: "https://timesofindia.indiatimes.com/life-style/beauty/skin-care-products-in-india-organic-beauty-brands-revolutionising-indian-skin-care/articleshow/89142345.cms",
    },
    {
      id: "3",
      imgUrl:
        "https://static.toiimg.com/thumb/msid-88874817,width-800,height-600,resizemode-75,imgsize-25700,pt-32,y_pad-40/88874817.jpg",
      title:
        "11 best Indian skincare brands that are Ayurveda based and, naturally, very good for you ",
      author: "Saumyaa Vohra",
      date: "05/11/2021",
      link: "https://www.gqindia.com/look-good/content/ayurveda-based-indian-skincare-brands",
    },
    {
      id: "4",
      imgUrl:
        "https://assets.vogue.in/photos/618c9cc7f51c043bdad1fa9d/2:3/w_1920,c_limit/Vogue-Beauty-March0396-copy_1.jpg",
      title: "How to market beauty brands to Gen Z",
      author: "Sukriti Shahi",
      date: "30/12/2021",
      link: "https://www.vogue.in/beauty/content/how-to-market-beauty-brands-to-gen-z",
    },
  ];
  return (
    <div className={styles.blogs}>
      <p className={styles.head}>Blogs</p>
      <div className={styles.blogCards}>
        {blogsArray.map((item) => {
          return (
            <div className={styles.blogCard} key={item.id}>
              <img src={item.imgUrl} alt="" />
              <p className={styles.bloghead}>{item.title}</p>
              <p className={styles.author}>
                by <strong>{item.author}</strong> | <strong>{item.date}</strong>
              </p>
              <a href={item.link} target="_blank">
                read more
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;

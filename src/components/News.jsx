import React from "react";
import styles from "../styles/News.module.scss";
const News = () => {
  const newsArray = [
    {
      id: "1",
      imgUrl:
        "https://images.livemint.com/img/2022/03/09/600x338/LSpic_1646845389603_1646845403576.jpg",
      title: "The beauty business is exploding in India",
      description:
        "Homegrown Indian brands such as Plum, Sugar, Kay Beauty now sit alongside foreign brands such as Smashbox, Huda Beauty, Elf and several Korean beauty brands on e-commerce marketplaces",
      link: "https://www.livemint.com/companies/news/beauty-products-give-india-a-makeover-11646845263620.html",
    },
    {
      id: "2",
      imgUrl:
        "https://images.livemint.com/img/2021/11/18/600x338/beautybrands_1637259534826_1637259541492.jpg",
      title:
        "Meet these new-age Made in India cosmetic brands making a splash among legacy names",
      description:
        "While the Indian cosmetic industry is booming and many new brands are joining the league, SMBStory brings to you a list of four Made in India, new age cosmetic brands that are wooing customers big time and growing tremendously.",
      link: "https://yourstory.com/smbstory/new-age-d2c-cosmetic-brands-made-in-india-sugar-renee-makeup-companies/amp",
    },
    {
      id: "3",
      imgUrl:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2022-02/11/full/1644574054-1109.jpg?im=Resize,width=640",
      title:
        "Beauty brand RENEE Cosmetics raises $10 mn in funding by Mensa brands",
      description:
        "RENEE Cosmetics plans on utilising funds majorly in strengthening the brand presence and widening offline presence.",
      link: "https://www.business-standard.com/article/companies/beauty-brand-renee-cosmetics-raises-10-mn-in-funding-by-mensa-brands-122021100883_1.html",
    },
    {
      id: "4",
      imgUrl:
        "https://images.moneycontrol.com/static-mcnews/2020/05/Vineeta_Kaushik-653x435.jpg?impolicy=website&width=770&height=431",
      title:
        "Exclusive | Shark Tank judge’s Sugar Cosmetics eyes $500 million valuation",
      description:
        "Sugar Cosmetics' deal will also mark LVMH-backed L Catterton's first India deal, after it hired an executive from Sequoia India to lead investments.",
      link: "https://www.moneycontrol.com/news/business/startup/exclusive-shark-tank-judges-sugar-cosmetics-eyes-500-million-valuation-8175321.html",
    },
  ];
  return (
    <div className={styles.news}>
      <p className={styles.head}>Beautgenics in news</p>
      <div className={styles.newsCards}>
        {newsArray.map((item) => {
          return (
            <div className={styles.newsCard} key={item.id}>
              <img src={item.imgUrl} alt="" />
              <p className={styles.newshead}>{item.title}</p>
              <p className={styles.description}>{item.description}</p>
              <a href={item.link} target="_blank" rel="noreferrer">
                read more
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;

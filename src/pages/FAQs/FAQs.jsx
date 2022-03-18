import React, { useEffect } from "react";
import styles from "./FAQs.module.scss";
const FAQs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.faqs}>
      <div className={styles.faq}>
        <p className={styles.head}>Frequently Asked Questions(FAQs)</p>

        <div className={styles.faqBlock}>
          <p className={styles.question}>1.What are you selling ?</p>
          <p className={styles.answer}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, totam
            optio quasi, aspernatur non mollitia ad corrupti fuga dignissimos
            porro, minima iusto dolores. Dolores rerum id odio voluptas
            consectetur hic?{" "}
          </p>
        </div>
        <div className={styles.faqBlock}>
          <p className={styles.question}>2.What does the guarantee cover ? </p>
          <p className={styles.answer}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, totam
            optio quasi, aspernatur non mollitia ad corrupti fuga dignissimos
            porro, minima iusto dolores. Dolores rerum id odio voluptas
            consectetur hic?{" "}
          </p>
        </div>
        <div className={styles.faqBlock}>
          <p className={styles.question}>
            3.What are your instalment alternatives ?{" "}
          </p>
          <p className={styles.answer}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, totam
            optio quasi, aspernatur non mollitia ad corrupti fuga dignissimos
            porro, minima iusto dolores. Dolores rerum id odio voluptas
            consectetur hic?{" "}
          </p>
        </div>
        <div className={styles.faqBlock}>
          <p className={styles.question}>
            4.What time will the products be dispatched ?
          </p>
          <p className={styles.answer}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, totam
            optio quasi, aspernatur non mollitia ad corrupti fuga dignissimos
            porro, minima iusto dolores. Dolores rerum id odio voluptas
            consectetur hic?{" "}
          </p>
        </div>
        <div className={styles.faqBlock}>
          <p className={styles.question}>5.Where do your items come from ?</p>
          <p className={styles.answer}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, totam
            optio quasi, aspernatur non mollitia ad corrupti fuga dignissimos
            porro, minima iusto dolores. Dolores rerum id odio voluptas
            consectetur hic?{" "}
          </p>
        </div>
        <div className={styles.faqBlock}>
          <p className={styles.question}>
            6.Do you have merchandise exchanges ?
          </p>
          <p className={styles.answer}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, totam
            optio quasi, aspernatur non mollitia ad corrupti fuga dignissimos
            porro, minima iusto dolores. Dolores rerum id odio voluptas
            consectetur hic?{" "}
          </p>
        </div>
        <div className={styles.faqBlock}>
          <p className={styles.question}>
            7.My markdown code isn’t working, what do I do ?{" "}
          </p>
          <p className={styles.answer}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, totam
            optio quasi, aspernatur non mollitia ad corrupti fuga dignissimos
            porro, minima iusto dolores. Dolores rerum id odio voluptas
            consectetur hic?{" "}
          </p>
        </div>
        <div className={styles.faqBlock}>
          <p className={styles.question}>
            8.How might I check the situation with my request ?{" "}
          </p>
          <p className={styles.answer}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, totam
            optio quasi, aspernatur non mollitia ad corrupti fuga dignissimos
            porro, minima iusto dolores. Dolores rerum id odio voluptas
            consectetur hic?{" "}
          </p>
        </div>
        <div className={styles.faqBlock}>
          <p className={styles.question}>
            9.How would I choose what not-for-profit to give to ?{" "}
          </p>
          <p className={styles.answer}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, totam
            optio quasi, aspernatur non mollitia ad corrupti fuga dignissimos
            porro, minima iusto dolores. Dolores rerum id odio voluptas
            consectetur hic?{" "}
          </p>
        </div>
        <div className={styles.faqBlock}>
          <p className={styles.question}>
            10.How would I guarantee my gift is spent on the philanthropic main
            goal, not overhead ?{" "}
          </p>
          <p className={styles.answer}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, totam
            optio quasi, aspernatur non mollitia ad corrupti fuga dignissimos
            porro, minima iusto dolores. Dolores rerum id odio voluptas
            consectetur hic?{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQs;

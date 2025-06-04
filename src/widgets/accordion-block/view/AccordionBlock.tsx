import { type FC, useState, useEffect } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import type { AccordionItem } from '../types/type';
import styles from './AccordionBlock.module.scss';

export const AccordionBlock: FC = () => {
  const [data, setData] = useState<AccordionItem[] | null>(null);
  const [openId, setOpenId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get<AccordionItem[]>('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке:', error);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  const handleClick = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  if (isLoading) return <p>Загрузка...</p>;
  if (isError) return <p>Ошибка при загрузке данных</p>;

  return (
    <section>
      <div className={styles.accordion}>
        <div className={styles.accordionText}>
          <h2>Часто задаваемые вопросы</h2>
        </div>
        {data &&
          data.map((item, index) => (
            <div key={index} className={styles.accordionItem}>
              <div
                className={styles.accordionHeader}
                onClick={() => handleClick(index)}
              >
                <h3>{item.email}</h3>
              </div>
              <div
                className={classNames(
                  styles.accordionCollapse,
                  openId === index && styles.open
                )}
              >
                <div className={styles.accordionBody}>
                  <p>{item.body}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

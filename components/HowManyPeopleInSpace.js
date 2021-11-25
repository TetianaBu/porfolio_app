import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from '../components/styles/Space.module.css';

export default function HowManyPeopleInSpace() {
  const [data, setData] = useState({ people: [] });
  const [dataNumber, setDataNumber] = useState({ number: null });
  const [isError, setIsError] = useState(false);
  
  function doNotShow() {
    return window.alert("OOKay!")
  }
  async function fetchNames() {
    if (data.people.length > 0) {
      return;
    }
    setIsError(false);
    try {
      const result = await axios('/* http://api.open-notify.org/astros.json:splat 200');
      setData(result.data);
      console.log(result.data);
    } catch (error) {
      setIsError(true);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      try {
        const result = await axios('/* http://api.open-notify.org/astros.json:splat 200');
        setDataNumber(result.data);
        console.log(result.data);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.wrapper}>
      
    <div className={styles.innerWrapper}>
      <p>
        By the way, there are <b>{dataNumber.number}</b> people right now in
        space. Want to know who they are?{' '}
        <button onClick={fetchNames} className={styles.btn}>
          YES
        </button>
        /
        <button className={styles.btn} onClick={doNotShow}>
          NO
        </button>
      </p>

      <ul className={styles.peopleInSpaceList}>
        {data.people.map((item) => (
          <li key={item.name}>
            {item.name} {item.craft}
          </li>
        ))}
      </ul>
      {isError && <div>Error</div>}
    </div>
    </div>
  );
}

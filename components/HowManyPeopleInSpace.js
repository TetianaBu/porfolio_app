import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from '../components/styles/Space.module.css';

export default function HowManyPeopleInSpace() {
  const [data, setData] = useState({ totalItems: [] });
  const [dataNumber, setDataNumber] = useState();
  const [isError, setIsError] = useState(false);

  function doNotShow() {
    return window.alert('OOKay!');
  }
  // async function fetchNames() {
  //   if (data.totalItems.length > 0) {
  //     return;
  //   }
  //   setIsError(false);
  //   try {
  //     const result = await axios('https://tle.ivanstanojevic.me/api/tle');
  //     setData(result.data.totalItems);
  //   } catch (error) {
  //     setIsError(true);
  //   }
  // }

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      try {
        const result = await axios('https://tle.ivanstanojevic.me/api/tle');
        setDataNumber(result.data.totalItems);
        console.log(result.data.totalItems)
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, []);
  console.log(dataNumber, 'here');
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <p>
          By the way, there are <b>{dataNumber}</b> satellites orbiting Earth
          right now!{' '}
        </p>
        <ul className={styles.peopleInSpaceList}>
          {data.totalItems.map((item) => (
            <li key={item.name}>
              {item.name} {item.craft}
            </li>
          ))}
        </ul>
        {isError && <div>something brokes</div>}
      </div>
    </div>
  );
}

// {
//   /* <button onClick={fetchNames} className={styles.btn}>
// YES
// </button>
// /
// <button className={styles.btn} onClick={doNotShow}>
// NO
// </button> */
// }

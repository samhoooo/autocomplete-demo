"use client";

import _ from "lodash";
import { FaSearch } from "react-icons/fa";
import { useAutoComplete } from "../hooks/useAutoComplete";
import styles from "./AutoComplete.module.css";
import { ChangeEvent, useState } from "react";

export const AutoComplete = () => {
  const [result, setResult] = useState<{ name: string; code: number }[]>([]);
  const { search } = useAutoComplete();

  const handleTextChange = _.debounce(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const keyword = e.target.value;
      if (!!keyword && keyword.length >= 1) {
        const searchResult = await search(keyword);
        console.log({ searchResult });
        setResult(searchResult);
        return;
      }
      setResult([]);
    },
    300
  );

  return (
    <div className={styles.searchBox}>
      <div className={styles.row}>
        <input
          type="text"
          id="input-box"
          placeholder="Search country"
          autoComplete="off"
          autoFocus
          className={styles.inputBox}
          onChange={handleTextChange}
        />
        <button className={styles.searchButton}>
          <FaSearch color="black" size={24} />
        </button>
      </div>
      <div className={styles.resultBox}>
        <ul>
          {result?.map((item) => (
            <li key={item.code}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

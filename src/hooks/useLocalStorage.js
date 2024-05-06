import { useEffect, useState } from "react";

export default function useLocalStorage(key, value) {
  const [localStorageValue, setLocalStorageValue] = useState();
  const [localStorageKey, setLocalStorageKey] = useState();
  setLocalStorageValue(value);
  setLocalStorageKey(key);
  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(""));
  }, []);

  const savedContacts = window.localStorage.getItem(localStorageValue);
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
  useEffect(() => {
    window.localStorage.setItem(localStorageKey, JSON.stringify(localStorageValue));
  }, [localStorageValue, localStorageKey]);

  return { localStorageValue, localStorageKey };
}

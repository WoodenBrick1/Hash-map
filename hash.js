import { Linkedlist } from "./linked.js";

export function Hashmap() {
  const loadFactor = 0.75;
  let capacity = 16;
  let buckets = new Array(capacity);
  let total = 0;

  const checkIndex = (index) => {
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
  }

  const increase = () => {
    if (total >= Math.round(capacity * loadFactor)) {
      capacity *= 2;
      const entries = [];

      for (let i = 0; i < buckets.length; i++) {

        if (buckets[i]) {
          const list = buckets[i];
          const listSize = list.size();

          for (let i = 0; i < listSize; i++) {

            const entry = [list.at(i).key, list.at(i).value]
            entries.push(entry);
          }
        }
      }

      buckets = new Array(capacity);
      total = 0;
      for (let entry of entries) {
        set(entry[0], entry[1])
      }
    }
  }


  function hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);

    }
    hashCode = hashCode % capacity;
    checkIndex(hashCode);
    return hashCode;
  }

  const getList = (key) => {
    const hashedIndex = hash(key);

    const list = buckets[hashedIndex];
    if (!list) return null;
    else return list;
  }

  const set = (key, value) => {

    increase();
    const hashedIndex = hash(key);

    let list = (buckets[hashedIndex]) ? buckets[hashedIndex] : new Linkedlist;


    // Check if the key is already in the bucket

    const contains = list.findKey(key);

    if (contains !== null) {
      list.changeValue(contains, value);

    } else {
      list.append(key, value);
      total++;
    }
    buckets[hashedIndex] = list;

  }


  const get = (key) => {
    const list = getList(key);

    return list.at(list.findKey(key)).value;
  }

  const has = (key) => {
    const list = getList(key);

    if (list.findKey(key)) return true;
    else return false;
  }

  const remove = (key) => {
    const list = getList(key);

    const index = list.findKey(key);
    if (!index) return false;

    list.removeAt(index);
    return true;


  }

  const length = () => {

    let count = 0;
    for (let i = 0; i < buckets.length; i++) {

      if (buckets[i]) {
        count += buckets[i].size();
      }
    }
    return count;
  }

  const clear = () => { buckets = new Array(capacity); }


  const keys = () => {

    const keys = [];
    for (let i = 0; i < buckets.length; i++) {

      if (buckets[i]) {
        const list = buckets[i];
        const listSize = list.size();

        for (let i = 0; i < listSize; i++) keys.push(list.at(i).key)
      }
    }
    return keys;
  }

  const values = () => {
    const values = [];
    for (let i = 0; i < buckets.length; i++) {

      if (buckets[i]) {
        const list = buckets[i];
        const listSize = list.size();

        for (let i = 0; i < listSize; i++) values.push(list.at(i).value)
      }
    }
    return values;

  }

  const entries = () => {
    const entries = [];
    for (let i = 0; i < buckets.length; i++) {

      if (buckets[i]) {
        const list = buckets[i];
        const listSize = list.size();

        for (let i = 0; i < listSize; i++) {

          const entry = [list.at(i).key, list.at(i).value]
          entries.push(entry);
        }
      }
    }
    return entries;

  }

  const getCapacity = () => capacity;
  return {
    hash, set, get, has, remove, length, clear, keys, values, entries, getCapacity
  }

}
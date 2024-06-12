import { openDB } from "idb";

const initdb = async () =>
  openDB("jateDB", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jateDB")) {
        console.log("jateDB database already exists");
        return;
      }
      db.createObjectStore("jateDB", { keyPath: "id", autoIncrement: true });
      console.log("jateDB database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const db = await initdb();
  const tx = db.transaction("jateDB", "readwrite");
  const store = tx.objectStore("jateDB");
  const request = store.add({ id: 1, value: content });
  await request.finished;
  const result = await store.get(1);
  console.log("Data saved to DB", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const db = await initdb();
  const tx = db.transaction("jateDB", "readonly");
  const store = tx.objectStore("jateDB");
  const request = store.getAll();
  const result = await request.finished;
  console.log("Data retrieved from DB", result);
};

initdb();
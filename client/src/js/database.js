import { openDB } from 'idb';
// Initialize db
const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      // This thing console logs and returns if jate Db exists
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      // If it doesn't, it creates the db
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });
//putDb: adds data
// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
const jadeDb = await openDB ('jate', 1);
const tx = jateDb.transaction('jate', 'readwrite');
const store = tx.objectStore('jate');
const request = store.put({ id: 1, value: content });
const result = await request;
}
// getDb: gets data
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

initdb();

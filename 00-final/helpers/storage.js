import AsyncStorage from '@react-native-community/async-storage';

const STORAGE_KEY = '@my-favorite-food/items';

export const storeData = async (value) => {
  try {
    const json = JSON.stringify(value);
    await AsyncStorage.setItem(STORAGE_KEY, json);
  } catch (error) {
    console.log(error);
  }
};

export const getData = async () => {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    if (json === null) return null;
    return JSON.parse(json);
  } catch (error) {
    console.log(error);
  }
};

export const addData = async (value) => {
  let data = [];
  const existing = await getData();
  if (existing) data = [...existing];
  data.push(value);
  await storeData(data);
};

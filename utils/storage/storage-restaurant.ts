import fsPromises from "fs/promises";

const restaurantFile = "utils/storage/restaurant.json";

export const getAllRestaurant = async () => {
  try {
    const result = await fsPromises.readFile(restaurantFile, "utf8");
    if (!result.length) return [];
    return JSON.parse(result);
  } catch (_) {
    return [];
  }
};

const readFoodFile = async (): Promise<IRestaurant[]> => {
  try {
    const result = await fsPromises.readFile(restaurantFile, "utf8");
    if (!result.length) return [];
    return JSON.parse(result);
  } catch (_) {
    return [];
  }
};

const writeRestaurantFile = async (rest: IRestaurant[]) => {
  await fsPromises.writeFile(restaurantFile, JSON.stringify(rest));
};

export const createResaurant = async (
  data: IRestaurantBase
): Promise<IRestaurant> => {
  const restaurant: IRestaurant[] = await readFoodFile();
  const newData: IRestaurant = {
    ...data,
    createdAt: new Date().toISOString(),
    id: crypto.randomUUID(),
  };
  restaurant.push(newData);
  await writeRestaurantFile(restaurant);
  return newData;
};

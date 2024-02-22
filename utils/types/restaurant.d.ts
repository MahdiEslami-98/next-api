interface IBaseData {
  id: string;
  createdAt: string;
}

interface IRestaurantBase {
  name: string;
  logo: string;
  address: string;
  description: string;
  tel: string;
  category: "fastFood" | "traditionalFood";
}

interface IRestaurant extends IBaseData, IRestaurantBase {}

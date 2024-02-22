import { NextRequest } from "next/server";
import { restaurantPostSchema } from "@/utils/validations/restaurant-validation";
import {
  createResaurant,
  getAllRestaurant,
} from "@/utils/storage/storage-restaurant";

export const GET = async () => {
  return Response.json(await getAllRestaurant());
};

export const POST = async (data: Request) => {
  let body: IRestaurantBase;
  try {
    body = await data.json();
  } catch (e) {
    console.log(e);
    return Response.json({ message: "body is not valid" }, { status: 425 });
  }

  try {
    await restaurantPostSchema.validateAsync(body);
  } catch (error) {
    return Response.json(
      (error as any)?.details || { message: "Something went wrong" },
      { status: 400 }
    );
  }
  const restaurant = await createResaurant(body);

  return Response.json(restaurant);
};

export const PUT = async (data: Request) => {};

export const DELETE = async (id: NextRequest) => {};

import joi from "joi";

export const restaurantPostSchema = joi.object({
  name: joi.string().alphanum().min(3).max(30).required(),
  logo: joi.string().optional(),
  address: joi.string().min(5).max(70).required(),
  description: joi.string().min(10).max(300).optional(),
  tel: joi.number().required(),
  category: joi.string().valid("fastFood", "traditionalFood").required(),
});

export const restaurantUpdateSchema = joi.object({
  name: joi.string().alphanum().min(3).max(30).optional(),
  logo: joi.string().optional(),
  address: joi.string().min(5).max(70).optional(),
  description: joi.string().min(10).max(300).optional(),
  tel: joi.number().required(),
  category: joi.string().valid("fastFood", "traditionalFood").optional(),
});

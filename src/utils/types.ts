export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_large: string;
  image_mobile: string;
};

export type TIngredientsState = {
  ingredients: Array<TIngredient>;
  isLoading: boolean;
  error: Error | null;
};

export type TConstructorIngredient = TIngredient & {
  id: string;
};

export type TConstructorState = {
  bun?: TConstructorIngredient;
  ingredients: Array<TConstructorIngredient>;
};

export type TOrder = {
  _id: string;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  ingredients: string[];
};

export type TOrdersData = {
  orders: TOrder[];
  total: number;
  totalToday: number;
};

export type TUser = {
  email: string;
  name: string;
};

export type TFeedState = {
  orders: TOrder[];
  total: number;
  totalToday: number;
};

export type TTabMode = 'bun' | 'sauce' | 'main';

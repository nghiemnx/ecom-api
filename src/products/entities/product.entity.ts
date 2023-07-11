import { PriceModel } from 'src/types';

export class Product {
  id: string;
  name: string;
  images: string[];
  price: PriceModel;
  desc: string;
  rating: number;
}

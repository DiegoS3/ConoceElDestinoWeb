import { ProductImage } from "./product.model";

export interface GenericCarouselData {
  header?: string;
  content: GenericCarouselItemData | GenericCarouselItemData[];
}

export interface GenericCarouselItemData {
  id: string;
  name: string;
  images: ProductImage[];
  longDescription: string;
  shortDescription: string;
  price: number;
  rating: number;
  duration: number;
  arrival: string,
  place: string,
  departure: string,
  distance: number,
  included: string,
  notIncluded: string
}

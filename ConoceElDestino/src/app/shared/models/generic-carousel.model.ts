import { Calendar, ProductImage } from "./product.model";

export interface GenericCarouselData {
  header?: string;
  content: GenericCarouselItemData[];
}

export interface GenericCarouselItemData {
  id: string;
  name: string;
  category: string;
  images: ProductImage[];
  horario: Calendar;
  longDescription: string;
  shortDescription: string;
  priceIndi: number;
  priceGroup: number;
  rating: number;
  duration: number;
  arrival: string,
  place: string,
  departure: string,
  distance: number,
  included: string,
  notIncluded: string
}

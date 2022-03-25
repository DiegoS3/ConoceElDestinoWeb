export interface GenericCarouselData {
    header?: string;
    content: GenericCarouselItemData | GenericCarouselItemData[];
}

export interface GenericCarouselItemData {
    id: string;
    name: string;
    image: string;
    description: string;
    price: number;
    rating: number;
}

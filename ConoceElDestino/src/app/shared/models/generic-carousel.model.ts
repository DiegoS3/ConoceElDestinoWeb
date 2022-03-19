export interface GenericCarouselData {
    header?: string;
    content: GenericCarouselItemData | GenericCarouselItemData[];
}

export interface GenericCarouselItemData {
    name: string;
    image: string;
    description: string; 
    price: number;
}
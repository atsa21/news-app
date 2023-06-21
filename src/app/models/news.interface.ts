import { Tags } from "./tags.interface";

export interface News {
    ID: string;
    title: string;
    description: string;
    date: string;
    link: string;
    isTop: boolean;
    commentsCount: number;
    viewCount: number;
    tags: Tags[];
    image?: string;
    imageSource?: string;
    imageSmall?: string;
    imageMiddle?: string;
}

export interface NewsDto {
    news: News[];
    totalItems: number;
}
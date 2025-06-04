export type galleryImageProps = {
  gridAreaClass?: string;
  imageClass?: string;
  name: string;
  src: string;
};

export type gallerySectionProps = {
  images: galleryImageProps[];
  name: string;
};

export const galleryImages: gallerySectionProps[] = [
  {
    images: [
      {
        gridAreaClass: 'row-span-2 col-span-2',
        name: 'Hotel Entrance',
        src: '/images/property/hotel-entrance.webp',
      },
      {
        gridAreaClass: 'row-span-2',
        name: 'Hotel Day View',
        src: '/images/property/hotel-front-view.webp',
      },

      { name: 'Hotel Side View', src: '/images/property/hotel-side-view.webp' },
      { name: 'Parking Area at Day', src: '/images/property/parking-day.webp' },
      {
        gridAreaClass: 'row-span-2',
        name: 'Hotel Night View',
        src: '/images/property/hotel-night-view.webp',
      },
      {
        name: 'Parking Area at Night',
        src: '/images/property/parking-night.webp',
      },
      {
        gridAreaClass: 'row-span-2 col-span-2',
        name: 'Reception',
        src: '/images/property/reception-1.webp',
      },
      { name: 'Reception', src: '/images/property/reception-3.webp' },
    ],
    name: 'Hotel View',
  },
  {
    images: [
      {
        name: 'Mars Restaurant',
        src: '/images/property/mars-restaurant-1.webp',
      },
      {
        name: 'Mars Restaurant',
        src: '/images/property/mars-restaurant-2.webp',
      },
      {
        gridAreaClass: 'row-span-2 col-span-2',
        name: 'Mars Restaurant',
        src: '/images/property/mars-restaurant-3.webp',
      },
      {
        name: 'Mars Restaurant',
        src: '/images/property/mars-restaurant-4.webp',
      },
      {
        name: 'Vegetarian Restaurant',
        src: '/images/property/vegetarian-restaurant-1.webp',
      },
      {
        name: 'Vegetarian Restaurant',
        src: '/images/property/vegetarian-restaurant-2.webp',
      },
      { name: 'Society Bar', src: '/images/property/society-bar-1.webp' },
      { name: 'Society Bar', src: '/images/property/society-bar-2.webp' },
      { name: 'Society Bar', src: '/images/property/society-bar-3.webp' },
    ],
    name: 'Restaurants',
  },
  {
    images: [
      { name: 'Comfort Room', src: '/images/property/comfort-room-1.webp' },
      { name: 'Comfort Room', src: '/images/property/comfort-room-2.webp' },
      { name: 'Deluxe Room', src: '/images/property/deluxe-room-1.webp' },
      { name: 'Deluxe Room', src: '/images/property/deluxe-room-2.webp' },
      { name: 'Executive Room', src: '/images/property/executive-room-1.webp' },
      { name: 'Executive Room', src: '/images/property/executive-room-2.webp' },
      {
        gridAreaClass: 'row-span-2 col-span-2',
        name: 'Suite Room',
        src: '/images/property/suite-room-3.webp',
      },
      { name: 'Suite Room', src: '/images/property/suite-room-1.webp' },
      { name: 'Suite Room', src: '/images/property/suite-room-2.webp' },
    ],
    name: 'Rooms',
  },
  {
    images: [
      {
        gridAreaClass: 'row-span-2',
        name: 'Board Room',
        src: '/images/property/board-room-1.webp',
      },
      { name: 'Board Room', src: '/images/property/board-room-3.webp' },
      { name: 'Board Room', src: '/images/property/board-room-4.webp' },
      { name: 'Board Room', src: '/images/property/board-room-5.webp' },
      {
        gridAreaClass: 'row-span-2 col-span-2',
        name: 'Hall 2',
        src: '/images/property/hall-2.1.webp',
      },
      { name: 'Hall 2', src: '/images/property/hall-2.2.webp' },
      { name: 'Hall 1', src: '/images/property/hall-1.1.webp' },
      { name: 'Hall 1', src: '/images/property/hall-1.2.webp' },
    ],
    name: 'Banquets & Boardrooms',
  },
];

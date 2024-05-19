import { RiTShirt2Fill } from "react-icons/ri";
import { MdFastfood } from "react-icons/md";
import { FaEllipsisH } from "react-icons/fa";

export const links = [
  {
    name: "Stores",
    hash: "#",
  },
  {
    name: "About Us",
    hash: "#",
  },
] as const;

export const partnership = [
  {
    url: "/assets/PartnershipLogo1.png",
  },
  {
    url: "/assets/PartnershipLogo2.png",
  },
  {
    url: "/assets/PartnershipLogo3.png",
  },
  {
    url: "/assets/PartnershipLogo4.png",
  },
];

export const categoryFilters = [
  {
    categoryName: "Clothes",
    icon: RiTShirt2Fill,
  },
  {
    categoryName: "Food",
    icon: MdFastfood,
  },
  {
    categoryName: "Other Stuff",
    icon: FaEllipsisH,
  },
] as const;

export const users = [
  {
    id: "1",
    Image: "/assets/owner.jpg",
    Name: "Salam",
    Occupation: "Youtuber, Programmer",

    storesInfo: {
      store: {
        id: "1",
        storeImage: "/assets/StoreImage.webp",
        description: "",
        status: "Popular",
        storeName: "Hijabi Al Halumi",
        location: "Yala",
        category: "Clothes",
      },
    },
  },
  {
    id: "2",
    Image: "/assets/owner.jpg",
    Name: "Salam",
    Occupation: "Youtuber, Programmer",

    storesInfo: {
      store: {
        id: "2",
        storeImage: "/assets/StoreImage.webp",
        status: "Popular",
        storeName: "Hijabi Al Halumi",
        location: "Yala",
        category: "Clothes",
      },
    },
  },
  {
    id: "3",
    Image: "/assets/owner.jpg",
    Name: "Salam",
    Occupation: "Youtuber, Programmer",
    PhoneNumber: "0774501852",
    storesInfo: {
      store: {
        id: "3",
        storeImage: "/assets/StoreImage.webp",
        status: "Popular",
        storeName: "Hijabi Al Halumi",
        location: "Yala",
        category: "Clothes",
      },
    },
  },
  {
    id: "4",
    Image: "/assets/owner.jpg",
    Name: "Salam",
    Occupation: "Youtuber, Programmer",

    storesInfo: {
      store: {
        id: "4",
        storeImage: "/assets/StoreImage.webp",
        status: "Popular",
        storeName: "Hijabi Al Halumi",
        location: "Yala",
        category: "Clothes",
      },
    },
  },
];

export const news = [
  {
    id: 1,
    image: "/assets/Image1.png",
    title: "The things we need to check when we want to buy a house",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur",
    date: "4 min read | 25 Apr 2021",
  },
  {
    id: 2,
    image: "/assets/Image1.png",
    title: "The things we need to check when we want to buy a house",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur",
    date: "4 min read | 25 Apr 2021",
  },
  {
    id: 3,
    image: "/assets/Image1.png",
    title: "The things we need to check when we want to buy a house",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur",
    date: "4 min read | 25 Apr 2021",
  },
];

import DetroitSkyline from "./detroit-skyline.jpeg";
import ManWithGlasses from "./man-with-glasses.jpeg";

export const MockData = [
  {
    _id: 1,
    image:
      "https://newyorkeye.net/wp-content/uploads/2021/12/EN4309-0822-300x102.jpg",
    frameName: "EN4309",
    color: "Mink/Tortoise Fade",
    rating: 4,
    numReviews: 8,
  },
  {
    _id: 2,
    image:
      "https://newyorkeye.net/wp-content/uploads/2021/12/EN4318-0789-300x102.jpg",
    frameName: "EN4318",
    color: "Tortoise Fade",
    rating: 3.5,
    numReviews: 1,
  },
  {
    _id: 3,
    image:
      "https://newyorkeye.net/wp-content/uploads/2022/02/EN4330-4971_1-300x102.jpg",
    frameName: "EN4330",
    color: "Grey Tortoise",
    rating: 4.5,
    numReviews: 5,
  },
  {
    _id: 4,
    image:
      "https://newyorkeye.net/wp-content/uploads/2021/12/EN4350_2259cc-300x101.jpg",
    frameName: "EN4350",
    color: "Khaki",
    rating: 5,
    numReviews: 1,
  },
];
export const PageData = {
  home: {
    image: DetroitSkyline,
    altText: "Detroit Skyline",
    title: "Brought to you from the D!",
    body: "All glasses manufactured and shipped right here in Metro Detroit!",
  },
  mens: {
    image: ManWithGlasses,
    altText: "Man with glasses",
    title: "Stylish mens frames",
    body: "Shop our collection of mens glasses from buisiness, to casual!",
  },
};

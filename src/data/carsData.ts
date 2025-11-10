import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";
import car5 from "@/assets/car-5.jpg";
import car6 from "@/assets/car-6.jpg";

export interface Car {
  id: number;
  name: string;
  brand: string;
  image: string;
  topSpeed: string;
  horsepower: string;
  year: number;
  type: string;
  price: string;
  acceleration: string;
  engine: string;
  transmission: string;
  description: string;
  videoUrl: string;
  trending?: boolean;
}

export const carsData: Car[] = [
  {
    id: 1,
    name: "Phantom GT",
    brand: "Velocity",
    image: car1,
    topSpeed: "220 mph",
    horsepower: "750 HP",
    year: 2024,
    type: "Supercar",
    price: "$385,000",
    acceleration: "2.8s",
    engine: "4.0L Twin-Turbo V8",
    transmission: "8-Speed Dual-Clutch",
    description: "Experience unmatched performance with the Phantom GT, featuring cutting-edge aerodynamics and a meticulously crafted interior that combines luxury with racing heritage.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    trending: true,
  },
  {
    id: 2,
    name: "Aero X",
    brand: "Hyperion",
    image: car2,
    topSpeed: "240 mph",
    horsepower: "900 HP",
    year: 2024,
    type: "Hypercar",
    price: "$1,200,000",
    acceleration: "2.3s",
    engine: "6.5L V12",
    transmission: "7-Speed Sequential",
    description: "The Aero X pushes the boundaries of automotive engineering with its revolutionary design and breathtaking performance that redefines what's possible on four wheels.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    trending: true,
  },
  {
    id: 3,
    name: "Shadow R",
    brand: "Apex",
    image: car3,
    topSpeed: "215 mph",
    horsepower: "680 HP",
    year: 2024,
    type: "Racing",
    price: "$295,000",
    acceleration: "3.1s",
    engine: "3.8L Twin-Turbo V6",
    transmission: "7-Speed Dual-Clutch",
    description: "Built for the track and refined for the road, the Shadow R delivers a visceral driving experience with precise handling and relentless power delivery.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 4,
    name: "Elegante",
    brand: "Lusso",
    image: car4,
    topSpeed: "205 mph",
    horsepower: "620 HP",
    year: 2023,
    type: "Grand Tourer",
    price: "$275,000",
    acceleration: "3.4s",
    engine: "4.5L V8",
    transmission: "8-Speed Automatic",
    description: "The Elegante seamlessly blends Italian craftsmanship with modern performance, offering a grand touring experience that's both exhilarating and refined.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    trending: true,
  },
  {
    id: 5,
    name: "Storm",
    brand: "Thunder",
    image: car5,
    topSpeed: "218 mph",
    horsepower: "710 HP",
    year: 2024,
    type: "Supercar",
    price: "$320,000",
    acceleration: "2.9s",
    engine: "5.2L V10",
    transmission: "7-Speed Dual-Clutch",
    description: "The Storm brings electrifying performance with its naturally aspirated V10 engine, delivering a soundtrack and driving experience that enthusiasts dream about.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 6,
    name: "Phoenix GTR",
    brand: "Inferno",
    image: car6,
    topSpeed: "235 mph",
    horsepower: "850 HP",
    year: 2024,
    type: "Racing",
    price: "$480,000",
    acceleration: "2.5s",
    engine: "5.5L Twin-Turbo V8",
    transmission: "8-Speed Sequential",
    description: "Born from racing DNA, the Phoenix GTR is a track-focused masterpiece that brings championship-winning technology to the streets with uncompromising performance.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    trending: true,
  },
];

export interface CharacterData {
  name: string;
  imageSrc: string;
  width: number;
  height: number;
  position: {
    left: string;
    top: string;
  };
  gradient: {
    from: string;
    to: string;
  };
  imageStyle: {
    bottom: string;
    scale?: string;
  };
  animation: string;
  rotation: string;
}

export const characters: CharacterData[] = [
  {
    name: "Frank",
    imageSrc: "/half/Frank_half.png",
    width: 93,
    height: 93,
    position: { left: "580px", top: "84px" },
    gradient: { from: "emerald-200", to: "emerald-600" },
    imageStyle: { bottom: "50px" },
    animation: "updown_left",
    rotation: "-13deg",
  },
  {
    name: "Olga",
    imageSrc: "/half/Olga_half.png",
    width: 80,
    height: 80,
    position: { left: "800px", top: "60px" },
    gradient: { from: "green-200", to: "green-600" },
    imageStyle: { bottom: "59px" },
    animation: "updown_right",
    rotation: "13deg",
  },
  {
    name: "Shutima",
    imageSrc: "/half/Shutima_half.png",
    width: 100,
    height: 100,
    position: { left: "480px", top: "480px" },
    gradient: { from: "yellow-200", to: "yellow-600" },
    imageStyle: { bottom: "28px", scale: "125%" },
    animation: "updown_right",
    rotation: "13deg",
  },
  {
    name: "Charlotte",
    imageSrc: "/half/Charlotte_half.png",
    width: 90,
    height: 90,
    position: { left: "970px", top: "160px" },
    gradient: { from: "red-200", to: "red-600" },
    imageStyle: { bottom: "48px" },
    animation: "updown_right",
    rotation: "13deg",
  },
  {
    name: "Sinem",
    imageSrc: "/half/Sinem_half.png",
    width: 100,
    height: 100,
    position: { left: "980px", top: "320px" },
    gradient: { from: "orange-200", to: "orange-600" },
    imageStyle: { bottom: "34px", scale: "125%" },
    animation: "updown_left",
    rotation: "-13deg",
  },
  {
    name: "Raaj",
    imageSrc: "/half/Raaj_half.png",
    width: 100,
    height: 100,
    position: { left: "900px", top: "480px" },
    gradient: { from: "purple-200", to: "purple-600" },
    imageStyle: { bottom: "27px", scale: "150%" },
    animation: "updown_right",
    rotation: "13deg",
  },
  {
    name: "Max",
    imageSrc: "/half/Max_half.png",
    width: 90,
    height: 90,
    position: { left: "679px", top: "550px" },
    gradient: { from: "blue-200", to: "blue-600" },
    imageStyle: { bottom: "28px", scale: "150%" },
    animation: "updown_left",
    rotation: "-13deg",
  },
];
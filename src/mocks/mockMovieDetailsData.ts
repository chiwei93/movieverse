import type { MovieDetailData } from "@/types/movies";
import { mockMovieDetails } from "./mockMovieDetails";

const mockImages = [
  {
    aspect_ratio: 0.667,
    height: 2232,
    iso_639_1: "en",
    file_path: "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    vote_average: 5.91,
    vote_count: 59,
    width: 1488,
  },
  {
    aspect_ratio: 0.667,
    height: 3000,
    iso_639_1: "pt",
    file_path: "/ktU3MIeZtuEVRlMftgp0HMX2WR7.jpg",
    vote_average: 5.588,
    vote_count: 5,
    width: 2000,
  },
  {
    aspect_ratio: 0.667,
    height: 3000,
    iso_639_1: "en",
    file_path: "/iXD2VjzyXmOGJrR0Kt46IUpH3DE.jpg",
    vote_average: 5.766,
    vote_count: 10,
    width: 2000,
  },
  {
    aspect_ratio: 0.666,
    height: 1895,
    iso_639_1: "en",
    file_path: "/o4GVVFsO2RjKmHzfOKWfzN5rCkO.jpg",
    vote_average: 5.702,
    vote_count: 11,
    width: 1263,
  },
  {
    aspect_ratio: 0.667,
    height: 3000,
    iso_639_1: "es",
    file_path: "/zNKs1T0VZuJiVuhuL5GSCNkGdxf.jpg",
    vote_average: 5.642,
    vote_count: 10,
    width: 2000,
  },
  {
    aspect_ratio: 0.667,
    height: 3000,
    iso_639_1: "en",
    file_path: "/neG5yuQITkKI6QcmN3l4JbqinTF.jpg",
    vote_average: 5.558,
    vote_count: 31,
    width: 2000,
  },
  {
    aspect_ratio: 0.665,
    height: 1798,
    iso_639_1: "en",
    file_path: "/xRtJUJEohFLEWzeHaJ6fTj0ABp3.jpg",
    vote_average: 5.522,
    vote_count: 6,
    width: 1196,
  },
  {
    aspect_ratio: 0.667,
    height: 3000,
    iso_639_1: "en",
    file_path: "/tmGnbTZOlKoO6mvx2tI9dnVaY6I.jpg",
    vote_average: 5.522,
    vote_count: 6,
    width: 2000,
  },
  {
    aspect_ratio: 0.667,
    height: 3000,
    iso_639_1: "en",
    file_path: "/DqpxIIQUAS53oJDydnG76oaBsN.jpg",
    vote_average: 5.522,
    vote_count: 4,
    width: 2000,
  },
  {
    aspect_ratio: 0.667,
    height: 3000,
    iso_639_1: "en",
    file_path: "/vzsCjpeNp14cctpUEixCFlvvsE.jpg",
    vote_average: 5.522,
    vote_count: 4,
    width: 2000,
  },
  {
    aspect_ratio: 0.667,
    height: 1500,
    iso_639_1: "zh",
    file_path: "/c9aynFyISsbzZ4UvZwBUxZagqNF.jpg",
    vote_average: 5.518,
    vote_count: 12,
    width: 1000,
  },
  {
    aspect_ratio: 0.667,
    height: 3000,
    iso_639_1: "zh",
    file_path: "/8wkrSXXdgREVjK0eIXa9LwMIICg.jpg",
    vote_average: 5.514,
    vote_count: 18,
    width: 2000,
  },
  {
    aspect_ratio: 0.667,
    height: 3000,
    iso_639_1: "en",
    file_path: "/1271M5ApVaEyecaqLr7wHmrmMT3.jpg",
    vote_average: 5.456,
    vote_count: 5,
    width: 2000,
  },
  {
    aspect_ratio: 0.665,
    height: 2042,
    iso_639_1: "en",
    file_path: "/ivujxsfjTxkhaxVKq2ZSTcQl5DY.jpg",
    vote_average: 5.456,
    vote_count: 5,
    width: 1358,
  },
  {
    aspect_ratio: 0.663,
    height: 1799,
    iso_639_1: "en",
    file_path: "/yim4YzjBa9r4VReygEFsoysRci6.jpg",
    vote_average: 5.456,
    vote_count: 5,
    width: 1192,
  },
  {
    aspect_ratio: 0.666,
    height: 1727,
    iso_639_1: "en",
    file_path: "/uzNSqyEhB0Dsnmwjwslrez37jY5.jpg",
    vote_average: 5.456,
    vote_count: 5,
    width: 1151,
  },
  {
    aspect_ratio: 0.667,
    height: 3000,
    iso_639_1: "en",
    file_path: "/hHeOtZePiIs3NGhsmvfgWWltqim.jpg",
    vote_average: 5.456,
    vote_count: 7,
    width: 2000,
  },
  {
    aspect_ratio: 0.667,
    height: 1500,
    iso_639_1: "fr",
    file_path: "/ahMxyHMSJXingQr4yJBMzMU9k42.jpg",
    vote_average: 5.456,
    vote_count: 5,
    width: 1000,
  },
  {
    aspect_ratio: 0.663,
    height: 1535,
    iso_639_1: "en",
    file_path: "/nNVvqKiIFUoSTjP9rZp812uV93u.jpg",
    vote_average: 5.456,
    vote_count: 7,
    width: 1018,
  },
  {
    aspect_ratio: 0.663,
    height: 1535,
    iso_639_1: "en",
    file_path: "/g2smNHCyHsXPXYnvtx2p5eGOpyd.jpg",
    vote_average: 5.456,
    vote_count: 5,
    width: 1018,
  },
  {
    aspect_ratio: 0.667,
    height: 1920,
    iso_639_1: "en",
    file_path: "/AWzsMSC6TpawqqfUPVC8hIU7C2.jpg",
    vote_average: 5.456,
    vote_count: 5,
    width: 1280,
  },
  {
    aspect_ratio: 0.75,
    height: 1350,
    iso_639_1: "en",
    file_path: "/iXYwPxDfX2QJU7EJIV7IlUmU6j4.jpg",
    vote_average: 5.454,
    vote_count: 3,
    width: 1012,
  },
  {
    aspect_ratio: 0.75,
    height: 1350,
    iso_639_1: "en",
    file_path: "/15az8j110OMAcgblq60hRe51Zf.jpg",
    vote_average: 5.454,
    vote_count: 3,
    width: 1012,
  },
  {
    aspect_ratio: 0.667,
    height: 3000,
    iso_639_1: "en",
    file_path: "/6wgwdtwfx0uTZGcWz5k1q4xqrmM.jpg",
    vote_average: 5.454,
    vote_count: 3,
    width: 2000,
  },
  {
    aspect_ratio: 0.668,
    height: 2034,
    iso_639_1: "en",
    file_path: "/h3Y7tmkrpp1nxbGTruJL3682BO6.jpg",
    vote_average: 5.454,
    vote_count: 3,
    width: 1358,
  },
  {
    aspect_ratio: 0.661,
    height: 2056,
    iso_639_1: "en",
    file_path: "/AiQntqtXCcWqygNrASsJRWy9Xta.jpg",
    vote_average: 5.454,
    vote_count: 3,
    width: 1358,
  },
  {
    aspect_ratio: 0.659,
    height: 2061,
    iso_639_1: "en",
    file_path: "/87bDuJQdo8mvAB0CN6cFIXj0NYC.jpg",
    vote_average: 5.454,
    vote_count: 3,
    width: 1358,
  },
  {
    aspect_ratio: 0.665,
    height: 2037,
    iso_639_1: "en",
    file_path: "/n3TasWmY0zggChjaJX1RwaIfFXc.jpg",
    vote_average: 5.454,
    vote_count: 3,
    width: 1355,
  },
  {
    aspect_ratio: 0.683,
    height: 1988,
    iso_639_1: "en",
    file_path: "/9FTCK8hFIYTpq8ltvH7BCM3Zdct.jpg",
    vote_average: 5.454,
    vote_count: 3,
    width: 1357,
  },
  {
    aspect_ratio: 0.664,
    height: 2856,
    iso_639_1: "en",
    file_path: "/sibgkm1eH1JGvHegn096G4qAAmy.jpg",
    vote_average: 5.454,
    vote_count: 3,
    width: 1895,
  },
  {
    aspect_ratio: 0.696,
    height: 2560,
    iso_639_1: "bg",
    file_path: "/fs5BHO6HvWcKoA5l0WfqasnDFr6.jpg",
    vote_average: 5.454,
    vote_count: 3,
    width: 1781,
  },
  {
    aspect_ratio: 0.667,
    height: 1500,
    iso_639_1: "en",
    file_path: "/xab0iXbMeFQnIoe0Vh3MNUMeLT1.jpg",
    vote_average: 5.454,
    vote_count: 3,
    width: 1000,
  },
  {
    aspect_ratio: 0.667,
    height: 1500,
    iso_639_1: "en",
    file_path: "/n3IClfS2MrwtiIhDSUlwvji6VGp.jpg",
    vote_average: 5.454,
    vote_count: 3,
    width: 1000,
  },
  {
    aspect_ratio: 0.666,
    height: 2000,
    iso_639_1: "en",
    file_path: "/fJ5oFx0NQBZnnUYG2bnu2939gm5.jpg",
    vote_average: 5.454,
    vote_count: 3,
    width: 1333,
  },
  {
    aspect_ratio: 0.667,
    height: 1500,
    iso_639_1: "en",
    file_path: "/t60RWVyWGuoVpFTRxP3KUfbH8Vx.jpg",
    vote_average: 5.454,
    vote_count: 3,
    width: 1000,
  },
  {
    aspect_ratio: 0.667,
    height: 3000,
    iso_639_1: "en",
    file_path: "/88DWsNwXD88Zszwb2PHX3y1ITui.jpg",
    vote_average: 5.454,
    vote_count: 3,
    width: 2000,
  },
];

export const mockMovieDetailsData: MovieDetailData = {
  movie: mockMovieDetails,
  posters: mockImages,
};

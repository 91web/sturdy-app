import CourseCatalog1 from "../../../../assets/img/course1.png";
import CourseCatalog2 from "../../../../assets/img/course2.png";
import CourseCatalog3 from "../../../../assets/img/course3.png";
import CourseCatalog4 from "../../../../assets/img/course4.png";



export interface CourseType {
  id: number;
  title: string;
  description: string;
  image: string;
  instructor: {
    name: string;
    avatar?: string;
    title: string;
  };
}

export const CourseData: CourseType[] = [
  {
    id: 1,
    title: "Man-Power (for men)",
    description:
      "When the world lies on your shoulders as a man, you need the expertise and strength to...",
    image: CourseCatalog1.src,
    instructor: {
      name: "Terry Obijiuru",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Instructor",
    },
  },
  {
    id: 2,
    title: "Self Development",
    description:
      "It is established that you must become before you can plunge out running. We create the best...",
    image: CourseCatalog2.src,
    instructor: {
      name: "Terry Obijiuru",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Instructor",
    },
  },
  {
    id: 3,
    title: "Singles",
    description:
      "The level at which you embrace your single-hood and grow yourself while at it determines to a large extent...",
    image: CourseCatalog3.src,
    instructor: {
      name: "Annette Obijiuru",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Instructor",
    },
  },
  {
    id: 4,
    title: "Women",
    description:
      "In a generation where a lot more is now expected of women, you need the perfect balance in...",
    image: CourseCatalog4.src,
    instructor: {
      name: "Constance Onuoha-Osai",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Instructor",
    },
  },
];
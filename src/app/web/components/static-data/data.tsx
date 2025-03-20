import CourseCatalog1 from "../../../../assets/img/course1.png";
import CourseCatalog2 from "../../../../assets/img/course2.png";
import CourseCatalog3 from "../../../../assets/img/course3.png";
import CourseCatalog4 from "../../../../assets/img/course4.png";

//Testimonial
import Avatar1 from "../../../../assets/img/avatar1.png";
import Avatar2 from "../../../../assets/img/avatar6.png";

//Team memeber
import TeamHero1 from "../../../../assets/img/team-hero1.png";
import TeamHero2 from "../../../../assets/img/team-hero2.png";
import TeamHero3 from "../../../../assets/img/team-hero3.png";
import TeamHero4 from "../../../../assets/img/team-hero4.png";
import TeamHero5 from "../../../../assets/img/team-hero5.png";
import TeamHero6 from "../../../../assets/img/team-hero6.png";

//courses logs
export interface CourseType {
  id: string;
  title: string;
  url: string;
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
    id: "1",
    title: "Man-Power (for men)",
    url: "/components/course-details/1",
    description:
      "When the world lies on your shoulders as a man, you need the expertise and strength to...",
    image: CourseCatalog1.src,
    instructor: {
      name: "Terry Obijiuru",
      avatar: Avatar2.src,
      title: "Instructor",
    },
  },
  {
    id: "2",
    title: "Self Development",
    url: "/components/course-details/2",
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
    id: "3",
    title: "Singles",
    url: "/components/course-details/3",
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
    id: "4",
    title: "Women",
    url: "/components/course-details/4",
    description:
      "In a generation where a lot more is now expected of women, you need the perfect balance in...",
    image: CourseCatalog4.src,
    instructor: {
      name: "Constance Onuoha-Osai",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Instructor",
    },
  },
  {
    id: "5",
    title: "Women",
    url: "/components/course-details/5",
    description:
      "In a generation where a lot more is now expected of women, you need the perfect balance in...",
    image: CourseCatalog4.src,
    instructor: {
      name: "Constance Onuoha-Osai",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Instructor",
    },
  },
  {
    id: "6",
    title: "Singles",
    url: "/components/course-details/6",
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
    id: "7",
    title: "Man-Power (for men)",
    url: "/components/course-details/7",
    description:
      "When the world lies on your shoulders as a man, you need the expertise and strength to...",
    image: CourseCatalog1.src,
    instructor: {
      name: "Terry Obijiuru",
      avatar: Avatar2.src,
      title: "Instructor",
    },
  },
  {
    id: "8",
    title: "Self Development",
    url: "/components/course-details/8",
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
    id: "9",
    title: "Singles",
    url: "/components/course-details/9",
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
    id: "10",
    title: "Women",
    url: "/components/course-details/10",
    description:
      "In a generation where a lot more is now expected of women, you need the perfect balance in...",
    image: CourseCatalog4.src,
    instructor: {
      name: "Constance Onuoha-Osai",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Instructor",
    },
  },
  {
    id: "11",
    title: "Self Development",
    url: "/components/course-details/11",
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
    id: "12",
    title: "Man-Power (for men)",
    url: "/components/course-details/12",
    description:
      "When the world lies on your shoulders as a man, you need the expertise and strength to...",
    image: CourseCatalog1.src,
    instructor: {
      name: "Terry Obijiuru",
      avatar: Avatar2.src,
      title: "Instructor",
    },
  },
  {
    id: "13",
    title: "Self Development",
    url: "/components/course-details/13",
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
    id: "14",
    title: "Man-Power (for men)",
    url: "/components/course-details/14",
    description:
      "When the world lies on your shoulders as a man, you need the expertise and strength to...",
    image: CourseCatalog1.src,
    instructor: {
      name: "Terry Obijiuru",
      avatar: Avatar2.src,
      title: "Instructor",
    },
  },
  {
    id: "15",
    title: "Women",
    url: "/components/course-details/15",
    description:
      "In a generation where a lot more is now expected of women, you need the perfect balance in...",
    image: CourseCatalog4.src,
    instructor: {
      name: "Constance Onuoha-Osai",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Instructor",
    },
  },
  {
    id: "16",
    title: "Singles",
    url: "/components/course-details/16",
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
    id: "17",
    title: "Self Development",
    url: "/components/course-details/17",
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
    id: "18",
    title: "Man-Power (for men)",
    url: "/components/course-details/18",
    description:
      "When the world lies on your shoulders as a man, you need the expertise and strength to...",
    image: CourseCatalog1.src,
    instructor: {
      name: "Terry Obijiuru",
      avatar: Avatar2.src,
      title: "Instructor",
    },
  },
  {
    id: "19",
    title: "Women",
    url: "/components/course-details/19",
    description:
      "In a generation where a lot more is now expected of women, you need the perfect balance in...",
    image: CourseCatalog4.src,
    instructor: {
      name: "Constance Onuoha-Osai",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Instructor",
    },
  },
  {
    id: "20",
    title: "Singles",
    url: "/components/course-details/20",
    description:
      "The level at which you embrace your single-hood and grow yourself while at it determines to a large extent...",
    image: CourseCatalog3.src,
    instructor: {
      name: "Annette Obijiuru",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Instructor",
    },
  },
];

//Testimonial
export interface TestimonialType {
  id: string;
  name: string;
  avatar: string;
  rating: string;
  text: string;
}

export const TestimonialData: TestimonialType[] = [
  {
    id: "1",
    name: "Kambili Gold",
    avatar: Avatar1.src,
    rating: "4.5",
    text: "Lorem ipsum dolor sit amet consectetur. In vel neque euismod sem auctor tortor purus aliquam lobortis. Molestie tincidunt pellentesque malesuada dictumst nulla sed suspendisse proin.",
  },
  {
    id: "2",
    name: "Raphael Emmanuel",
    avatar: Avatar1.src,
    rating: "4.5",
    text: "Lorem ipsum dolor sit amet consectetur. In vel neque euismod sem auctor tortor purus aliquam lobortis. Molestie tincidunt pellentesque malesuada dictumst nulla sed suspendisse pron.",
  },
  {
    id: "3",
    name: "Joseph Etim",
    avatar: Avatar1.src,
    rating: "4.5",
    text: "Lorem ipsum dolor sit amet consectetur. In vel neque euismod sem auctor tortor purus aliquam lobortis. Molestie tincidunt pellentesque malesuada dictumst nulla sed suspendisse pron.",
  },
  {
    id: "4",
    name: "Jane Smith",
    avatar: Avatar1.src,
    rating: "5",
    text: "Lorem ipsum dolor sit amet consectetur. In vel neque euismod sem auctor tortor purus aliquam lobortis. Molestie tincidunt pellentesque malesuada dictumst nulla sed suspendisse pron.",
  },
];
//Team data
export interface TeamMemberType {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
}

export const TeamMemberD: TeamMemberType[] = [
  {
    id: "1",
    name: "Olivia Rhye",
    title: "Founder & CEO",
    bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    image: TeamHero1.src,
  },
  {
    id: "2",
    name: "Phoenix Baker",
    title: "Engineering Manager",
    bio: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    image: TeamHero2.src,
  },
  {
    id: "3",
    name: "Lana Steiner",
    title: "Product Manager",
    bio: "Former PM for Linear, Lambda School, and On Deck.",
    image: TeamHero3.src,
  },
  {
    id: "4",
    name: "Demi Wilkinson",
    title: "Frontend Developer",
    bio: "Former frontend dev for Linear, Coinbase, and Postscript.",
    image: TeamHero4.src,
  },
  {
    id: "5",
    name: "Candice Wu",
    title: "Backend Developer",
    bio: "Lead backend dev at Clearbit. Former Clearbit and Loom.",
    image: TeamHero5.src,
  },
  {
    id: "6",
    name: "Natali Craig",
    title: "Product Designer",
    bio: "Founding design team at Figma. Former Pleo, Stripe, and Tile.",
    image: TeamHero6.src,
  },
];

///App bar
export type NavType = {
  id: string;
  name: string;
  icon: unknown;
  active: boolean;
  url: string;
  subNav?: NavType[];
  openSub?: boolean;
};

export const DicclNavData: NavType[] = [
  {
    id: "1",
    name: "home",
    icon: "",
    active: true,
    url: "/",
  },
  {
    id: "2",
    name: "about us",
    icon: "",
    active: false,
    url: "/web/about-us",
  },
  {
    id: "3",
    name: "courses",
    icon: "",
    active: false,
    url: "/web/courses",
  },

  {
    id: "4",
    name: "Contact Us",
    icon: "",
    active: false,
    url: "/home/contact-us",
  },
];

import CourseCatalog1 from "../../../../assets/img/course1.png";
import CourseCatalog2 from "../../../../assets/img/course2.png";
import CourseCatalog3 from "../../../../assets/img/course3.png";
import CourseCatalog4 from "../../../../assets/img/course4.png";

//Testimonial
import Avatar1 from "../../../../assets/img/avatar1.png";


//Team memeber 
import TeamHero1 from "../../../../assets/img/team-hero1.png";
import TeamHero2 from "../../../../assets/img/team-hero2.png";
import TeamHero3 from "../../../../assets/img/team-hero3.png";
import TeamHero4 from "../../../../assets/img/team-hero4.png";
import TeamHero5 from "../../../../assets/img/team-hero5.png";
import TeamHero6 from "../../../../assets/img/team-hero6.png";


export interface CourseType {
  id: string;
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
    id: "1",
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
    id: "2",
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
    id: "3",
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
    id: "4",
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
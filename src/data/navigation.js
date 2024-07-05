import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaEarthAsia } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWorkOutline } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
export const navigation = [
  {
    id: 1,
    title: "Home",
    route: "#homepage",
    icon: <GoHome className="size-8" />,
  },
  {
    id: 2,
    title: "About",
    route: "#aboutpage",
    icon: <CgProfile className="size-8" />,
  },
  {
    id: 3,
    title: "Service",
    route: "#servicepage",
    icon: <MdOutlineDesignServices className="size-8" />,
  },
  {
    id: 4,
    title: "Work",
    route: "#workpage",
    icon: <MdOutlineWorkOutline className="size-8" />,
  },
  {
    id: 5,
    title: "Contact",
    route: "#contactpage",
    icon: <MdOutlineMailOutline className="size-8" />,
  },
];

//TODO: create link to href individualy
const whatsappNumber = 916296328842;
const whatsappMessage = "Hi,Titas Ghosh";
export const socialIcon = [
  { id: 1, href: "/", lable: "phone", icon: <FaPhone /> },
  {
    id: 2,
    href: `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`,
    lable: "whatsapp",
    icon: <FaWhatsapp />,
  },
  { id: 3, href: "/", lable: "location", icon: <FaLocationDot /> },
  {
    id: 4,
    href: "mailto:info.titasghosh@gmail.com",
    lable: "email",
    icon: <MdEmail />,
  },
  {
    id: 5,
    href: "/",
    lable: "website",
    icon: <FaEarthAsia />,
  },
];

import { FaWhatsappSquare } from "react-icons/fa";
import { FaSms } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export const DEFAULT_URL = "https://ngt-agency-website.vercel.app/";
export const ShareOptions = [
  {
    id: 1,
    label: "WhatsApp",
    icon: <FaWhatsappSquare className="size-full rounded text-green-500" />,
    url: `https://api.whatsapp.com/send?text=${DEFAULT_URL}`,
  },
  {
    id: 2,
    label: "SMS",
    icon: <FaSms className="size-full text-red-500" />,
    url: `sms:?body=${DEFAULT_URL}`,
  },
  {
    id: 3,
    label: "Facebook",
    icon: <FaFacebookSquare className="size-full text-blue-500" />,
    url: `https://www.facebook.com/sharer/sharer.php?u=${DEFAULT_URL}`,
  },
  {
    id: 4,
    label: "X",
    icon: <FaXTwitter className="size-full" />,
    url: `https://twitter.com/intent/tweet?text=${DEFAULT_URL}`,
  },
  {
    id: 5,
    label: "Instragram",
    icon: <FaSquareInstagram className="size-full text-pink-500" />,
    url: "",
  },
  {
    id: 6,
    label: "LinkedIn",
    icon: <FaLinkedin className="size-full text-blue-700" />,
    url: `https://www.linkedin.com/cws/share?url=${DEFAULT_URL}`,
  },
];

const number_1 = "6296328842";
const number_2 = "6296328842";
const email = "info@ngtsoftware.com";
const location = "location,via";
export const ContactTile = [
  { id: 1, icon: <FaPhone className="size-5" />, contact: number_1, url: "" },
  { id: 2, icon: <FaPhone className="size-5" />, contact: number_2, url: "" },
  { id: 3, icon: <MdEmail className="size-5" />, contact: email, url: "" },
  {
    id: 4,
    icon: <FaLocationDot className="size-5" />,
    contact: location,
    url: "",
  },
];

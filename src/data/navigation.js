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
const whatsappMessage = 'Hi,Titas Ghosh'
export const socialIcon = [
  { id: 1, href: "/", lable: "phone", icon: <FaPhone /> },
  {
    id: 2,
    href: `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`,
    lable: "whatsapp",
    icon: <FaWhatsapp />,
  },
  { id: 3, href: "/", lable: "location", icon: <FaLocationDot /> },
  { id: 4, href: "mailto:info.titasghosh@gmail.com", lable: "email", icon: <MdEmail /> },
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

export const ShareOptions = [
  {
    id: 1,
    label: "WhatsApp",
    icon: <FaWhatsappSquare className="size-full rounded text-green-500" />,
    url: "",
  },
  {
    id: 2,
    label: "SMS",
    icon: <FaSms className="size-full text-red-500" />,
    url: "",
  },
  {
    id: 3,
    label: "Facebook",
    icon: <FaFacebookSquare className="size-full text-blue-500" />,
    url: "",
  },
  { id: 4, label: "X", icon: <FaXTwitter className="size-full" />, url: "" },
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
    url: "",
  },
];

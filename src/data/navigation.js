import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaEarthAsia } from "react-icons/fa6";

export const navigation = [
  { id: 1, title: "Home", route: "/" },
  { id: 2, title: "About", route: "/" },
  { id: 3, title: "Work", route: "/" },
  { id: 4, title: "Contact", route: "/" },
];

export const socialIcon = [
  { id: 1, lable: "phone", icon: <FaPhone /> },
  { id: 2, lable: "whatsapp", icon: <FaWhatsapp /> },
  { id: 3, lable: "location", icon: <FaLocationDot /> },
  { id: 4, lable: "email", icon: <MdEmail /> },
  { id: 5, lable: "website", icon: <FaEarthAsia /> },
];

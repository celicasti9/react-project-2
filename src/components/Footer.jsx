import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative bottom-0 w-full bg-white flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
      <li>
          <Link to="/about">
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              2024 Yunque 92.9 FM
            </Typography>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </Link>
        </li>
        <li>
          <Link to="/contactus">
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

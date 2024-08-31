import { Link } from "react-router-dom";

const pages = [
  {
    title: "Home",
    destination: "/",
  },
  {
    title: "About",
    destination: "/about",
  },
  {
    title: "Menu",
    destination: "/menu",
  },
  {
    title: "Content",
    destination: "/content",
  },
];

const Nav = () => {
  return (
    <nav className="flex items-center justify-center gap-1">
      {pages.map((page) => (
        <Link key={page.destination} to={page.destination} className="text-white bg-black p-0 hover:bg-modernDolchLight-error-color hover:text-black rounded-sm transition-all duration-50 ease-in-out">
          {page.title}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
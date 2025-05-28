import { links } from "../data";
const Navbar = () => {
  return (
    <nav className="bg-rose-100 ">
      <div className="align-element py-4 flex flex-col gap-y-2 items-center sm:flex-row sm:gap-x-16 sm:items-center sm:justify-between sm:py-8">
        <h2 className="text-3xl font-bold">
          Duru
          <span className="text-rose-600">Bhuru</span>
        </h2>
        <div className="flex gap-x-10">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:text-rose-600 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

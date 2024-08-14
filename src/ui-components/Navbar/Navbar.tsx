import { NavItem } from "./NavItem";

export const Navbar = () => {
  return (
    <header className="w-full p-2 duration-300">
      <nav
        aria-label="Main navigation"
        className="relative flex items-center justify-between w-full"
      >
        {/* <TitleLogo
          type="navbar"
          scrolledHalf={scrolledHalf}
          onClick={() => window.scrollTo(0, 0)}
        /> */}
        <ul className="flex items-center justify-end gap-3 font-bold tracking-widest">
          <NavItem href="#about">About</NavItem>
          <NavItem href="#services">Services</NavItem>
          <NavItem href="#booking">Booking</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </ul>
      </nav>
    </header>
  );
};

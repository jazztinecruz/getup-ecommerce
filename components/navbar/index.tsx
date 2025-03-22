import { Input } from "@heroui/react";
import Button from "../button";
import Logo from "../logo";
import Categories from "./categories";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";

const Navbar = () => {
  return (
    <nav className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <Logo />
        <div className="flex items-center gap-3">
          <Button intent="outline" className="hidden lg:block">Contact Sales</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 md:-mt-4">
        <Categories />
        <div className="grid grid-cols-[1fr,auto] items-center gap-3 w-full md:w-auto">
          <Input label="Search" type="search" className="w-full md:min-w-96" />
          <Button isIconOnly intent="outline">
            <ShoppingCartIcon className="text-black size-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

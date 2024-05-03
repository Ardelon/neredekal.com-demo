import Link from "next/link";
import { Button, Input } from "../uiKit";

const Header = () => {
  return (
    <header className="flex w-4/5 m-auto justify-around items-center">
      <Link href="/pokemon?page=1">
        <img className="w-64" src="/pokemon.png" alt="" />
      </Link>
      <div className="flex flex-row border-2 border-[#3865d2] rounded-xl items-center w-3/5 h-2/5">
        <img className="px-4" src={"/Vector.png"} />
        <Input />
        <Button />
      </div>
      {/* <h1></h1> */}
      <nav>
        {/* <Link href="/pokemon">Pokedex</Link> */}
        {/* <Link href="/pokemon">Pokemon</Link> */}
      </nav>
    </header>
  );
};

export default Header;

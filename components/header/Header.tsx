import Link from "next/link";

const Header = () => {
  return (
    <header>
      <h1>Header</h1>
      <nav>
        <Link href="/">Home Page</Link>
        <Link href="/pokemon">Pokemon</Link>
      </nav>
    </header>
  );
};

export default Header;

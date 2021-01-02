import layout from "./layout.module.css";
import Link from "next/link";

export default function navbar() {
  return (
    <>
      <nav className={layout.nav}>
        <div className={layout.navItems}>
          <Link href="/">Home</Link>
        </div>
        <div className={layout.navItems}>
          <Link href="//blog.amaan.codes">Blog</Link>
        </div>
        <div className={layout.navItems}>
          <Link href="/about">About</Link>
        </div>
        <div className={layout.navItems}>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </>
  );
}

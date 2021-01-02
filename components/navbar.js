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
          <Link href="/">Projects</Link>
        </div>
        <div className={layout.navItems}>
          <Link href="/">About</Link>
        </div>
        <div className={layout.navItems}>
          <Link href="/">Contact</Link>
        </div>
      </nav>
    </>
  );
}

import layout from "./layout.module.css";
export default function navbar() {
  return (
    <>
      <nav className={layout.nav}>
        <div className={layout.navItems}>Home</div>
        <div className={layout.navItems}>Projects</div>
        <div className={layout.navItems}>About</div>
        <div className={layout.navItems}>Contact</div>
      </nav>
    </>
  );
}

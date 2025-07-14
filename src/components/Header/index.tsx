"use client";
import style from "./index.module.scss";
import Image from "next/image";
import icon from "@/assets/logo.png";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  const getNavItemClass = (path: string) => {
    const isActive = pathname === path;
    return `${style.navItem} ${isActive ? style.navItemActive : ""}`;
  };

  return (
    <div className={style.container}>
      <div className={style.logo}>
        <Image
          src={icon}
          alt="logo"
          width={70}
          height={70}
          className={style.logImage}
        />
      </div>
      <nav className={style.nav}>
        <ul className={style.navList}>
          <li className={getNavItemClass("/")}>Home</li>
          <li className={getNavItemClass("/about")}>About</li>
          <li className={getNavItemClass("/post")}>Post</li>
        </ul>
      </nav>
    </div>
  );
};

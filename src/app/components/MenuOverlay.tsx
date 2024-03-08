import NavLink from "./NavLink";


type NavType = {
  title: string,
  path: string
}

  const navLinks: NavType[] = [
    { title: 'about', path: '/about' },
    { title: 'project', path: '/projects' },
    { title: 'contact', path: '/contactme' },
  ];

export default function MenuOverlay() {
  return (
    <ul className="w-full items-center md:hidden flex flex-col bg-opacity-100 bg-transparent z-10">
         {navLinks.map((navlink, i) => (
        <NavLink href={navlink.path} title={navlink.title}  key={i}/>
      
    ))}

    </ul>
   
  )
}

import Link from "next/link";
import Image from "next/image";
import Logo from "./Avatar.jpg"


const Navbar = () => {
    return ( 
        <nav>
          <Image
          src={Logo}
          alt="Andres"
          width={50}
          height={50}
          />
          <h1>Andres Helpdesk</h1>
          <Link href="/">Home</Link>
          <Link href="/tickets">Tickets</Link>
        </nav>
     );
}
 
export default Navbar;
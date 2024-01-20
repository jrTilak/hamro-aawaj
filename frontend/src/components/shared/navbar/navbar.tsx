import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { shadows } from "@/assets/constants/styles";
import { useGlobalContext } from "@/hooks/use-global-context";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    const { user } = useGlobalContext();
  return (
    <nav
      className={cn(
        "flex items-center justify-between px-20 py-4 w-screen z-50",
        shadows.sm
      )}
    >
      <Link to="/">
        <img
          src="https://www.svgrepo.com/show/427113/grid.svg"
          alt=""
          className="w-10 h-10"
        />
      </Link>
      <span
        className="text-2xl font-bold text-gray-700"
        style={{ fontFamily: "'Xanh Mono', monospace" }}
      >
        HAMRO AAWAJ
      </span>
      <div className="flex items-center gap-4">
        {!user?._id ? (
          <Link to="/login">
            <Button variant="secondary" className="px-6">
              Login
            </Button>
          </Link>
        ) : (
          <Link to="/profile">
            <img src={user.profileImg} className="w-10 h-10 rounded-full origin-center object-cover" />
          </Link>
        )}
      </div>
    </nav>
  );
};
export default Navbar;

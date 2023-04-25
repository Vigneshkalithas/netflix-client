import { useNavigate, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

export function Layout() {
  //   const { user, userRole, isAuthenticated } = useContext(MyContext);
  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     if (!user) {
  //       navigate("/login");
  //     }
  //   }, []);
  return (
    <div className="App-child">
      <div className="top-nav">
        <div>
          <Navbar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

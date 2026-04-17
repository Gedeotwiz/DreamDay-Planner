import Auth from "../../components/auth"
import { useLocation } from "react-router-dom";

const Authantication = () => {
  const location = useLocation();
  const path = location.pathname.replace("/", "");

  return <Auth pathUrl={path} />;
};
export default Authantication
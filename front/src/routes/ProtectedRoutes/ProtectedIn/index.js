import { useNavigate,Outlet } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { useEffect } from "react";

export const ProtectedIn = () => {
  const { user, verify } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await verify(user.accessToken);
        if (response.data.success) {
          navigate('/');
        }
      } catch (error) {
        navigate("/sign-in");
      }
    };

    if (user) {
      checkAuthentication();
    } 
  }, [user, verify, navigate]);


  return <Outlet/>;
};
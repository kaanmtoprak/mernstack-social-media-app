import { useNavigate, Navigate,Outlet } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { useEffect } from "react";
import { Header, Sidebar } from "../../../components";

export const ProtectedOut = () => {
  const { user, verify } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await verify(user.accessToken);
        if (!response.data.success) {
          navigate('/sign-in');
        }
      } catch (error) {
        navigate("/sign-in");
      }
    };

    if (user) {
      checkAuthentication();
    } else {
      navigate('/sign-in');
    }
  }, [user, verify, navigate]);

  if (!user) {
    return <Navigate to="/sign-in" replace={true} />;
  }

  return (
    <div className="layout">
          <Header/>
          <Sidebar/>
          <main>
            <Outlet/>
          </main>
    </div>
  );
};
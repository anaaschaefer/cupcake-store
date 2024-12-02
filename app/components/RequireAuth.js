import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useRouter } from "expo-router";

export default function RequireAuth({ children, userType }) {
  const { user, loading } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!user || user.userType !== userType)) {
      router.replace("screens/inicio");
    }
  }, [loading, user, userType]);

  if (loading) {
    return null;
  }

  return children;
}

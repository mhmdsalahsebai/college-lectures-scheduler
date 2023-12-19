"use client";
import { useEffect, useState } from "react";

export function useAuth() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleAuthorization = (value) => {
    setIsAuthorized(value);
  };

  const checkIfUserAuthenticated = async () => {
    const res = await fetch("/api/verify", {
      method: "GET",
    });
    const data = await res.json();
    
    setIsAuthorized(data.isAuthorized);
    setLoading(false);
  };
  useEffect(() => {
    checkIfUserAuthenticated();
  }, []);

  return { isAuthorized, loading, handleAuthorization };
}

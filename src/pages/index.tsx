import { useEffect } from "react";
import { useHistory } from "@docusaurus/router";

export default function Home() {
  const history = useHistory();

  useEffect(() => {
    history.replace("/docs/welcome"); // <-- Replace with your actual docs path
  }, [history]);

  return null;
}

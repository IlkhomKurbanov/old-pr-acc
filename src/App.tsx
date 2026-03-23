import { useLayoutEffect, useMemo } from "react";

const REDIRECT_URL =
  import.meta.env.VITE_REDIRECT_URL || "https://kabinet.aba-doma.ru";
const PRESERVE_PATH = import.meta.env.VITE_PRESERVE_PATH === "true";

function buildTargetUrl() {
  const targetUrl = new URL(REDIRECT_URL);

  if (PRESERVE_PATH) {
    targetUrl.pathname = window.location.pathname || "/";
  }

  targetUrl.search = window.location.search;
  targetUrl.hash = window.location.hash;

  return targetUrl.toString();
}

export default function App() {
  const targetUrl = useMemo(buildTargetUrl, []);

  useLayoutEffect(() => {
    window.location.replace(targetUrl);
  }, [targetUrl]);

  return (
    <main className="app">
      <div className="card">
        <p className="eyebrow">Old Private Account</p>
        <h1>Личный кабинет переехал на навой адрес. Перенаправляем вас туда</h1>
        <p className="copy">
          This old address has moved. If you are not redirected automatically,
          use the button below.
        </p>
        <a className="button" href={targetUrl}>
          Continue to the new site
        </a>
      </div>
    </main>
  );
}

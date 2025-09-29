import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("🚨 ERROR: User attempted to access non-existent route:", location.pathname);
    console.error("Available routes: /, /about, /services, /contact");
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <div className="text-8xl mb-4">🔍</div>
        <h1 className="mb-4 text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <p className="mb-8 text-sm text-muted-foreground">The page you're looking for doesn't exist.</p>
        <a href="/" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-gradient-primary hover:shadow-glow">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

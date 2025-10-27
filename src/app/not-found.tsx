import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-20">
        404 - Page Not Found
      </h1>
      <p className="text-center mt-4 text-white/60">
        The page you are looking for does not exist.
      </p>
      <div className="flex justify-center mt-8">
        <a href="/" className="text-accent hover:underline">
          Go back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

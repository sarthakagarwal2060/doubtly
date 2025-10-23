import React from "react";
import { AlertTriangle, ArrowLeft, Home } from "lucide-react";
import { Button } from "@radix-ui/themes"

function NotFound() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-4 ">
        <div className="max-w-lg w-full bg-white/80 rounded-lg p-8 text-center dark:bg-gray-800">
          <div className="flex justify-center mb-6">
            <AlertTriangle className="h-16 w-16" />
          </div>

          <h1 className="text-5xl font-bold mb-2">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>

          <p className="mb-8">
            We couldn't find the page you're looking for. The page may have been
            moved, deleted, or never existed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="gap-2" color="blue" onClick={() => window.history.back()}>
              <ArrowLeft className="h-4 w-4" />Go Back
            </Button>

            <Button variant="outline" color="blue" className="gap-2" onClick={() => (window.location.href = "/")}>
              <Home className="h-4 w-4" />Return Home
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;

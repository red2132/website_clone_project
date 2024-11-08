"use client";

import { useState } from "react";
import SignUp from "./sign-up";
import SignIn from "./sigin-in";

export default function Auth() {
  const [view, setView] = useState("SIGNIN");
  return (
    <main className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-purple-50 to-light-blue-50">
      {view === "SIGNUP" ? (
        <SignUp setView={setView} />
      ) : (
        <SignIn setView={setView} />
      )}
    </main>
  );
}
import { Input, Button } from "@material-tailwind/react";
import { useState } from "react";
import { createBrowserSupabaseClient } from "utils/supabase/client";

export default function SignIn({ setView }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const supabase = createBrowserSupabaseClient();
  const signWithKakao = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "kakao",
      options: {
        redirectTo: process.env.NEXT_PUBLIC_VERCEL_URL
          ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/auth/callback`
          : "https://instagram-clone-project-one.vercel.app/auth/callback",
      },
    });
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="pt-10 pb-6 px-10 w-full flex flex-col items-center justify-center max-w-lg border border-gray-400 bg-white gap-2">
        <img src={`/images/inflearngram.png`} className="w-60 mb-6" />
        {/* <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="email"
          type="email"
          className="w-full rounded-sm"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="password"
          type="password"
          className="w-full rounded-sm"
        />
        <Button
          onClick={() => {
            console.log("sign in");
          }}
          color="light-blue"
          className="w-full text-md py-1"
        >
          로그인
        </Button> */}
        <button onClick={() => signWithKakao()}>
          <img
            src={`/images/kakao_login_medium_narrow.png`}
            className="w-full text-md py-1"
          />
        </button>
      </div>
      {/* <div className="py-4 w-full text-center max-w-lg border border-gray-400 bg-white">
        아직 계정이 없으신가요?{" "}
        <button
          className="text-light-blue-600 font-bold"
          onClick={() => setView("SIGNUP")}
        >
          가입하기
        </button>
      </div> */}
    </div>
  );
}

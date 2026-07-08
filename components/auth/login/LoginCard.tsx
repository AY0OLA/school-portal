import LoginForm from "./LoginForm";
import { GraduationCap } from "lucide-react";
import Greeting from "./Greeting";

export default function LoginCard() {
  return (
    <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-10 shadow-xl">
      <div className="mb-6 text-center items-center flex flex-col justify-between">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
          <GraduationCap className="h-8 w-8 text-white" />
        </div>
        <Greeting />
      </div>

      <div className="mt-8">
        <LoginForm />
      </div>
    </div>
  );
}

import LoginForm from "./LoginForm";
import { GraduationCap } from "lucide-react";
import Greeting from "./Greeting";

export default function LoginCard() {
  return (
    <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-10 shadow-xl">
      <div className="mb-6 flex justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
          <GraduationCap className="h-8 w-8 text-white" />
        </div>
      </div>
      <Greeting />

      <div className="mt-8">
        <LoginForm />
      </div>
    </div>
  );
}

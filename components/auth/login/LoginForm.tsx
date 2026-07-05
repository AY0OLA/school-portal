"use client";

import { useState } from "react";
import Link from "next/link";
import PasswordInput from "./PasswordInput";
import RememberMe from "./RememberMe";
import { toast } from "sonner";
import { motion } from "motion/react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email or admission number.");
      return;
    }

    if (!password.trim()) {
      toast.error("Please enter your password.");
      return;
    }

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success("Login successful!");

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Email */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Email / Admission Number
        </label>

        <input
          type="text"
          placeholder="Enter your email or admission number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <PasswordInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="flex items-center justify-between">
        <RememberMe checked={remember} onChange={setRemember} />

        <Link
          href="/forgot-password"
          className="text-sm font-medium text-primary hover:underline"
        >
          Forgot Password?
        </Link>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-primary py-3 font-semibold text-white"
      >
        {loading ? "Signing In..." : "Sign In"}
      </motion.button>
    </form>
  );
}

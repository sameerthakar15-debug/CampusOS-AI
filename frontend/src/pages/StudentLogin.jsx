import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Eye, EyeOff, GraduationCap, Lock, Mail } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import Input from "../components/common/Input";

function Login({ onBack, onLogin }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,_#EAF2FF_0%,_#F7F9FF_60%,_#EDF7FF_100%)]">
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-400/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-purple-400/20 blur-[140px]" />

      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 py-10 lg:grid-cols-[0.95fr_0.95fr] lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-[#2563EB] p-5 shadow-xl">
              <GraduationCap className="text-white" size={40} />
            </div>
            <h1 className="text-5xl font-extrabold text-[#111827] sm:text-6xl">
              CampusOS.AI
            </h1>
          </div>

          <h2 className="mt-8 text-3xl font-semibold leading-relaxed text-[#111827]">
            The AI operating system
            <br />
            for modern campuses.
          </h2>

          <div className="mt-8 h-1 w-44 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED]" />

          <p className="mt-8 max-w-xl text-lg leading-8 text-[#6B7280]">
            Experience an intelligent campus ecosystem powered by AI. Manage
            academics, placements, attendance, study planning, and productivity
            from one unified platform.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <Card className="border-[#E5E7EB]/80 p-8 shadow-[0_30px_90px_-20px_rgba(37,99,235,0.24)] sm:p-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
                  Student portal
                </p>
                <h2 className="mt-2 text-3xl font-bold text-[#111827]">
                  Welcome back 👋
                </h2>
              </div>
              <button
                type="button"
                onClick={onBack}
                className="flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-3 py-2 text-sm font-medium text-[#6B7280] transition hover:border-[#2563EB] hover:text-[#2563EB]"
              >
                <ArrowLeft size={16} />
                Back
              </button>
            </div>

            <p className="mt-4 text-[#6B7280]">
              Login to continue to CampusOS.AI.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-[#111827]">
                  College Email
                </label>
                <Input
                  type="email"
                  placeholder="you@college.edu"
                  icon={Mail}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#111827]">
                  Password
                </label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    icon={Lock}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] transition hover:text-[#2563EB]"
                  >
                    {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-3 flex justify-end">
              <button className="text-sm font-medium text-[#2563EB] transition hover:underline">
                Forgot Password?
              </button>
            </div>

            <Button onClick={onLogin} className="mt-8 w-full">
              Login
            </Button>

            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-[#E5E7EB]" />
              <span className="px-4 text-sm text-[#6B7280]">OR</span>
              <div className="flex-1 border-t border-[#E5E7EB]" />
            </div>

            <Button variant="secondary" className="w-full gap-3">
              <FcGoogle size={22} />
              Continue with Google
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

export default Login;
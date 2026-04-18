"use client";
import { useState } from "react";
import Image from "next/image";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  );
  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setApiError("");
    setLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ نجاح
        localStorage.setItem("token", data.token);
        setUser(data.user);

        console.log("Logged in successfully");
      } else {
        setApiError(data.message || "Invalid credentials");
      }
    } catch (err) {
      setApiError("Server error, try again later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-aos="fade-down">
      <main className="min-h-screen flex items-center justify-center px-4 py-20 bg-[#0b0f14]">
        <div className="w-full max-w-5xl flex flex-col md:flex-row rounded-2xl overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5 shadow-[0_0_10px_rgba(0,255,255,0.08)]">
          <div className="relative w-full md:w-1/2 h-72 md:h-auto group overflow-hidden">
            <Image
              width={500}
              height={500}
              alt=""
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqRxEueIT-rZLCkB0VVhhKO0kNceBm_2_0nr0xZmae2qFjM9IJlomjFJIvIQt60mpX-Ysdri5kQiX4J2SbZr3nxYbcXyCytYrbFT6mrW1Ztn8uak45gk-k8IeiWFPHoly53I7sfOhx3ocRTLp2OhTGXh-EVNUXN06fHpLiuXcQfjRvOQHStdD6Q5UfOQuO6xAb0HdWjYiY0CrES-pig_7rXL_ITYP5UvEwd63QAXDK-dIEy3NKcvlTanINwj9E2NBBqdBwPw41J-4"
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent md:bg-linear-to-r"></div>
            <div className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay"></div>

            <div className="absolute bottom-10 left-10 right-10">
              <h1 className="text-[clamp(1.8rem,5vw,3.5rem)] font-black text-white leading-tight">
                {" "}
                THE FUTURE IS{" "}
                <span className="text-cyan-400 italic">
                  Digtial Task Phone.
                </span>
              </h1>
              <p className="text-xs tracking-[0.2em] text-white/50 uppercase mt-2">
                Precision Engineered Core Access
              </p>
            </div>

            <div className="absolute top-6 left-6 w-10 h-px bg-cyan-400/40"></div>
            <div className="absolute top-6 left-6 h-10 w-px bg-cyan-400/40"></div>
          </div>

          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="flex gap-8 mb-10 border-b border-white/10">
              <button className="pb-4 text-cyan-400 cursor-pointer border-b-2 border-cyan-400 font-bold">
                Login
              </button>
              <button className="pb-4 duration-300 transform text-white/40 cursor-pointer hover:text-white">
                Register
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder=" "
                  className="peer w-full bg-white/5 border border-white/10 rounded-lg px-4 pt-6 pb-2 text-white focus:outline-none focus:border-cyan-400"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
                <label className="absolute left-4 top-2 text-xs text-cyan-400">
                  Email Address
                </label>
              </div>

              <div className="relative">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder=" "
                  className="peer w-full bg-white/5 border border-white/10 rounded-lg px-4 pt-6 pb-2 text-white focus:outline-none focus:border-cyan-400"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
                <label className="absolute left-4 top-2 text-xs text-cyan-400">
                  Secure Password
                </label>
              </div>

              <div className="flex justify-between text-xs text-white/60">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" />
                  Keep me signed in
                </label>
                <a href="#" className="text-cyan-400 cursor-pointer">
                  Forgot Password?
                </a>
              </div>
              {apiError && <p className="text-red-500 text-sm">{apiError}</p>}
              <button
                disabled={loading}
                className="w-full py-4 cursor-pointer rounded-full text-black font-bold tracking-widest uppercase bg-linear-to-r from-cyan-400 to-cyan-600 shadow-[0_0_10px_rgba(0,255,255,0.6)] hover:scale-[1.02] active:scale-95 transition duration-300"
              >
                {loading ? "LOADING..." : "ACCESS CORE"}
              </button>

              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-white/10"></div>
                <span className="text-xs text-white/40">OR CONNECT VIA</span>
                <div className="flex-1 h-px bg-white/10"></div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <button className="py-3 bg-white/5 border cursor-pointer  border-white/10 rounded-xl hover:bg-white/10 transition duration-300">
                  G
                </button>
                <button className="py-3 cursor-pointer duration-300 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition">
                  iOS
                </button>
                <button className="py-3 bg-white/5 border cursor-pointer duration-300 border-white/10 rounded-xl hover:bg-white/10 transition">
                  🔒
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;

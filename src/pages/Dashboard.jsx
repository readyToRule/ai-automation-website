
import {
  Bot,
  MessageSquare,
  Users,
  BarChart3,
  LogOut,
  ArrowRight,
} from "lucide-react";

import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/");
  }

  const cards = [
    {
      title: "WhatsApp Bot",
      desc: "Manage AI chatbot replies and automation workflows.",
      icon: <MessageSquare className="w-8 h-8 text-cyan-400" />,
    },
    {
      title: "AI Agents",
      desc: "Create AI assistants for customer support and lead handling.",
      icon: <Bot className="w-8 h-8 text-cyan-400" />,
    },
    {
      title: "Leads",
      desc: "Track customer leads and automation requests.",
      icon: <Users className="w-8 h-8 text-cyan-400" />,
    },
    {
      title: "Analytics",
      desc: "Monitor automation performance and response metrics.",
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">
              AutoMind AI Dashboard
            </h1>

            <p className="text-slate-400 mt-1">
              Manage your AI automations
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-cyan-400 text-slate-950 px-5 py-3 rounded-full font-bold hover:bg-cyan-300 transition"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-10">
          <h2 className="text-5xl font-black mb-4">
            Welcome Back 👋
          </h2>

          <p className="text-lg text-white/90 max-w-2xl">
            Build, manage, and scale your AI automation systems from one place.
          </p>

          <button className="mt-8 bg-slate-950 text-white px-6 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:bg-slate-800">
            Create Automation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-slate-900 border border-white/10 rounded-3xl p-6 hover:border-cyan-400 transition"
            >
              <div className="mb-5">{card.icon}</div>

              <h3 className="text-2xl font-bold mb-3">
                {card.title}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


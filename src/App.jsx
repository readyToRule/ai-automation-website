import React from "react";
import {
  Bot,
  Workflow,
  MessageSquare,
  Zap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

import { Routes, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import FSDGenerator from "./pages/FSDGenerator";
import WorkflowAutomation from "./pages/WorkflowAutomation";
import TestCaseGenerator from "./pages/TestCaseGenerator";  

function HomePage() {
  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Chatbots",
      desc: "Smart chatbots for websites, WhatsApp, and customer support to answer queries 24/7.",
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Workflow Automation",
      desc: "Automate repetitive business tasks like FSD creation, test cases, reports, approvals, and documentation.",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "CRM & Sales Automation",
      desc: "Automate lead capture, customer tracking, email follow-ups, and sales pipelines.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Integration",
      desc: "Integrate AI tools with your existing apps, websites, forms, databases, and dashboards.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-cyan-400 flex items-center justify-center text-slate-950 font-bold">
              AI
            </div>
            <span className="text-xl font-bold">AutoMind AI</span>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-slate-300">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <div className="flex gap-4 items-center">
            <Link
              to="/login"
              className="text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white/10"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-cyan-400 text-slate-950 px-5 py-2 rounded-full font-semibold hover:bg-cyan-300"
            >
              Register
            </Link>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-cyan-400 font-semibold mb-4">
            AI Automation Agency
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Automate your business with powerful AI solutions
          </h1>

          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            We help businesses save time, reduce manual work, improve customer
            response, and grow faster using AI chatbots, workflow automation,
            and smart integrations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-cyan-400 text-slate-950 px-7 py-4 rounded-full font-bold inline-flex items-center justify-center gap-2 hover:bg-cyan-300"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#services"
              className="border border-white/20 px-7 py-4 rounded-full font-bold inline-flex items-center justify-center hover:bg-white/10"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="bg-white/10 border border-white/10 rounded-3xl p-8 shadow-2xl">
          <div className="grid gap-4">
            {[
              "Lead response automation",
              "AI customer support",
              "WhatsApp chatbot",
              "FSD document generator",
              "CRM workflow setup",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-slate-900 rounded-2xl p-4"
              >
                <CheckCircle className="w-6 h-6 text-cyan-400" />
                <span className="text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Our AI Automation Services
            </h2>

            <p className="text-slate-300 max-w-2xl mx-auto">
              Practical automation solutions for small businesses, startups,
              agencies, and service-based companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-slate-950 border border-white/10 rounded-3xl p-7 min-h-[250px] flex flex-col justify-between hover:border-cyan-400 hover:scale-105 transition"
              >
                <div>
                  <div className="text-cyan-400 mb-6">{service.icon}</div>

                  <h3 className="text-2xl font-bold mb-4">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-slate-400">
        © 2026 AutoMind AI. All rights reserved.
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/fsd-generator" element={<FSDGenerator />} />
      <Route path="/workflow-automation" element={<WorkflowAutomation />} />
      {/* ADDED THE MISSING ROUTE HERE: */}
      <Route path="/test-case-generator" element={<TestCaseGenerator />} />
    </Routes>
  );
}
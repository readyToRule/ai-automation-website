import React from "react";
import { Bot, Workflow, MessageSquare, Zap, ShieldCheck, ArrowRight, CheckCircle } from "lucide-react";

export default function AIAutomationWebsite() {
  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Chatbots",
      desc: "Smart chatbots for websites, WhatsApp, and customer support to answer queries 24/7."
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Workflow Automation",
      desc: "Automate repetitive business tasks like lead handling, follow-ups, reports, and approvals."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "CRM & Sales Automation",
      desc: "Automate lead capture, customer tracking, email follow-ups, and sales pipelines."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Integration",
      desc: "Integrate AI tools with your existing apps, websites, forms, databases, and dashboards."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-cyan-400 flex items-center justify-center text-slate-950 font-bold">AI</div>
            <span className="text-xl font-bold">AutoMind AI</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm text-slate-300">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="bg-cyan-400 text-slate-950 px-5 py-2 rounded-full font-semibold hover:bg-cyan-300">
            Get Started
          </a>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-cyan-400 font-semibold mb-4">AI Automation Agency</p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Automate your business with powerful AI solutions
          </h1>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            We help businesses save time, reduce manual work, improve customer response, and grow faster using AI chatbots, workflow automation, and smart integrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-cyan-400 text-slate-950 px-7 py-4 rounded-full font-bold inline-flex items-center justify-center gap-2 hover:bg-cyan-300">
              Book Free Consultation <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#services" className="border border-white/20 px-7 py-4 rounded-full font-bold inline-flex items-center justify-center hover:bg-white/10">
              View Services
            </a>
          </div>
        </div>

        <div className="bg-white/10 border border-white/10 rounded-3xl p-8 shadow-2xl">
          <div className="grid gap-4">
            {["Lead response automation", "AI customer support", "WhatsApp chatbot", "Daily report automation", "CRM workflow setup"].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-slate-900 rounded-2xl p-4">
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
            <h2 className="text-4xl font-bold mb-4">Our AI Automation Services</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Practical automation solutions for small businesses, startups, agencies, and service-based companies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-slate-950 border border-white/10 rounded-3xl p-6 hover:border-cyan-400 transition">
                <div className="text-cyan-400 mb-5">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">How We Work</h2>
          <p className="text-slate-300">Simple process from idea to automation launch.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["01", "Understand", "We study your business process and identify repetitive tasks."],
            ["02", "Build", "We design and develop AI automation based on your requirement."],
            ["03", "Launch", "We test, deploy, and support your automation system."],
          ].map(([num, title, desc]) => (
            <div key={title} className="rounded-3xl bg-white/10 border border-white/10 p-8">
              <div className="text-cyan-400 text-3xl font-black mb-4">{num}</div>
              <h3 className="text-2xl font-bold mb-3">{title}</h3>
              <p className="text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cyan-400 text-slate-950 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <ShieldCheck className="w-12 h-12 mx-auto mb-5" />
          <h2 className="text-4xl font-black mb-4">Save hours every week with AI automation</h2>
          <p className="text-lg mb-8">
            Start with one simple automation and scale as your business grows.
          </p>
          <a href="#contact" className="bg-slate-950 text-white px-8 py-4 rounded-full font-bold inline-flex items-center gap-2">
            Talk to Us <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <section id="contact" className="max-w-4xl mx-auto px-6 py-24">
        <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 md:p-12">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-slate-300 mb-8">
            Tell us about your business and we will suggest the best AI automation solution.
          </p>
          <form className="grid gap-4">
            <input className="bg-slate-950 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400" placeholder="Your Name" />
            <input className="bg-slate-950 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400" placeholder="Email or Phone" />
            <textarea className="bg-slate-950 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 min-h-32" placeholder="What do you want to automate?" />
            <button type="button" className="bg-cyan-400 text-slate-950 px-7 py-4 rounded-full font-bold hover:bg-cyan-300">
              Submit Request
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-slate-400">
        © 2026 AutoMind AI. All rights reserved.
      </footer>
    </div>
  );
}

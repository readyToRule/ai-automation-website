import React from "react";
import {
  FileText,
  ClipboardList,
  FileCheck,
  Database,
  ArrowLeft,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function WorkflowAutomation() {
  const navigate = useNavigate();

  const tools = [
    {
      title: "FSD Generator",
      desc: "Generate Functional Specification Documents using AI.",
      icon: <FileText className="w-8 h-8 text-cyan-400" />,
      path: "/fsd-generator",
    },
    {
      title: "BRD Generator",
      desc: "Convert requirements into structured BRD documents.",
      icon: <ClipboardList className="w-8 h-8 text-cyan-400" />,
    },
    {
      title: "Test Case Generator",
      desc: "Generate professional QA test cases automatically.",
      icon: <FileCheck className="w-8 h-8 text-cyan-400" />,
    },
    {
      title: "SQL Generator",
      desc: "Generate SQL queries from business requirements.",
      icon: <Database className="w-8 h-8 text-cyan-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              Workflow Automation
            </h1>

            <p className="text-slate-400 mt-1">
              AI-powered business automation tools
            </p>
          </div>

          <button
            onClick={() => navigate("/dashboard")}
            className="bg-cyan-400 text-slate-950 px-5 py-3 rounded-full font-bold inline-flex items-center gap-2 hover:bg-cyan-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.title}
              onClick={() => tool.path && navigate(tool.path)}
              className="bg-slate-900 border border-white/10 rounded-3xl p-7 min-h-[250px] flex flex-col justify-between hover:border-cyan-400 hover:scale-105 transition cursor-pointer"
            >
              <div>
                <div className="mb-6">
                  {tool.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {tool.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {tool.desc}
                </p>
              </div>

              <button className="mt-6 bg-cyan-400 text-slate-950 px-5 py-2 rounded-full font-semibold hover:bg-cyan-300 w-fit">
                Open Tool
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
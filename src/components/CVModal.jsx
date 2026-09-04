import React from 'react';
import { Download, Printer, X, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { personalInfo, clientPortfolio, experienceData, volunteerExperience, educationData, skillsData } from '../data/portfolioData';
import { sound } from '../utils/audio';

export const CVModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    sound.playClick();
    let iframe = document.getElementById('print-cv-frame');
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.id = 'print-cv-frame';
      iframe.style.position = 'fixed';
      iframe.style.right = '0';
      iframe.style.bottom = '0';
      iframe.style.width = '0';
      iframe.style.height = '0';
      iframe.style.border = '0';
      iframe.src = '/hasan_atul_bhati_cv.html';
      document.body.appendChild(iframe);
      iframe.onload = () => {
        iframe.contentWindow?.focus();
        iframe.contentWindow?.print();
      };
    } else {
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="bg-[#0e1320] border border-cyan-500/40 rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden text-slate-100">
        
        {/* Top Action Header Bar */}
        <div className="bg-[#0a0d16] px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse"></span>
            <span className="font-mono text-xs font-bold text-slate-200">
              EXECUTIVE CURRICULUM VITAE // HASAN ATUL BHATI
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/hasan_atul_bhati_cv.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono font-semibold text-slate-200 flex items-center gap-1.5 transition-colors"
              title="Open standalone clean CV in new tab"
            >
              <ExternalLink size={14} />
              <span className="hidden sm:inline">Open Standalone</span>
            </a>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:brightness-110 text-white text-xs font-mono font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
              title="Print clean PDF without website clutter"
            >
              <Printer size={14} />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X size={19} />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-xs sm:text-sm bg-[#0a0e19]">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
              {personalInfo.name}
            </h1>
            <div className="text-sm sm:text-base font-mono text-cyan-400 font-bold mt-1">
              {personalInfo.headline}
            </div>

            <div className="flex flex-wrap gap-4 mt-3 text-xs font-mono text-slate-700 dark:text-slate-300 font-medium">
              <span className="flex items-center gap-1.5"><MapPin size={13} className="text-cyan-600 dark:text-cyan-400" /> {personalInfo.location}</span>
              <span className="flex items-center gap-1.5"><Mail size={13} className="text-cyan-600 dark:text-cyan-400" /> {personalInfo.email}</span>
              <span className="flex items-center gap-1.5"><Phone size={13} className="text-cyan-600 dark:text-cyan-400" /> {personalInfo.phone}</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-cyan-700 dark:text-cyan-400 hover:underline font-bold">
                <LinkedinIcon size={13} /> in/hasanbhati
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
              Professional Summary
            </h2>
            <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
              {personalInfo.summary}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
              Professional Experience
            </h2>
            <div className="space-y-6">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="border-l-2 border-slate-300 dark:border-white/10 pl-4 space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <span className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">{exp.role}</span>
                    <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-400">{exp.period}</span>
                  </div>
                  <div className="font-mono text-xs text-cyan-700 dark:text-cyan-400 font-bold">
                    {exp.company} • {exp.location}
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 text-slate-800 dark:text-slate-200 pt-1 font-medium">
                    {exp.bulletPoints.map((pt, pIdx) => (
                      <li key={pIdx} className="leading-relaxed">{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
              Education
            </h2>
            <div className="border-l-2 border-slate-300 dark:border-white/10 pl-4 space-y-1">
              <div className="flex justify-between items-center">
                <span className="font-bold text-slate-900 dark:text-white">{educationData.degree}</span>
                <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-400">{educationData.period}</span>
              </div>
              <div className="font-mono text-xs text-cyan-700 dark:text-cyan-400 font-bold">
                {educationData.institution} • {educationData.location}
              </div>
            </div>
          </div>

          {/* Client Portfolio */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
              Enterprise Client Portfolio
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 font-mono text-xs text-slate-800 dark:text-slate-200">
              {clientPortfolio.map((client, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 flex items-center gap-2 font-bold">
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                  <span>{client.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteer Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
              Volunteer & Community Experience
            </h2>
            <div className="space-y-4">
              {volunteerExperience.map((vol, idx) => (
                <div key={idx} className="border-l-2 border-slate-300 dark:border-white/10 pl-4 space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-900 dark:text-white">{vol.role}</span>
                    <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-400">{vol.period}</span>
                  </div>
                  <div className="font-mono text-xs text-cyan-700 dark:text-cyan-400 font-bold">
                    {vol.organization} • {vol.location}
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 text-slate-800 dark:text-slate-200 pt-1 font-medium">
                    {vol.bulletPoints.map((pt, pIdx) => (
                      <li key={pIdx} className="leading-relaxed">{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Core Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
              Core Skills Matrix
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs text-slate-800 dark:text-slate-200 font-medium">
              <div className="space-y-2">
                <div>• HTML, CSS & JavaScript (ES6+)</div>
                <div>• Java & Python (Working knowledge)</div>
                <div>• Data Analysis & SQL</div>
                <div>• Jira, Confluence, Zendesk</div>
                <div>• Agile/Scrum Methodologies</div>
              </div>
              <div className="space-y-2">
                <div>• Requirements Elicitation & Analysis (BRDs)</div>
                <div>• Technical Documentation & APIs</div>
                <div>• Scope & Risk Management</div>
                <div>• Cross-Functional Team Collaboration</div>
                <div>• Problem Solving & Strategic Thinking</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

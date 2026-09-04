import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Maximize2, Minimize2, CornerDownLeft, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';
import { personalInfo, clientPortfolio, experienceData, methodologyPillars } from '../data/portfolioData';

export const Terminal = ({ onOpenCV }) => {
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: `[HasanOS v2.5.0-PROD] Initialized successfully.
Type 'help' to see available commands or click quick action buttons below.`
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const terminalScrollRef = useRef(null);
  const inputRef = useRef(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    // Only scroll the internal terminal container, NEVER scroll the browser window
    if (terminalScrollRef.current) {
      terminalScrollRef.current.scrollTop = terminalScrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmdStr) => {
    const raw = cmdStr.trim();
    if (!raw) return;

    sound.playClick();
    const cmd = raw.toLowerCase();

    const newHistory = [...history, { type: 'user', text: raw }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `AVAILABLE COMMANDS:
  • about         - Executive summary & mission statement
  • experience    - Career timeline (ZOOVU, IBM, AIESEC)
  • clients       - List of 15+ Fortune 500 & enterprise partners
  • skills        - Core technical & architecture competencies
  • architecture  - 4-phase SaaS architecture framework
  • contact       - Direct contact details & LinkedIn
  • download-cv   - View & download complete executive CV
  • date          - Current time in Wrocław (CET)
  • whoami        - Current user identity
  • clear         - Clear the terminal console`
        });
        break;

      case 'about':
      case 'bio':
        newHistory.push({
          type: 'output',
          text: `HASAN ATUL BHATI // ${personalInfo.headline}
Location: ${personalInfo.location} | Timezone: ${personalInfo.timezone}

${personalInfo.summary}`
        });
        break;

      case 'experience':
      case 'exp':
        newHistory.push({
          type: 'output',
          text: `CAREER JOURNEY:
${experienceData.map(e => `[${e.period}] ${e.role} @ ${e.company}\n  -> ${e.highlight}`).join('\n\n')}`
        });
        break;

      case 'clients':
        newHistory.push({
          type: 'output',
          text: `ENTERPRISE CLIENT PORTFOLIO:
${clientPortfolio.map(c => `• ${c.name} (${c.tier}) - ${c.category}`).join('\n')}`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `CORE SKILLS BREAKDOWN:
• Architecture: SaaS Blueprints, Requirements Engineering (BRD/PRD), Integrations, Data Flows
• Engineering: HTML5, CSS3, JavaScript (ES6+), Java & Python (working knowledge), SQL
• Delivery & PM: Agile/Scrum, Scope/Risk Mitigation, Backlog Prioritization, Stakeholder Alignment
• Tools: Jira, Confluence, Zendesk, Git, BPMN Process Modeling`
        });
        break;

      case 'architecture':
        newHistory.push({
          type: 'output',
          text: `ENTERPRISE SAAS ARCHITECTURE METHODOLOGY:
${methodologyPillars.map(p => `[${p.phase}] ${p.title}\n    ${p.desc}`).join('\n\n')}`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `CONNECT WITH HASAN ATUL BHATI:
• Email:    ${personalInfo.email}
• Phone:    ${personalInfo.phone}
• LinkedIn: ${personalInfo.linkedin}
• Location: ${personalInfo.location}`
        });
        break;

      case 'download-cv':
      case 'cv':
        newHistory.push({
          type: 'output',
          text: `Opening Executive C.V. modal viewer...`
        });
        onOpenCV();
        break;

      case 'date':
        newHistory.push({
          type: 'output',
          text: `Current local time in Wrocław, Poland: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/Warsaw' })} CET`
        });
        break;

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: `user: guest_enterprise_visitor@client.net\npermissions: READ_ONLY_GUEST\nstatus: WELCOME`
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command '${raw}' not recognized. Type 'help' for available commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(inputVal);
    }
  };

  const quickCommands = ['help', 'about', 'skills', 'experience', 'clients', 'architecture', 'contact'];

  return (
    <section id="terminal" className="py-24 relative overflow-hidden bg-[#07090e]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-cyan-400 font-mono text-xs mb-3 border border-cyan-500/20">
            <TerminalIcon size={14} />
            <span>INTERACTIVE CLI INTERFACE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
            HasanOS v2.5 Interactive Console
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Query career details, system blueprints, or client engagements directly from the terminal.
          </p>
        </div>

        {/* Terminal Container */}
        <div 
          className={`glass-panel-glow rounded-2xl border border-cyan-500/40 overflow-hidden shadow-2xl transition-all duration-300 ${
            isExpanded ? 'min-h-[580px]' : 'min-h-[440px]'
          }`}
        >
          {/* Terminal Window Header Bar */}
          <div className="bg-[#0b111e] px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="ml-2 text-xs font-mono text-slate-300 font-semibold flex items-center gap-2">
                <span>hasan@wroclaw-node:~</span>
                <span className="text-[10px] text-cyan-400 px-1.5 py-0.5 rounded bg-cyan-500/10">BASH</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  sound.playClick();
                  setIsExpanded(!isExpanded);
                }}
                className="text-slate-400 hover:text-white transition-colors"
                title={isExpanded ? "Minimize Terminal" : "Maximize Terminal"}
              >
                {isExpanded ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
              </button>
            </div>
          </div>

          {/* Terminal Output Area */}
          <div 
            ref={terminalScrollRef}
            onClick={() => inputRef.current?.focus({ preventScroll: true })}
            className="p-5 font-mono text-xs sm:text-sm text-slate-200 overflow-y-auto space-y-3 cursor-text"
            style={{ maxHeight: isExpanded ? '460px' : '320px', minHeight: '260px' }}
          >
            {history.map((item, idx) => (
              <div key={idx} className="leading-relaxed">
                {item.type === 'user' && (
                  <div className="flex items-center gap-2 text-cyan-400 font-bold">
                    <span>guest@hasan-architect:~$</span>
                    <span className="text-white">{item.text}</span>
                  </div>
                )}
                {item.type === 'system' && (
                  <div className="text-slate-400 whitespace-pre-line border-b border-white/5 pb-2">
                    {item.text}
                  </div>
                )}
                {item.type === 'output' && (
                  <div className="text-emerald-300 whitespace-pre-line bg-black/20 p-3 rounded-lg border border-white/5">
                    {item.text}
                  </div>
                )}
                {item.type === 'error' && (
                  <div className="text-red-400 whitespace-pre-line bg-red-950/20 p-2 rounded">
                    {item.text}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Command Suggestions */}
          <div className="px-4 py-2 bg-black/30 border-t border-white/5 flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-mono text-slate-500 mr-1 flex items-center gap-1">
              <Sparkles size={11} className="text-cyan-400" /> Quick:
            </span>
            {quickCommands.map((qCmd) => (
              <button
                key={qCmd}
                onClick={() => handleCommand(qCmd)}
                className="px-2 py-0.5 rounded bg-white/5 hover:bg-cyan-500/20 text-[11px] font-mono text-cyan-300 border border-white/5 hover:border-cyan-400/40 transition-colors"
              >
                {qCmd}
              </button>
            ))}
          </div>

          {/* Terminal Input Line */}
          <div className="bg-[#0b111e] px-4 py-3 border-t border-white/10 flex items-center gap-2">
            <span className="text-cyan-400 font-mono text-xs font-bold whitespace-nowrap">
              guest@hasan-architect:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type command ('help', 'skills', 'about')..."
              className="w-full bg-transparent text-white font-mono text-xs sm:text-sm focus:outline-none placeholder-slate-600"
            />
            <button
              onClick={() => handleCommand(inputVal)}
              className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/40 transition-all"
              title="Run Command"
            >
              <CornerDownLeft size={14} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

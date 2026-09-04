import React, { useState, useMemo } from 'react';
import { clientPortfolio } from '../data/portfolioData';
import { sound } from '../utils/audio';
import { Globe2, Search, Sparkles } from 'lucide-react';
import { ClientBrandLogo } from './ClientLogos';

export const ClientOrbit = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeClient, setActiveClient] = useState(null);

  const categories = ['All', 'Smart Home & IoT', 'Industrial & Hardware', 'Enterprise Tech & Cloud', 'Specialty & MedTech'];

  const filteredClients = useMemo(() => {
    return clientPortfolio.filter((client) => {
      const matchesCategory = 
        selectedCategory === 'All' || 
        (selectedCategory === 'Specialty & MedTech' 
          ? (client.category.includes('MedTech') || client.category.includes('Precision') || client.category.includes('Retail') || client.category.includes('Security'))
          : client.category === selectedCategory);

      const matchesSearch = 
        client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Brand-specific aura styling
  const getBrandAura = (clientName) => {
    switch (clientName) {
      case 'Microsoft':
        return 'hover:border-blue-500 hover:shadow-[0_8px_30px_rgba(0,164,239,0.25)]';
      case 'Bosch Power Tools':
        return 'hover:border-red-500 hover:shadow-[0_8px_30px_rgba(234,28,36,0.25)]';
      case 'Bosch Smart Home':
        return 'hover:border-sky-500 hover:shadow-[0_8px_30px_rgba(0,123,192,0.25)]';
      case 'Ring':
        return 'hover:border-blue-400 hover:shadow-[0_8px_30px_rgba(27,152,245,0.25)]';
      case 'Kärcher':
        return 'hover:border-yellow-400 hover:shadow-[0_8px_30px_rgba(255,237,0,0.25)]';
      case 'BSH Home Appliances':
      case 'BSH':
        return 'hover:border-cyan-500 hover:shadow-[0_8px_30px_rgba(11,47,92,0.25)]';
      case 'Grohe':
        return 'hover:border-teal-400 hover:shadow-[0_8px_30px_rgba(0,163,224,0.25)]';
      case 'Gardena':
        return 'hover:border-orange-500 hover:shadow-[0_8px_30px_rgba(255,94,0,0.25)]';
      case 'Ottobock':
        return 'hover:border-blue-600 hover:shadow-[0_8px_30px_rgba(0,128,201,0.25)]';
      case 'Mettler Toledo':
        return 'hover:border-indigo-500 hover:shadow-[0_8px_30px_rgba(0,47,108,0.25)]';
      case 'Midea':
        return 'hover:border-cyan-400 hover:shadow-[0_8px_30px_rgba(0,146,208,0.25)]';
      case 'Dremel':
        return 'hover:border-rose-600 hover:shadow-[0_8px_30px_rgba(227,27,35,0.25)]';
      case 'Master Lock':
        return 'hover:border-amber-500 hover:shadow-[0_8px_30px_rgba(212,175,55,0.25)]';
      case 'Monster Notebook':
        return 'hover:border-emerald-500 hover:shadow-[0_8px_30px_rgba(0,255,102,0.25)]';
      case 'Lucky Bike':
        return 'hover:border-green-500 hover:shadow-[0_8px_30px_rgba(0,132,61,0.25)]';
      default:
        return 'hover:border-cyan-500 hover:shadow-[0_8px_30px_rgba(6,182,212,0.25)]';
    }
  };

  return (
    <section id="clients" className="py-24 relative overflow-hidden bg-[var(--bg-main)] border-t border-slate-200 dark:border-white/5">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-cyan-700 dark:text-cyan-400 font-mono text-xs mb-3 border border-cyan-500/30 shadow-sm font-bold">
            <Globe2 size={15} />
            <span>GLOBAL ENTERPRISE CLIENT PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white uppercase tracking-tight">
            Trusted by World-Class Brands
          </h2>
          <p className="text-slate-800 dark:text-slate-300 text-sm sm:text-base mt-3 leading-relaxed font-medium">
            Delivering scalable SaaS architectures, complex integrations, and digital transformations for Fortune 500 enterprises and global market leaders.
          </p>
        </div>

        {/* Brand ticker line with authentic logos */}
        <div className="mb-12 overflow-hidden relative w-full py-4 border-y border-slate-200 dark:border-white/10 bg-slate-100/90 dark:bg-white/[0.02]">
          <div className="flex gap-12 whitespace-nowrap animate-[marquee_28s_linear_infinite] text-slate-800 dark:text-slate-300 font-mono text-xs tracking-wider items-center">
            {clientPortfolio.concat(clientPortfolio).map((client, i) => (
              <span key={i} className="inline-flex items-center gap-3">
                <ClientBrandLogo name={client.name} className="w-5 h-5 shrink-0" />
                <span className="font-extrabold text-slate-950 dark:text-slate-200">{client.name.toUpperCase()}</span>
                <span className="text-slate-400 dark:text-slate-600">//</span>
              </span>
            ))}
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  sound.playClick();
                  setSelectedCategory(cat);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer font-bold ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-md'
                    : 'bg-white dark:bg-white/5 text-slate-800 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-white border border-slate-300 dark:border-white/10 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search clients or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white dark:bg-[#0e1422] border border-slate-300 dark:border-white/15 text-xs text-slate-950 dark:text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono shadow-sm font-semibold"
            />
          </div>
        </div>

        {/* Clients Grid with Individual Brand Glows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClients.map((client) => {
            const auraClass = getBrandAura(client.name);
            return (
              <div
                key={client.name}
                onMouseEnter={() => sound.playHover()}
                onClick={() => {
                  sound.playClick();
                  setActiveClient(client);
                }}
                className={`bg-white dark:bg-[#0e1424] p-6 rounded-3xl border border-slate-200 dark:border-white/10 transition-all duration-300 group hover:-translate-y-1 cursor-pointer flex flex-col justify-between shadow-md ${auraClass}`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 group-hover:scale-105 transition-transform flex items-center justify-center shadow-inner">
                        <ClientBrandLogo name={client.name} className="w-7 h-7 shrink-0" />
                      </div>
                      <div>
                        <h3 className="text-base font-extrabold text-slate-950 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                          {client.name}
                        </h3>
                        <span className="text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 block mt-0.5">
                          {client.category}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono font-extrabold px-2.5 py-1 rounded-full bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30 whitespace-nowrap">
                      {client.tier}
                    </span>
                  </div>

                  <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed line-clamp-3 mb-5 font-medium">
                    {client.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-slate-200 dark:border-white/10">
                  {client.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/10 group-hover:border-cyan-500/40 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Client Detail Modal */}
        {activeClient && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-white dark:bg-[#0e1320] max-w-lg w-full p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-cyan-500/50 relative shadow-2xl">
              <button
                onClick={() => {
                  sound.playClick();
                  setActiveClient(null);
                }}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 dark:hover:text-white font-mono text-sm p-2 cursor-pointer"
              >
                ✕
              </button>

              <div className="flex items-center gap-4 mb-5">
                <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/15 shadow-inner">
                  <ClientBrandLogo name={activeClient.name} className="w-9 h-9" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-950 dark:text-white mb-0.5">{activeClient.name}</h3>
                  <div className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400">{activeClient.category} • {activeClient.tier}</div>
                </div>
              </div>

              <div className="space-y-5 text-sm">
                <div className="p-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 font-sans text-xs sm:text-sm leading-relaxed text-slate-900 dark:text-slate-100 font-medium">
                  {activeClient.description}
                </div>

                <div>
                  <div className="text-[11px] font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2.5 font-bold">
                    TECHNOLOGY & DOMAIN SPECIFICATION:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeClient.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-xs font-mono font-bold text-cyan-800 dark:text-cyan-300 shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-7 flex justify-end">
                <button
                  onClick={() => {
                    sound.playClick();
                    setActiveClient(null);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-xs font-mono font-bold text-slate-900 dark:text-white transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

import React, { useState, useMemo } from 'react';
import { clientPortfolio } from '../data/portfolioData';
import { sound } from '../utils/audio';
import { Globe2, Search } from 'lucide-react';
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
    <section id="clients" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-[var(--bg-main)] border-t border-white/5">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full glass-panel text-cyan-400 font-mono text-[11px] sm:text-xs mb-3 border border-cyan-500/30 shadow-sm font-bold">
            <Globe2 size={15} />
            <span>GLOBAL ENTERPRISE CLIENT PORTFOLIO</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white uppercase tracking-tight">
            Trusted by World-Class Brands
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base mt-2.5 sm:mt-3 leading-relaxed font-normal">
            Delivering scalable SaaS architectures, complex integrations, and digital transformations for Fortune 500 enterprises and global market leaders.
          </p>
        </div>

        {/* Brand ticker line with authentic logos */}
        <div className="mb-10 sm:mb-12 overflow-hidden relative w-full py-3.5 sm:py-4 border-y border-white/10 bg-white/[0.02]">
          <div className="flex gap-10 sm:gap-12 whitespace-nowrap animate-[marquee_28s_linear_infinite] text-slate-300 font-mono text-xs tracking-wider items-center">
            {clientPortfolio.concat(clientPortfolio).map((client, i) => (
              <span key={i} className="inline-flex items-center gap-2.5 sm:gap-3">
                <ClientBrandLogo name={client.name} className="w-5 h-5 shrink-0" />
                <span className="font-extrabold text-slate-200">{client.name.toUpperCase()}</span>
                <span className="text-slate-500">//</span>
              </span>
            ))}
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 sm:mb-10">
          
          {/* Category Tabs (Horizontally scrollable on mobile) */}
          <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex items-center sm:flex-wrap justify-start sm:justify-center gap-1.5 sm:gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    sound.playClick();
                    setSelectedCategory(cat);
                  }}
                  className={`px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer font-bold whitespace-nowrap shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-md'
                      : 'bg-white/5 text-slate-300 hover:text-white border border-white/10 shadow-sm'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64 shrink-0">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search clients or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#0e1422] border border-white/15 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 font-mono shadow-sm font-semibold"
            />
          </div>
        </div>

        {/* Clients Grid with Individual Brand Glows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
                className={`bg-[#0e1424] p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 transition-all duration-300 group hover:-translate-y-1 cursor-pointer flex flex-col justify-between shadow-md ${auraClass}`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3.5 sm:mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform flex items-center justify-center shadow-inner">
                        <ClientBrandLogo name={client.name} className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" />
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                          {client.name}
                        </h3>
                        <span className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-400 block mt-0.5">
                          {client.category}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono font-extrabold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 whitespace-nowrap">
                      {client.tier}
                    </span>
                  </div>

                  <p className="text-xs text-slate-200 leading-relaxed line-clamp-3 mb-4 sm:mb-5 font-normal">
                    {client.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                  {client.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-white/5 text-slate-200 border border-white/10 group-hover:border-cyan-500/40 transition-colors"
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-[#0e1320] max-w-lg w-full p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-cyan-500/50 relative shadow-2xl max-h-[88vh] overflow-y-auto">
              <button
                onClick={() => {
                  sound.playClick();
                  setActiveClient(null);
                }}
                className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 text-slate-400 hover:text-white font-mono text-sm p-2 cursor-pointer"
                aria-label="Close client details"
              >
                ✕
              </button>

              <div className="flex items-center gap-3.5 sm:gap-4 mb-4 sm:mb-5 pr-8">
                <div className="p-2.5 sm:p-3.5 rounded-2xl bg-white/5 border border-white/15 shadow-inner shrink-0">
                  <ClientBrandLogo name={activeClient.name} className="w-8 h-8 sm:w-9 sm:h-9" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-0.5">{activeClient.name}</h3>
                  <div className="text-xs font-mono font-bold text-cyan-400">{activeClient.category} • {activeClient.tier}</div>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-5 text-sm">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 font-sans text-xs sm:text-sm leading-relaxed text-slate-100 font-normal">
                  {activeClient.description}
                </div>

                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 font-bold">
                    TECHNOLOGY & DOMAIN SPECIFICATION:
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {activeClient.tags.map((tag, idx) => (
                      <span key={idx} className="px-2.5 sm:px-3 py-1 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-[11px] sm:text-xs font-mono font-bold text-cyan-300 shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-7 flex justify-end">
                <button
                  onClick={() => {
                    sound.playClick();
                    setActiveClient(null);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono font-bold text-white transition-colors cursor-pointer"
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

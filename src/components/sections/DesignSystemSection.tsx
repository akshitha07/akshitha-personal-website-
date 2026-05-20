import { Accessibility, Layout, Mail, Monitor } from "lucide-react";

export function DesignSystemSection() {
  return (
    <section
      id="design-system"
      className="py-20 md:py-32 bg-neutral-50 text-brand-dark rounded-[3rem] mx-4 md:mx-10 px-6 border border-neutral-200"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-6 block">
              Foundations
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-brand-dark mb-8 leading-[0.9]">
              Systematic <br />Design Thinking
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed font-sans">
              I don't just build components; I build systems. Every interface is derived from a core set of
              design tokens, ensuring absolute consistency across 100+ screens.
            </p>
            <div className="space-y-10 font-sans">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/20 flex items-center justify-center shrink-0">
                  <Layout className="text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Atomic Architecture</h4>
                  <p className="text-gray-400">
                    Organized into Atoms, Molecules, and Organisms for maximum reusability.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/20 flex items-center justify-center shrink-0">
                  <Accessibility className="text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">A11y First (WCAG 2.1)</h4>
                  <p className="text-gray-400">
                    Strict adherence to contrast ratios, keyboard navigation, and ARIA patterns.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <span className="text-gray-400 font-mono text-sm">ui-library / Buttons.tsx</span>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex flex-wrap gap-4 items-center">
                  <button className="px-6 py-3 bg-brand-blue text-white rounded-lg font-bold cursor-pointer">
                    Primary Action
                  </button>
                  <button className="px-6 py-3 bg-white/10 text-white rounded-lg font-bold border border-white/20 cursor-pointer">
                    Secondary
                  </button>
                  <button className="px-6 py-3 text-brand-blue font-bold hover:bg-brand-blue/10 rounded-lg transition-colors cursor-pointer">
                    Ghost Button
                  </button>
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input
                      disabled
                      placeholder="akshitha@portfolio.dev"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-gray-300 pointer-events-none"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
                  <Monitor className="text-brand-blue" size={24} />
                  <div>
                    <p className="text-sm font-bold">Responsive Pattern</p>
                    <p className="text-xs text-gray-400">Adapts layout based on container size</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-blue rounded-full blur-[100px] opacity-20" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-blue/30 rounded-full blur-[100px] opacity-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';

export default function Home() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0a1628] text-[#e2e8f0]">
      {/* Subtle grid background */}
      <div className="fixed inset-0 opacity-[0.015]" style={{
        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Content */}
      <div className="relative">
        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-20 pb-32 max-w-6xl">
          <div className="text-center space-y-8 animate-fade-in-up">
            <div className="inline-block">
              <h1 className="font-[family-name:var(--font-jetbrains-mono)] text-5xl md:text-7xl font-bold mb-6 leading-tight">
                La documentazione ISO<br />
                <span className="text-[#ff6b35]">si scrive da sola.</span><br />
                <span className="text-[#4ade80]">Finalmente.</span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-[#94a3b8] max-w-4xl mx-auto leading-relaxed">
              L&apos;unico agente AI che ascolta l&apos;ispettore ISO e genera la documentazione mancante<br />
              mentre tu annuisci con sicurezza.
            </p>

            <div className="bg-[#1e3a5f]/40 border border-[#2d4a6f] rounded-lg p-6 max-w-3xl mx-auto backdrop-blur-sm">
              <p className="font-[family-name:var(--font-jetbrains-mono)] text-lg text-[#cbd5e1] italic">
                &quot;Ha detto procedure? Eccole. Risk assessment? Fatto.<br />
                Politiche di backup? Ovviamente le abbiamo.&quot;
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button className="bg-[#ff6b35] hover:bg-[#ff8555] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 animate-pulse-glow">
                Richiedi Demo
              </button>
              <button className="border-2 border-[#4ade80] text-[#4ade80] hover:bg-[#4ade80] hover:text-[#0a1628] font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300">
                Contatta il Team
              </button>
            </div>
          </div>
        </section>

        {/* Il Problema */}
        <section className="bg-[#0f1f3a] py-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="font-[family-name:var(--font-jetbrains-mono)] text-4xl md:text-5xl font-bold mb-12 text-center">
              Il Problema <span className="text-[#94a3b8]">(che tutti conosciamo)</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[#1e3a5f]/30 border-l-4 border-[#4ade80] p-8 rounded-lg">
                <h3 className="font-[family-name:var(--font-jetbrains-mono)] text-2xl font-bold mb-6 text-[#4ade80]">
                  Giorno -7 dall&apos;audit ISO:
                </h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-[#4ade80] text-2xl">✅</span>
                    <span>Prodotto: funziona</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4ade80] text-2xl">✅</span>
                    <span>Team: motivato</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ff6b35] text-2xl">❌</span>
                    <span>Documentazione: &quot;esiste, da qualche parte&quot;</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#1e3a5f]/30 border-l-4 border-[#ff6b35] p-8 rounded-lg">
                <h3 className="font-[family-name:var(--font-jetbrains-mono)] text-2xl font-bold mb-6 text-[#ff6b35]">
                  Durante l&apos;ispezione:
                </h3>
                <div className="space-y-4 text-lg font-[family-name:var(--font-jetbrains-mono)]">
                  <p><strong className="text-[#cbd5e1]">Ispettore:</strong> &quot;Mi mostri la procedura di gestione degli incident&quot;</p>
                  <p><strong className="text-[#cbd5e1]">Tu:</strong> &quot;Certo... <span className="text-[#ff6b35] italic">*suda freddo*</span> ...è nel repository... da qualche parte...&quot;</p>
                  <p><strong className="text-[#cbd5e1]">Ispettore:</strong> <span className="italic">*alza un sopracciglio*</span></p>
                  <p className="text-[#ff6b35] text-3xl pt-4">La tua startup: 💀</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* La Soluzione */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-[family-name:var(--font-jetbrains-mono)] text-4xl md:text-6xl font-bold mb-6">
                ISOgpt ascolta. <span className="text-[#ff6b35]">ISOgpt scrive.</span><br />
                <span className="text-[#4ade80]">Tu passi l&apos;audit.</span>
              </h2>
              <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto">
                Il nostro agente AI partecipa all&apos;ispezione in tempo reale e:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: '🎧', text: 'Ascolta cosa chiede l\'ispettore' },
                { icon: '🧠', text: 'Capisce cosa manca' },
                { icon: '⚡', text: 'Genera documentazione compliant al volo' },
                { icon: '📄', text: 'Te la passa come se l\'avessi scritta 6 mesi fa' }
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#1e3a5f]/40 border border-[#2d4a6f] p-6 rounded-lg hover:border-[#ff6b35] transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <span className="text-4xl mb-3 block">{item.icon}</span>
                  <p className="text-lg text-[#cbd5e1]">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="font-[family-name:var(--font-jetbrains-mono)] text-xl text-[#94a3b8] italic">
                &quot;È come avere un CISO fantasma che lavora alla velocità della luce&quot;
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-[#0f1f3a] py-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="font-[family-name:var(--font-jetbrains-mono)] text-4xl md:text-5xl font-bold mb-16 text-center">
              Features
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: '🤖',
                  title: 'AI-Powered Panic Management',
                  desc: 'Trasforma "non ce l\'abbiamo" in "ecco il documento, versione 3.2" in 90 secondi'
                },
                {
                  icon: '📋',
                  title: 'Template Compliance-Ready',
                  desc: 'ISO 27001, SOC2, GDPR - il nostro AI sa cosa vogliono sentirsi dire'
                },
                {
                  icon: '🎭',
                  title: 'Mode "Ovviamente ce l\'avevamo"',
                  desc: 'Genera timestamp retroattivi (disclaimer: per scopi dimostrativi)'
                },
                {
                  icon: '💬',
                  title: 'Real-time Bullshit Translation',
                  desc: 'Converte "facciamo un backup ogni tanto" in "Procedura formale di Business Continuity con RTO di 4 ore"'
                },
                {
                  icon: '🚀',
                  title: 'Integrazione Slack',
                  desc: 'Ricevi la documentazione mentre l\'ispettore sta ancora facendo la domanda'
                },
                {
                  icon: '⚡',
                  title: 'Lightning Fast',
                  desc: 'Più veloce del tempo che ci metti a dire "è nella roadmap"'
                }
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-[#1e3a5f]/40 border border-[#2d4a6f] p-6 rounded-lg hover:border-[#ff6b35] transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredFeature(i)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <span className="text-5xl mb-4 block transition-transform duration-300" style={{
                    transform: hoveredFeature === i ? 'scale(1.2) rotate(5deg)' : 'scale(1)'
                  }}>
                    {feature.icon}
                  </span>
                  <h3 className="font-[family-name:var(--font-jetbrains-mono)] text-xl font-bold mb-3 text-[#4ade80]">
                    {feature.title}
                  </h3>
                  <p className="text-[#94a3b8]">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Come Funziona */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-[family-name:var(--font-jetbrains-mono)] text-4xl md:text-5xl font-bold mb-16 text-center">
              Come Funziona
            </h2>

            <div className="space-y-8">
              {[
                { step: 'Ispettore', text: '"Avete una policy di gestione delle password?"', color: 'text-[#94a3b8]' },
                { step: '↓', text: '[ISOgpt ascolta]', color: 'text-[#ff6b35]' },
                { step: '↓', text: '[LLM genera policy]', color: 'text-[#ff6b35]' },
                { step: '↓', text: 'Tu (con naturalezza): "Certamente, gliela invio subito"', color: 'text-[#cbd5e1]' },
                { step: '↓', text: '✨ Policy arrives ✨', color: 'text-[#4ade80]' },
                { step: '↓', text: 'Ispettore: "Complimenti, siete molto organizzati"', color: 'text-[#4ade80]' }
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#1e3a5f]/30 border-l-4 border-[#ff6b35] p-6 rounded-lg font-[family-name:var(--font-jetbrains-mono)] text-lg animate-slide-in-right"
                  style={{
                    animationDelay: `${i * 0.15}s`,
                    opacity: 0
                  }}
                >
                  <span className={`${item.color} font-bold`}>{item.step}</span>
                  {item.step !== '↓' && <span className="ml-4">{item.text}</span>}
                  {item.step === '↓' && <div className="text-center font-bold text-xl">{item.text}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-[#0f1f3a] py-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="font-[family-name:var(--font-jetbrains-mono)] text-4xl md:text-5xl font-bold mb-16 text-center">
              Pricing
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Startup Tier',
                  price: '€997',
                  period: 'anno',
                  features: ['1 audit ISO', 'Documentazione base', 'Sudore freddo incluso'],
                  highlight: false
                },
                {
                  name: 'Scale-up Tier',
                  price: '€2,997',
                  period: 'anno',
                  features: ['Audit illimitati', 'Risk assessment automatici', 'Supporto prioritario 24/7'],
                  highlight: true
                },
                {
                  name: 'Enterprise',
                  price: 'Parliamone',
                  period: '',
                  features: ['Multi-standard (ISO, SOC2, GDPR)', 'Documentazione anche per procedure che non esistono', 'L\'ispettore diventa tuo amico'],
                  highlight: false
                }
              ].map((plan, i) => (
                <div
                  key={i}
                  className={`p-8 rounded-lg ${
                    plan.highlight
                      ? 'bg-[#ff6b35] border-2 border-[#ff6b35] transform scale-105'
                      : 'bg-[#1e3a5f]/40 border-2 border-[#2d4a6f]'
                  } transition-all duration-300 hover:transform hover:scale-105`}
                >
                  <h3 className="font-[family-name:var(--font-jetbrains-mono)] text-2xl font-bold mb-4">
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-[#94a3b8]">/{plan.period}</span>}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-[#4ade80] mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.highlight
                      ? 'bg-white text-[#ff6b35] hover:bg-[#cbd5e1]'
                      : 'bg-[#ff6b35] text-white hover:bg-[#ff8555]'
                  }`}>
                    Scegli Piano
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="font-[family-name:var(--font-jetbrains-mono)] text-4xl md:text-5xl font-bold mb-16 text-center">
              Testimonials
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: 'Ho cliccato su \'genera documentazione\' durante la pausa caffè dell\'ispettore. Abbiamo preso la certificazione. Non so se sia legale ma funziona.',
                  author: 'CTO, Fintech Series A'
                },
                {
                  quote: 'Prima di ISOgpt: 3 settimane di panico. Dopo: 3 ore di panico controllato.',
                  author: 'VP Engineering, SaaS Startup'
                },
                {
                  quote: 'L\'audit più tranquillo della mia vita. L\'ispettore ha addirittura chiesto se poteva copiare alcuni nostri documenti.',
                  author: 'Founder & CEO, Tech Startup'
                }
              ].map((testimonial, i) => (
                <div
                  key={i}
                  className="bg-[#1e3a5f]/40 border border-[#2d4a6f] p-8 rounded-lg hover:border-[#4ade80] transition-all duration-300"
                >
                  <p className="text-lg mb-6 italic text-[#cbd5e1]">&quot;{testimonial.quote}&quot;</p>
                  <p className="font-[family-name:var(--font-jetbrains-mono)] text-[#94a3b8]">
                    — {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#0f1f3a] py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-[family-name:var(--font-jetbrains-mono)] text-4xl md:text-5xl font-bold mb-16 text-center">
              FAQ
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'È legale?',
                  a: 'Tecnicamente sì. Moralmente... dipende.'
                },
                {
                  q: 'L\'ispettore se ne accorge?',
                  a: 'Non se sei abbastanza veloce nel mandare la documentazione.'
                },
                {
                  q: 'Sostituisce un vero sistema di gestione?',
                  a: 'No. Ma ti fa passare l\'audit mentre costruisci quello vero.'
                },
                {
                  q: 'Funziona davvero?',
                  a: 'L\'MVP è testato in produzione. Definition of done: ✅'
                }
              ].map((faq, i) => (
                <div
                  key={i}
                  className="bg-[#1e3a5f]/40 border border-[#2d4a6f] p-6 rounded-lg hover:border-[#ff6b35] transition-all duration-300"
                >
                  <h3 className="font-[family-name:var(--font-jetbrains-mono)] text-xl font-bold mb-3 text-[#4ade80]">
                    {faq.q}
                  </h3>
                  <p className="text-[#cbd5e1]">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="font-[family-name:var(--font-jetbrains-mono)] text-3xl md:text-5xl font-bold mb-8">
              Il prossimo audit è tra meno di 30 giorni?
            </h2>

            <div className="space-y-4 mb-12 text-xl text-[#94a3b8]">
              <p className="line-through">Non andare in paranoia.</p>
              <p className="line-through">Non assumere un consulente a €800/giorno.</p>
              <p className="line-through">Non scrivere documentazione alle 3 di notte.</p>
              <p className="text-[#4ade80] text-2xl font-bold mt-6">Usa ISOgpt.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#ff6b35] hover:bg-[#ff8555] text-white font-bold px-10 py-5 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 animate-pulse-glow">
                Richiedi Demo
              </button>
              <button className="border-2 border-[#4ade80] text-[#4ade80] hover:bg-[#4ade80] hover:text-[#0a1628] font-bold px-10 py-5 rounded-lg text-xl transition-all duration-300">
                Parla con noi
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0f1f3a] border-t border-[#2d4a6f] py-12">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center space-y-4 mb-8">
              <p className="text-sm text-[#94a3b8]">
                <strong>P.S.</strong> Se sei un VC e stai leggendo: sì, facciamo sul serio. Più o meno.
              </p>
              <p className="text-sm text-[#94a3b8]">
                <strong>P.P.S.</strong> Questo prodotto potrebbe diventare legale requirement in futuro. First mover advantage.
              </p>
            </div>

            <div className="text-center space-y-2">
              <h3 className="font-[family-name:var(--font-jetbrains-mono)] text-2xl font-bold text-[#ff6b35]">
                ISOgpt™
              </h3>
              <p className="text-[#94a3b8]">Documentation at the speed of panic</p>
              <p className="text-sm text-[#94a3b8]">Made with ☕ and 🔥 durante un vero audit ISO</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

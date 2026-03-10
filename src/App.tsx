/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ShieldCheck, 
  Sun, 
  Heart, 
  CheckCircle2, 
  PlayCircle,
  Award,
  BookOpen
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function App() {
  return (
    <div className="min-h-screen bg-pink-50 font-sans text-emerald-900 selection:bg-pink-200">
      {/* Navigation / Header */}
      <nav className="fixed top-0 w-full bg-pink-100/80 backdrop-blur-md z-50 border-b border-pink-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sun className="w-8 h-8 text-amber-500 fill-amber-500/20" />
            <span className="font-serif italic text-xl font-bold tracking-tight text-blue-900">
              Vale do Amanhecer
            </span>
          </div>
          <div className="hidden lg:flex gap-4 text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
            <a href="#beneficios" className="hover:text-blue-600 transition-colors">Benefícios</a>
            <a href="#historia" className="hover:text-blue-600 transition-colors">História</a>
            <a href="#desenvolvimento" className="hover:text-blue-600 transition-colors">Desenvolvimento</a>
            <a href="#emplacamento" className="hover:text-blue-600 transition-colors">Emplacamento</a>
            <a href="#iniciacao" className="hover:text-blue-600 transition-colors">Iniciação</a>
            <a href="#elevacao" className="hover:text-blue-600 transition-colors">Elevação</a>
            <a href="#pre-centuria" className="hover:text-blue-600 transition-colors">Pré Centuria</a>
            <a href="#mantras" className="hover:text-blue-600 transition-colors">Mantras</a>
            <a href="#musicas-ciganas" className="hover:text-blue-600 transition-colors">Ciganas</a>
            <a href="#fotos" className="hover:text-blue-600 transition-colors">Fotos</a>
            <a href="#blog" className="hover:text-blue-600 transition-colors">Blog</a>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-pink-200 to-pink-50 pt-20 pb-32">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-300 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-emerald-100 text-emerald-800 rounded-full">
                Missão Jaguar: O Chamado de Pai Seta Branca
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-emerald-600 mb-4 uppercase tracking-wider">
                Vale do Amanhecer: A Luz da Nova Era
              </h2>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-blue-900 leading-[1.1] mb-6">
                Doutrinador: Domine a Ciência de Tia Neiva e <span className="text-emerald-700 italic">Cumpra seu Dever Sagrado</span> — Porque Fora da Caridade não há Salvação.
              </h1>
              <p className="text-lg md:text-xl text-emerald-700 max-w-2xl mx-auto mb-10 leading-relaxed">
                Acesse o método iniciático que revela como manipular as forças espirituais com precisão para realizar curas reais e evoluir sua jornada como Jaguar.
              </p>
            </motion.div>

            {/* VSL Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative max-w-3xl mx-auto aspect-video bg-blue-900 rounded-2xl shadow-2xl overflow-hidden group cursor-pointer border-4 border-white"
            >
              <img 
                src="https://picsum.photos/seed/tianeiva/1200/675" 
                alt="Tia Neiva - O Segredo da Cura" 
                className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <PlayCircle className="w-10 h-10 fill-white text-amber-500" />
                </div>
                <p className="text-xl font-bold mb-2 drop-shadow-md">O Segredo da Cura que Tia Neiva Revelou</p>
                <p className="text-sm opacity-80 max-w-md">Assista e descubra como elevar sua vibração e cumprir sua missão espiritual.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12"
            >
              <button className="group relative px-10 py-5 bg-amber-500 hover:bg-amber-600 text-white text-xl font-bold rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all hover:-translate-y-1 active:scale-95">
                Quero ser curado!
                <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-amber-300 animate-pulse" />
              </button>
              <p className="mt-4 text-sm text-emerald-600 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Acesso imediato ao portal de estudos
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="beneficios" className="py-24 bg-pink-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-4">
                Transformações Reais no Vale do Amanhecer
              </h2>
              <p className="text-emerald-700">Baseado nos ensinamentos iniciáticos de Tia Neiva</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Heart className="w-8 h-8 text-rose-500" />,
                  title: "Equilíbrio Mediúnico",
                  desc: "Alcance a estabilidade necessária para atuar com segurança nos trabalhos do Templo."
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-emerald-500" />,
                  title: "Leis do Amanhecer",
                  desc: "Compreensão profunda das leis que regem o Doutrinador e o Apará."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
                  title: "Proteção Espiritual",
                  desc: "Fortaleça sua aura através do conhecimento iniciático e da manipulação correta das energias."
                },
                {
                  icon: <Sun className="w-8 h-8 text-amber-500" />,
                  title: "Paz Interior",
                  desc: "Clareza mental e serenidade para conduzir trabalhos de desobsessão e cura."
                },
                {
                  icon: <Award className="w-8 h-8 text-purple-500" />,
                  title: "Maestria Doutrinária",
                  desc: "Torne-se um Jaguar preparado para os desafios da Nova Era."
                }
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-2xl border border-pink-200 bg-white/50 hover:bg-white hover:shadow-xl transition-all"
                >
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{benefit.title}</h3>
                  <p className="text-emerald-700 leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section id="garantia" className="py-24 bg-pink-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-block p-4 bg-white rounded-full shadow-sm mb-8">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png" 
                alt="Selo de Garantia" 
                className="w-16 h-16"
                referrerPolicy="no-referrer"
              />
            </div>
            <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6">Sua Missão Sem Riscos</h2>
            <p className="text-lg text-emerald-800 mb-8 leading-relaxed">
              Temos tanta confiança nos estudos deixados por Tia Neiva que oferecemos uma 
              <span className="font-bold"> Garantia Incondicional de 7 Dias</span>. Se por qualquer motivo você sentir que este conhecimento não é para você, devolvemos seu investimento integralmente. Sem perguntas, sem burocracia.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-blue-800">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Satisfação Garantida</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Risco Zero</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Compromisso Espiritual</span>
            </div>
          </div>
        </section>

        {/* Desenvolvimento Section */}
        <section id="desenvolvimento" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-6">Desenvolvimento Mediúnico</h2>
                <p className="text-lg text-emerald-800 mb-6 leading-relaxed">
                  O primeiro passo na jornada do Jaguar. Aqui, o médium aprende a equilibrar suas energias e a entender a sua missão espiritual sob a orientação dos Mestres.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-emerald-700">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 mt-1 shrink-0" />
                    <span>Equilíbrio dos plexos e centros nervosos.</span>
                  </li>
                  <li className="flex items-start gap-3 text-emerald-700">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 mt-1 shrink-0" />
                    <span>Primeiros contatos com a espiritualidade maior.</span>
                  </li>
                  <li className="flex items-start gap-3 text-emerald-700">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 mt-1 shrink-0" />
                    <span>Desenvolvimento da sensibilidade e percepção.</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://picsum.photos/seed/dev/800/600" alt="Desenvolvimento" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </section>

        {/* Emplacamento Section */}
        <section id="emplacamento" className="py-24 bg-pink-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-6">Emplacamento</h2>
                <p className="text-lg text-emerald-800 mb-6 leading-relaxed">
                  A confirmação da sintonia mediúnica. O momento em que o médium se firma em sua corrente e assume o compromisso de servir à caridade.
                </p>
                <div className="p-6 bg-white rounded-2xl border border-pink-200 shadow-sm italic text-emerald-700">
                  "O emplacamento é a assinatura do seu compromisso com o Pai Seta Branca."
                </div>
              </div>
              <div className="md:w-1/2 rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://picsum.photos/seed/emplacamento/800/600" alt="Emplacamento" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </section>

        {/* Iniciação Section */}
        <section id="iniciacao" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-6">Iniciação</h2>
            <p className="text-lg text-emerald-800 max-w-3xl mx-auto mb-12">
              O ingresso oficial nos mistérios da Doutrina. O médium recebe as primeiras chaves para a manipulação consciente das energias.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-pink-50 rounded-3xl border border-pink-100">
                <h3 className="text-xl font-bold text-blue-900 mb-4">O Despertar</h3>
                <p className="text-emerald-700">Abertura dos canais para a recepção das forças iniciáticas.</p>
              </div>
              <div className="p-8 bg-pink-50 rounded-3xl border border-pink-100">
                <h3 className="text-xl font-bold text-blue-900 mb-4">O Compromisso</h3>
                <p className="text-emerald-700">Assunção da responsabilidade como porta-voz da espiritualidade.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Elevação Section */}
        <section id="elevacao" className="py-24 bg-pink-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-blue-900 rounded-[3rem] p-12 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 p-12 opacity-10">
                <Sun className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Elevação de Espadas</h2>
                <p className="text-xl text-pink-100 mb-8 max-w-2xl">
                  Um dos momentos mais sublimes na vida do Jaguar. A elevação representa o amadurecimento espiritual e a prontidão para trabalhos de maior envergadura.
                </p>
                <button className="px-8 py-4 bg-amber-500 text-white font-bold rounded-full hover:bg-amber-600 transition-all">
                  Saiba mais sobre a Elevação
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pré Centuria Section */}
        <section id="pre-centuria" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-4">Pré Centuria</h2>
              <p className="text-emerald-700">A preparação final para o Mestrado.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 border border-pink-100 rounded-2xl hover:shadow-lg transition-all">
                <h3 className="font-bold text-blue-900 mb-2">Refinamento</h3>
                <p className="text-sm text-emerald-700">Ajuste fino da conduta doutrinária e moral.</p>
              </div>
              <div className="p-6 border border-pink-100 rounded-2xl hover:shadow-lg transition-all">
                <h3 className="font-bold text-blue-900 mb-2">Conhecimento</h3>
                <p className="text-sm text-emerald-700">Aprofundamento nas leis e rituais complexos.</p>
              </div>
              <div className="p-6 border border-pink-100 rounded-2xl hover:shadow-lg transition-all">
                <h3 className="font-bold text-blue-900 mb-2">Liderança</h3>
                <p className="text-sm text-emerald-700">Preparação para guiar outros irmãos na jornada.</p>
              </div>
            </div>
          </div>
        </section>

        {/* História Section */}
        <section id="historia" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-4">Nossa História</h2>
              <p className="text-emerald-700">A trajetória de Tia Neiva e a fundação do Vale do Amanhecer.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img src="https://picsum.photos/seed/history/800/1000" alt="História do Vale" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-6 text-emerald-800 leading-relaxed">
                <p>
                  Tudo começou com a clarividência de Neiva Chaves Zelaya, carinhosamente conhecida como Tia Neiva. Em 1959, ela iniciou sua missão espiritual que culminaria na fundação do Vale do Amanhecer.
                </p>
                <p>
                  A Doutrina do Amanhecer é um sistema de vida espiritual que busca o equilíbrio do ser humano através do conhecimento de si mesmo e da caridade incondicional.
                </p>
                <div className="p-6 bg-pink-50 rounded-2xl border-l-4 border-emerald-500 italic">
                  "Minha missão é preparar o homem para a Nova Era, através do amor e do perdão." - Tia Neiva
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mantras Section */}
        <section id="mantras" className="py-24 bg-pink-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-4">Mantras do Vale do Amanhecer</h2>
              <p className="text-emerald-700">A força vibracional das palavras sagradas.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Prece de Simiromba", text: "Oh, Simiromba, do Grande Oriente de Oxalá! No mundo espiritual, onde tudo é luz..." },
                { title: "Pai Nosso do Amanhecer", text: "Pai Nosso que estais nos céus, na luz dos nossos plexos..." },
                { title: "Mantra da Unificação", text: "Senhor, faze com que sejamos um só pensamento, uma só vibração..." },
                { title: "Mantra de Cura", text: "Que as forças das águas e das matas tragam o alívio e a regeneração..." }
              ].map((mantra, idx) => (
                <div key={idx} className="p-8 bg-white rounded-3xl border border-pink-200 shadow-sm">
                  <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                    <Sun className="w-5 h-5 text-amber-500" /> {mantra.title}
                  </h3>
                  <p className="text-emerald-700 italic leading-relaxed">"{mantra.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Músicas Ciganas Section */}
        <section id="musicas-ciganas" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-4">Músicas Ciganas</h2>
              <p className="text-emerald-700">A alegria e a liberdade da alma cigana na nossa doutrina.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Caminhada Cigana", duration: "4:20" },
                { title: "Festa no Acampamento", duration: "3:45" },
                { title: "Oração da Cigana", duration: "5:10" },
                { title: "Dança das Almas", duration: "4:00" },
                { title: "Luz do Oriente", duration: "3:30" },
                { title: "Vento de Liberdade", duration: "4:45" }
              ].map((music, idx) => (
                <div key={idx} className="flex items-center justify-between p-6 bg-pink-50 rounded-2xl border border-pink-100 hover:bg-pink-100 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <PlayCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-900">{music.title}</h3>
                      <p className="text-xs text-emerald-600">Espiritualidade Cigana</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-500">{music.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fotos Section */}
        <section id="fotos" className="py-24 bg-pink-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-4">Galeria de Fotos</h2>
              <p className="text-emerald-700">Momentos sagrados e a beleza da nossa Doutrina.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-square rounded-2xl overflow-hidden shadow-md hover:scale-105 transition-transform cursor-pointer">
                  <img src={`https://picsum.photos/seed/vale${i}/400/400`} alt={`Foto ${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-4">
                Blog do Amanhecer
              </h2>
              <p className="text-emerald-700">Artigos e reflexões para a sua jornada espiritual</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "A Importância do Doutrinador na Nova Era",
                  excerpt: "Entenda o papel fundamental do Doutrinador no equilíbrio das forças e na condução dos trabalhos espirituais.",
                  date: "10 Mar, 2026",
                  image: "https://picsum.photos/seed/doutrina/600/400"
                },
                {
                  title: "Manipulação de Energias: O Guia Básico",
                  excerpt: "Como Tia Neiva nos ensinou a lidar com as correntes magnéticas para o auxílio e a cura.",
                  date: "08 Mar, 2026",
                  image: "https://picsum.photos/seed/energy/600/400"
                },
                {
                  title: "O Chamado do Jaguar: Missão e Compromisso",
                  excerpt: "Reflexões sobre o compromisso assumido por cada Jaguar ao ingressar na Doutrina do Amanhecer.",
                  date: "05 Mar, 2026",
                  image: "https://picsum.photos/seed/mission/600/400"
                }
              ].map((post, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="group rounded-2xl overflow-hidden border border-pink-100 bg-white shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">{post.date}</span>
                    <h3 className="text-xl font-bold text-blue-900 mt-2 mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                    <p className="text-emerald-700 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <a href="#" className="text-blue-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                      Ler mais <Sparkles className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-blue-900 text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Jesus Cristo, o Sol da Terra, te chama.
            </h2>
            <p className="text-pink-100 mb-10 text-lg">
              Não deixe para amanhã o cumprimento do seu dever espiritual. O Vale do Amanhecer espera por você.
            </p>
            <button className="px-12 py-6 bg-amber-500 hover:bg-amber-600 text-white text-2xl font-bold rounded-full shadow-lg transition-all hover:scale-105 active:scale-95">
              Quero ser curado!
            </button>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-pink-50 border-t border-pink-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sun className="w-6 h-6 text-amber-500" />
            <span className="font-serif italic text-lg font-bold text-blue-900">Vale do Amanhecer</span>
          </div>
          <p className="text-emerald-700 text-sm mb-2">
            "Salve Deus! Onde houver um Jaguar, haverá uma luz acesa."
          </p>
          <p className="text-blue-400 text-xs">
            © {new Date().getFullYear()} Portal de Estudos Doutrinários. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

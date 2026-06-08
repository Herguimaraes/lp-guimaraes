'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart3, 
  CheckCircle2, 
  ChevronRight, 
  FileText, 
  Globe, 
  Lightbulb, 
  Rocket, 
  ShieldCheck, 
  Users, 
  Target, 
  Settings,
  TrendingUp,
  Layout,
  BookOpen,
  Calendar,
  Building2,
  Stethoscope
} from 'lucide-react';

const sections = [
  { id: 'hero', label: 'Início' },
  { id: 'summary', label: 'Sumário' },
  { id: 'alignment', label: 'Alinhamento' },
  { id: 'scope', label: 'Escopo' },
  { id: 'model', label: 'Modelo' },
  { id: 'commercial', label: 'Comercial' },
  { id: 'about', label: 'Quem Somos' },
];

export default function ProposalPage() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-700 rounded-sm flex items-center justify-center">
                <Rocket className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-lg tracking-tight text-slate-900 hidden sm:block uppercase">
                Guimarães <span className="font-light">Soluções</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${
                    activeSection === section.id 
                      ? 'text-blue-700' 
                      : 'text-slate-400 hover:text-slate-900'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>

            <button 
              onClick={() => scrollTo('commercial')}
              className="border border-slate-300 text-slate-700 px-4 py-2 rounded text-xs font-bold hover:bg-slate-50 transition-colors uppercase tracking-widest"
            >
              Proposta PDF
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-900 text-white overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-800 opacity-10" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-4 block">
              Proposta Comercial No. 2026-06
            </span>
            <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight leading-[1.1]">
              Assessoria de Marketing <br />
              <span className="font-bold">B2B e B2G</span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed mb-10">
              Uma abordagem estratégica focada em crescimento sustentável, 
              otimização de marca e aquisição acelerada para a operação <strong>Dra. Talita Pazeto</strong>.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button 
                onClick={() => scrollTo('summary')}
                className="w-full sm:w-auto bg-blue-700 text-white px-8 py-4 rounded font-bold text-xs uppercase tracking-widest hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20"
              >
                Análise de Cenário
              </button>
              <button 
                onClick={() => scrollTo('commercial')}
                className="w-full sm:w-auto border border-white/20 text-white px-8 py-4 rounded font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                Ver Investimento
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Executive Summary */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { 
                step: "01", 
                title: "Sumário Executivo", 
                desc: "Estruturação integral do ecossistema de marketing para comercializar capacitações, cursos e palestras em psicopedagogia e inclusão social. Foco total em alta autoridade técnica e segurança jurídica.",
                list: ["Autoridade Clínica", "Segurança Jurídica", "Rigor Científico"]
              },
              { 
                step: "02", 
                title: "Alinhamento Estratégico", 
                desc: "Vender treinamentos em inclusão requer profundo entendimento dos critérios de decisão corporativos e governamentais. Unimos entrega técnica à análise analítica de métricas.",
                list: ["Visão Executiva (CMO)", "Expertise em Educação", "Cenário B2B/B2G"]
              },
              { 
                step: "03", 
                title: "Escopo de Atuação", 
                desc: "Implementação de ativos digitais premium (Landing Pages segmentadas) e operação contínua de campanhas robustas via Google e Meta Ads.",
                list: ["Growth Escalável", "Máquina de Vendas", "Base de Leads"]
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 border border-slate-200 shadow-sm flex flex-col"
              >
                <div className="w-10 h-1 bg-blue-700 mb-6" />
                <h3 className="text-xl font-bold mb-4 text-slate-900">{item.step}. {item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">{item.desc}</p>
                <ul className="space-y-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {item.list.map((li, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" /> {li}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Strategic Alignment */}
      <section id="alignment" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">2. Alinhamento Estratégico</h2>
            <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 text-blue-400 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Visão de Direção Executiva (CMO)</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    Liderança consolidada em marketing para instituições de treinamento profissional. 
                    Experiência direta no alinhamento entre infoprodutos e tração comercial em escala.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 text-blue-400 rounded-lg flex items-center justify-center">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Histórico Validado em Saúde</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    Expertise no desenvolvimento de guias profissionais e materiais educativos para ambiente pediátrico. 
                    Domínio total do tom de voz exigido pelo público de saúde e educação.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 p-10 border border-slate-700">
              <h4 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-4">Diferencial Estratégico</h4>
              <p className="text-xl font-light italic mb-8 leading-relaxed">
                &quot;Nossa liderança operacional e capacidade de execução estão respaldadas por uma visão sistêmica: 
                transformar propriedade intelectual em uma máquina de vendas robusta e escalável.&quot;
              </p>
              <div className="h-px bg-slate-700 mb-8" />
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-500" />
                  <span className="text-[10px] font-bold uppercase tracking-tighter">Segurança Jurídica</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-500" />
                  <span className="text-[10px] font-bold uppercase tracking-tighter">Conformidade B2G</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scope Section */}
      <section id="scope" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-700 mb-4 block">Capacidades</span>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Declaração de Escopo</h2>
            <p className="text-slate-500">Fases de implementação estratégica e operacional.</p>
          </div>

          <div className="space-y-16">
            {/* 3.1 Structural */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Settings className="w-5 h-5 text-blue-700" />
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest">3.1 Implementação Estrutural</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Branding Corporativo", desc: "Logotipo e Identidade Visual unificada para autoridade técnica.", icon: Layout, strategy: "AUTORIDADE CLÍNICA" },
                  { title: "Ativos Comerciais", desc: "Pitch Decks e templates premium para decisores de alto nível.", icon: FileText, strategy: "PADRÃO CORPORATIVO" },
                  { title: "Webdesign (LPs)", desc: "Páginas segmentadas e otimizadas para B2B e B2G.", icon: Globe, strategy: "TRAÇÃO COMERCIAL" },
                  { title: "Infra Educacional", desc: "Hospedagem, setup e automação da plataforma de cursos.", icon: BookOpen, strategy: "EXPERIÊNCIA FLUÍDA" },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 border border-slate-200 shadow-sm flex flex-col group">
                    <div className="w-8 h-0.5 bg-blue-700 mb-6 group-hover:w-full transition-all duration-500" />
                    <item.icon className="w-6 h-6 text-slate-400 mb-4" />
                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-500 mb-6 leading-relaxed">{item.desc}</p>
                    <div className="mt-auto pt-4 border-t border-slate-50">
                      <p className="text-[9px] font-black tracking-widest text-blue-700">{item.strategy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3.2 Continuous */}
            <div className="pt-16 border-t border-slate-200">
              <div className="flex items-center gap-3 mb-8">
                <Calendar className="w-5 h-5 text-blue-700" />
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest">3.2 Operação Contínua</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { 
                    title: "Direção de Conteúdo", 
                    desc: "Calendário editorial, roteiros técnicos para vídeos e redação especializada para LinkedIn e Instagram.",
                    metric: "Engajamento Corporativo" 
                  },
                  { 
                    title: "Gestão de Anúncios", 
                    desc: "Campanhas Google e Meta Ads focadas em gestores educacionais e executivos de RH.",
                    metric: "ROAS e CPL Qualificado" 
                  },
                  { 
                    title: "Plataforma & Suporte", 
                    desc: "Gestão de admissões, suporte técnico e emissão automatizada de certificados para fins públicos.",
                    metric: "NPS e Taxa de Conclusão" 
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-10 border border-slate-200 shadow-sm flex flex-col">
                    <h4 className="text-lg font-bold text-slate-900 mb-4">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed mb-8 flex-grow">{item.desc}</p>
                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[9px] font-black uppercase text-slate-400 tracking-tighter">MÉTRICA DE SUCESSO</span>
                      <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest">{item.metric}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Model & Commercial */}
      <section id="model" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div id="partnership">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-700 mb-4 block">Colaboração</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Modelo de Parceria</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Atuamos como um braço estratégico integrado ao seu time de expansão, 
                garantindo total conformidade técnica e transparência analítica.
              </p>
              <div className="space-y-3">
                <div className="flex flex-col gap-1 p-6 bg-white border border-slate-200">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">RESPONSABILIDADE CONTRATANTE</span>
                  <p className="text-sm font-bold text-slate-900">Custos diretos, ferramentas (CRM) e verba de anúncios.</p>
                </div>
                <div className="flex flex-col gap-1 p-6 bg-slate-900 border border-slate-800">
                  <span className="text-[10px] text-blue-400 uppercase font-bold tracking-tighter">RESPONSABILIDADE ASSESSORIA</span>
                  <p className="text-sm font-bold text-white">Mão de obra especializada e direção estratégica integral.</p>
                </div>
              </div>
            </div>

            <div id="commercial" className="bg-white border border-slate-200 p-10 shadow-2xl flex flex-col">
              <div className="flex justify-between items-start mb-10">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter mb-1">INVESTIMENTO MENSAL</span>
                  <span className="text-4xl font-bold text-slate-900">R$ 12.000,00</span>
                </div>
                <div className="h-10 w- px bg-slate-200" />
                <div className="flex flex-col items-end">
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter mb-1">PRAZO MÍNIMO</span>
                  <span className="text-4xl font-bold text-slate-900">05 Meses</span>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                {[
                  "Setup de infraestrutura diluído na operação",
                  "Gestão analítica de ROI e crescimento",
                  "Direção de arte e roteirização técnica"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{text}</p>
                  </div>
                ))}
              </div>

              <button className="w-full bg-blue-700 text-white font-bold text-xs uppercase tracking-widest py-5 rounded shadow-lg shadow-blue-200 hover:bg-blue-800 transition-all">
                Aceitar Proposta
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* About Us */}
      <section id="about" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">6. Quem Somos</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Liderada pela Guimarães Soluções e Produtos Digitais LTDA, nossa atuação foca no 
              desenho de sistemas automatizados que transformam conhecimento em ativos comerciais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Herbert */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 font-bold text-2xl">HG</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Herbert Guimarães</h3>
                  <p className="text-blue-600 font-semibold">Diretor de Receita</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Engenheiro com visão sistêmica e analítica aplicada à construção de funis. 
                Possui mais de 10 anos no setor educacional como professor acadêmico e autor técnico. 
                Ex-Analista de Negócios na <strong>Hotmart</strong> (BI e Growth). 
                Liderou o marketing do <strong>IEPSIS</strong>, <strong>PIMED</strong>, <strong>COMANDO IMPERIAL</strong> e coordenação técnica no <strong>SENAI</strong>.
              </p>
              <ul className="grid grid-cols-2 gap-2 mt-auto">
                <li className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
                  <CheckCircle2 className="w-3 h-3 text-green-500" /> +10 anos educação
                </li>
                <li className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
                  <CheckCircle2 className="w-3 h-3 text-green-500" /> Especialista BI/ROI
                </li>
                <li className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
                  <CheckCircle2 className="w-3 h-3 text-green-500" /> Autor Literário
                </li>
                <li className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
                  <CheckCircle2 className="w-3 h-3 text-green-500" /> Gestão Sistêmica
                </li>
              </ul>
            </div>

            {/* Mariangela */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600 font-bold text-2xl">M</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Mariangela</h3>
                  <p className="text-blue-600 font-semibold">Diretora de Criação</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Advogada e empresária com ampla vivência em posicionamento estratégico e estruturação de jornadas de compra. 
                Especialista em transformar conhecimento técnico denso em ofertas comerciais de alto valor, 
                gerindo funis de relacionamento, campanhas de lançamento e atração de leads qualificados.
              </p>
              <ul className="grid grid-cols-2 gap-2 mt-auto">
                <li className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
                  <CheckCircle2 className="w-3 h-3 text-green-500" /> Marketing Jurídico
                </li>
                <li className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
                  <CheckCircle2 className="w-3 h-3 text-green-500" /> Gestão de Funis
                </li>
                <li className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
                  <CheckCircle2 className="w-3 h-3 text-green-500" /> Copy Especializada
                </li>
                <li className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
                  <CheckCircle2 className="w-3 h-3 text-green-500" /> Design Estratégico
                </li>
              </ul>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-slate-200">
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900">50+</p>
              <p className="text-xs text-slate-500 uppercase font-black">Projetos</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900">R$ 10Mi+</p>
              <p className="text-xs text-slate-500 uppercase font-black">GMV Gerado</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900">1.5Mi</p>
              <p className="text-xs text-slate-500 uppercase font-black">Audiência Criada</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900">100+</p>
              <p className="text-xs text-slate-500 uppercase font-black">Análises BI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="bg-slate-900 p-2 rounded">
              <Rocket className="text-white w-4 h-4" />
            </div>
            <p className="font-bold text-slate-900">Guimarães Soluções Digitais</p>
          </div>
          <p className="text-slate-500 text-sm">
            © 2024 Guimarães Soluções e Produtos Digitais LTDA. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">LinkedIn</a>
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

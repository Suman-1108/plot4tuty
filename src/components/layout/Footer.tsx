'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1C2618] text-[#DCE6CE] pt-16 pb-10 border-t border-[#2C3826]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#2C3826]">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative h-12 w-12 rounded-full overflow-hidden bg-white border border-[#3C4E34] group-hover:border-[#B7E436] shadow-sm shrink-0 transition-all">
                <Image
                  src="/logo-round.png"
                  alt="PLOT 4 TUTY"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white leading-none">
                  PLOT 4 TUTY<span className="text-[#B7E436]">.</span>
                </span>
                <span className="text-[10px] font-bold text-[#8FA57C] tracking-widest uppercase mt-1">
                  FIND YOUR LAND. BUILD YOUR FUTURE.
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#A9BA99] leading-relaxed max-w-sm">
              Trazemos inteligência em análise fundiária, territorial e documentação com tecnologia de ponta. Delivering verified DTCP land layouts and high-growth investments across Thoothukudi, Tamil Nadu.
            </p>

            {/* Social Icons matching reference */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#273521] hover:bg-[#B7E436] hover:text-[#1C2618] text-[#CAD5BE] flex items-center justify-center text-xs font-bold transition-colors"
              >
                f
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-[#273521] hover:bg-[#B7E436] hover:text-[#1C2618] text-[#CAD5BE] flex items-center justify-center text-xs font-bold transition-colors"
              >
                ig
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-full bg-[#273521] hover:bg-[#B7E436] hover:text-[#1C2618] text-[#CAD5BE] flex items-center justify-center text-xs font-bold transition-colors"
              >
                x
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-[#273521] hover:bg-[#B7E436] hover:text-[#1C2618] text-[#CAD5BE] flex items-center justify-center text-xs font-bold transition-colors"
              >
                in
              </a>
            </div>
          </div>

          {/* Col 1: EMPRESA */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white tracking-widest uppercase">
              EMPRESA
            </h4>
            <ul className="space-y-2 text-xs text-[#A9BA99]">
              <li>
                <Link href="/about" className="hover:text-[#B7E436] transition-colors">
                  Institucional
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#B7E436] transition-colors">
                  Contato &amp; Plantão
                </Link>
              </li>
              <li>
                <Link href="/plots" className="hover:text-[#B7E436] transition-colors">
                  Buscar Imóvel
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#B7E436] transition-colors">
                  Empreendimentos
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: PLANOS PARA */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white tracking-widest uppercase">
              SOLUÇÕES
            </h4>
            <ul className="space-y-2 text-xs text-[#A9BA99]">
              <li>
                <span className="hover:text-[#B7E436] transition-colors cursor-pointer">
                  Instituições Financeiras
                </span>
              </li>
              <li>
                <span className="hover:text-[#B7E436] transition-colors cursor-pointer">
                  Cartórios de Registro
                </span>
              </li>
              <li>
                <span className="hover:text-[#B7E436] transition-colors cursor-pointer">
                  Aprovações DTCP &amp; TNRERA
                </span>
              </li>
              <li>
                <span className="hover:text-[#B7E436] transition-colors cursor-pointer">
                  Poder Judiciário &amp; Pareceres
                </span>
              </li>
              <li>
                <span className="hover:text-[#B7E436] transition-colors cursor-pointer">
                  Investidores &amp; NRIs
                </span>
              </li>
            </ul>
          </div>

          {/* Col 3: SERVIÇOS */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white tracking-widest uppercase">
              SERVIÇOS
            </h4>
            <ul className="space-y-2 text-xs text-[#A9BA99]">
              <li>
                <span className="hover:text-[#B7E436] transition-colors cursor-pointer">
                  Due Diligence Fundiária
                </span>
              </li>
              <li>
                <span className="hover:text-[#B7E436] transition-colors cursor-pointer">
                  Análise Topográfica
                </span>
              </li>
              <li>
                <span className="hover:text-[#B7E436] transition-colors cursor-pointer">
                  Regularização de Terrenos
                </span>
              </li>
              <li>
                <span className="hover:text-[#B7E436] transition-colors cursor-pointer">
                  Preservação de Áreas Verdes
                </span>
              </li>
              <li>
                <Link href="/admin" className="text-[11px] text-[#697B59] hover:text-[#B7E436] transition-colors">
                  Acesso Restrito Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Banner matching reference: Entre Em Contato */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-b border-[#2C3826] text-xs">
          <div>
            <h5 className="text-sm font-bold text-white mb-1">
              Entre Em Contato
            </h5>
            <p className="text-[#A9BA99] leading-snug">
              Tem dúvidas ou precisa de assistência? Estamos aqui para ajudar!
            </p>
          </div>

          <div>
            <h6 className="text-[11px] font-bold uppercase tracking-wider text-[#8FA57C] mb-1">
              ENDEREÇO
            </h6>
            <p className="text-white leading-snug">
              Palayamkottai Road, Near Collectorate, Thoothukudi, Tamil Nadu - 628008
            </p>
          </div>

          <div>
            <h6 className="text-[11px] font-bold uppercase tracking-wider text-[#8FA57C] mb-1">
              TELEFONE
            </h6>
            <a
              href="tel:+919842155678"
              className="text-white hover:text-[#B7E436] transition-colors font-medium"
            >
              +91 98421 55678 / +91 461 2345678
            </a>
          </div>

          <div>
            <h6 className="text-[11px] font-bold uppercase tracking-wider text-[#8FA57C] mb-1">
              EMAIL
            </h6>
            <a
              href="mailto:contact@plot4tuty.com"
              className="text-white hover:text-[#B7E436] transition-colors font-medium"
            >
              contact@plot4tuty.com
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#7E906E] gap-3">
          <p>
            © Plot 4 Tuty 2026. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/about" className="hover:text-white transition-colors">
              Help
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              Termos de serviço
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              Política de privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

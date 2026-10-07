/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, PortalTab } from './components/Navbar';
import { WebPortal } from './components/portal/WebPortal';
import { 
  ShieldCheck, 
  BookOpen,
  Phone,
  HelpCircle,
  ExternalLink,
  GraduationCap
} from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [activeTab, setActiveTab] = useState<PortalTab>('calc');

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500/20 selection:text-emerald-300">
      
      {/* Top Web Navbar with Full Portal Navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Area - Full-Width Web Portal Layout */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <WebPortal 
          lang={lang}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </main>

      {/* Comprehensive Egyptian University Admission Portal Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/95 py-10 text-xs text-slate-400 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-8 border-b border-slate-900 text-right">
            
            {/* Col 1: About Tanseeqi Portal */}
            <div className="space-y-2 md:col-span-2">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <div className="w-6 h-6 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-black text-xs">
                  ت
                </div>
                <span>{lang === 'ar' ? 'منصة تنسيقي 2026' : 'Tanseeqi Portal 2026'}</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed max-w-md">
                {lang === 'ar'
                  ? 'المنصة الذكية المعتمدة لإرشاد طلاب الثانوية العامة والشهادات الفنية والمعادلات، وحساب المجموع التراكمي وفق النظام الجديد (320 درجة) ونظام 410 الكلاسيكي، وتطبيق قواعد التوزيع الجغرافي والحدود الدنيا.'
                  : 'The comprehensive digital admission and coordination platform for Egyptian Thanaweya Amma and Technical Diploma graduates, featuring the 320/410 grading engines and zoning calculators.'}
              </p>
            </div>

            {/* Col 2: Quick Links */}
            <div className="space-y-2">
              <h4 className="text-white font-semibold text-xs">
                {lang === 'ar' ? 'أقسام المنصة' : 'Portal Sections'}
              </h4>
              <ul className="space-y-1.5 text-slate-400">
                <li>
                  <button onClick={() => setActiveTab('calc')} className="hover:text-emerald-400 transition-colors">
                    {lang === 'ar' ? 'حاسبة المجموع والتنسيق' : 'Admissions Calculator'}
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('tracker')} className="hover:text-emerald-400 transition-colors">
                    {lang === 'ar' ? 'تتبع مراحل التنسيق المباشرة' : 'Live Stages Tracker'}
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('diplomas')} className="hover:text-emerald-400 transition-colors">
                    {lang === 'ar' ? 'تنسيق الدبلومات والمعادلات' : 'Technical Diplomas Hub'}
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('directory')} className="hover:text-emerald-400 transition-colors">
                    {lang === 'ar' ? 'دليل الجامعات والكليات' : 'Universities Directory'}
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('faq')} className="hover:text-emerald-400 transition-colors">
                    {lang === 'ar' ? 'الأسئلة الشائعة وقواعد القبول' : 'Admissions FAQ'}
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Official Support & Contacts */}
            <div className="space-y-2">
              <h4 className="text-white font-semibold text-xs">
                {lang === 'ar' ? 'الجهات والمصادر الرسمية' : 'Official Authorities'}
              </h4>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <a 
                    href="https://tansik.digital.gov.eg" 
                    target="_blank" 
                    rel="noreferrer"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {lang === 'ar' ? 'بوابة التنسيق الإلكتروني' : 'Official Tansik Portal'}
                  </a>
                </li>
                <li className="flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{lang === 'ar' ? 'المجلس الأعلى للجامعات المصرية' : 'Supreme Council of Universities'}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{lang === 'ar' ? 'الخط الساخن لمكتب التنسيق: 15999' : 'Tansik Hotline: 15999'}</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Disclaimer & Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                {lang === 'ar' 
                  ? 'جميع البيانات استرشادية مبنية على القواعد والحدود الدنيا المعلنة رسمياً من وزارة التعليم العالي والبحث العلمي.' 
                  : 'All data is advisory based on official guidelines from the Ministry of Higher Education & Scientific Research.'}
              </span>
            </div>

            <div className="text-slate-400 text-[11px]">
              <span>© 2026 Tanseeqi · تنسيقي. {lang === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}

'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'id' | 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  id: {
    'nav.home': 'Beranda',
    'nav.about': 'Tentang',
    'nav.contact': 'Kontak',
    'hero.title': 'SafCom',
    'hero.subtitle': 'Membangun solusi teknologi masa depan dengan integritas dan inovasi.',
    'hero.contact': 'Hubungi Kami',
    'hero.learn': 'Pelajari Lebih Lanjut',
    'about.title': 'Tentang SafCom',
    'about.vision.title': 'Visi Kami',
    'about.vision.content': 'Menjadi pemimpin global dalam solusi teknologi inovatif yang mendorong kemajuan manusia dan keberlanjutan planet.',
    'about.mission.title': 'Misi Kami',
    'about.mission.content': 'Mengembangkan teknologi canggih yang etis, aman, dan bermanfaat bagi masyarakat, sambil membangun kemitraan yang kuat untuk mencapai hasil luar biasa.',
    'about.values.title': 'Nilai-Nilai Kami',
    'about.values.integrity.title': 'Integritas',
    'about.values.integrity.desc': 'Kami menjunjung standar tertinggi dalam kejujuran dan praktik etis di semua yang kami lakukan.',
    'about.values.collaboration.title': 'Kolaborasi',
    'about.values.collaboration.desc': 'Kami percaya pada kekuatan kerja tim dan kemitraan untuk mencapai hasil luar biasa.',
    'about.values.sustainability.title': 'Keberlanjutan',
    'about.values.sustainability.desc': 'Kami berkomitmen untuk menciptakan teknologi yang bermanfaat bagi manusia dan planet.',
    'about.milestones.title': 'Perjalanan Kami',
    'about.milestones.2018': 'Didirikan SafCom',
    'about.milestones.2020': 'Berkembang ke solusi cloud',
    'about.milestones.2022': 'Meluncurkan divisi penelitian AI',
    'about.milestones.2024': 'Mencapai sertifikasi ISO 27001',
    'about.cta': 'Bergabunglah dengan Kami',
    'about.cta.title': 'Mari Bangun Masa Depan Bersama',
    'about.cta.subtitle': 'Bergabunglah dengan kami dalam menciptakan solusi inovatif yang membuat perbedaan.',
    'about.cta.button': 'Hubungi Kami',
    'contact.title': 'Hubungi Kami',
    'contact.subtitle': 'Siap untuk memulai proyek Anda berikutnya? Mari kita diskusikan bagaimana kami dapat membantu Anda.',
    'contact.form.name': 'Nama',
    'contact.form.email': 'Email',
    'contact.form.message': 'Pesan',
    'contact.form.submit': 'Kirim Pesan',
    'contact.form.sending': 'Mengirim...',
    'contact.form.success': 'Pesan berhasil dikirim!',
    'contact.form.error': 'Terjadi kesalahan. Silakan coba lagi.',
    'contact.info.title': 'Informasi Kontak',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Telepon',
    'contact.info.address': 'Alamat',
    'contact.follow.title': 'Ikuti Kami',
    'contact.follow.linkedin': 'LinkedIn',
    'contact.follow.github': 'GitHub',
    'contact.follow.twitter': 'X',
    'contact.follow.instagram': 'Instagram',
    'footer.about.title': 'Tentang Kami',
    'footer.about.description': 'Kami adalah perusahaan teknologi yang berkomitmen untuk menciptakan solusi inovatif yang berdampak positif pada masyarakat dan planet.',
    'footer.quicklinks': 'Tautan Cepat',
    'footer.services': 'Layanan',
    'footer.contact': 'Kontak',
    'footer.follow': 'Ikuti Kami',
    'footer.copyright': '© {year} SafCom oleh Safar & Safarudin. Seluruh Hak Dilindungi.',
    'footer.services.web': 'Pengembangan Web',
    'footer.services.mobile': 'Aplikasi Mobile',
    'footer.services.cloud': 'Solusi Cloud',
    'footer.services.ai': 'AI & Machine Learning',
    'team.title': 'Temui Tim Kami',
    'team.subtitle': 'Innovator passion yang mendorong masa depan teknologi bersama',
    'team.autoplay.pause': 'Jeda Auto-putar',
    'team.autoplay.resume': 'Lanjutkan Auto-putar',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.title': 'SafCom',
    'hero.subtitle': 'Building future technology solutions with integrity and innovation.',
    'hero.contact': 'Contact Us',
    'hero.learn': 'Learn More',
    'about.title': 'About SafCom',
    'about.vision.title': 'Our Vision',
    'about.vision.content': 'To be a global leader in innovative technology solutions that drive human progress and planetary sustainability.',
    'about.mission.title': 'Our Mission',
    'about.mission.content': 'To develop advanced, ethical, and secure technologies that benefit society, while building strong partnerships to achieve extraordinary results.',
    'about.values.title': 'Our Values',
    'about.values.integrity.title': 'Integrity',
    'about.values.integrity.desc': 'We uphold the highest standards of honesty and ethical practices in everything we do.',
    'about.values.collaboration.title': 'Collaboration',
    'about.values.collaboration.desc': 'We believe in the power of teamwork and partnerships to achieve extraordinary results.',
    'about.values.sustainability.title': 'Sustainability',
    'about.values.sustainability.desc': 'We are committed to creating technology that benefits both people and the planet.',
    'about.milestones.title': 'Our Journey',
    'about.milestones.2018': 'Founded SafCom',
    'about.milestones.2020': 'Expanded to cloud solutions',
    'about.milestones.2022': 'Launched AI research division',
    'about.milestones.2024': 'Achieved ISO 27001 certification',
    'about.cta': 'Join Us',
    'about.cta.title': "Let's Build the Future Together",
    'about.cta.subtitle': 'Join us in creating innovative solutions that make a difference.',
    'about.cta.button': 'Contact Us',
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to start your next project? Let\'s discuss how we can help you.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message sent successfully!',
    'contact.form.error': 'An error occurred. Please try again.',
    'contact.info.title': 'Contact Information',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.address': 'Address',
    'contact.follow.title': 'Follow Us',
    'contact.follow.linkedin': 'LinkedIn',
    'contact.follow.github': 'GitHub',
    'contact.follow.twitter': 'X',
    'contact.follow.instagram': 'Instagram',
    'footer.about.title': 'About Us',
    'footer.about.description': 'We are a technology company committed to creating innovative solutions that positively impact society and the planet.',
    'footer.quicklinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.follow': 'Follow Us',
    'footer.copyright': '© {year} SafCom by Safar & Safarudin. All Rights Reserved.',
    'footer.services.web': 'Web Development',
    'footer.services.mobile': 'Mobile Apps',
    'footer.services.cloud': 'Cloud Solutions',
    'footer.services.ai': 'AI & Machine Learning',
    'team.title': 'Meet Our Team',
    'team.subtitle': 'Passionate innovators driving the future of technology together',
    'team.autoplay.pause': 'Pause Auto-play',
    'team.autoplay.resume': 'Resume Auto-play',
  },
  ja: {
    'nav.home': 'ホーム',
    'nav.about': '会社概要',
    'nav.contact': 'お問い合わせ',
    'hero.title': 'SafCom',
    'hero.subtitle': '誠実さと革新性で未来の技術ソリューションを構築します。',
    'hero.contact': 'お問い合わせ',
    'hero.learn': '詳細を見る',
    'about.title': 'SafComについて',
    'about.vision.title': '私たちのビジョン',
    'about.vision.content': '人間の進歩と地球の持続可能性を推進する革新的な技術ソリューションのグローバルリーダーとなること。',
    'about.mission.title': '私たちのミッション',
    'about.mission.content': '社会に利益をもたらす先進的で倫理的かつ安全な技術を開発し、卓越した成果を達成するための強力なパートナーシップを構築すること。',
    'about.values.title': '私たちの価値観',
    'about.values.integrity.title': '誠実さ',
    'about.values.integrity.desc': '私たちはすべてにおいて最高水準の誠実さと倫理的実践を維持します。',
    'about.values.collaboration.title': '協働',
    'about.values.collaboration.desc': '私たちはチームワークとパートナーシップの力を信じています。',
    'about.values.sustainability.title': '持続可能性',
    'about.values.sustainability.desc': '私たちは人間と地球の両方に利益をもたらす技術の創造に取り組んでいます。',
    'about.milestones.title': '私たちの軌跡',
    'about.milestones.2018': 'SafComを設立',
    'about.milestones.2020': 'クラウドソリューションに拡大',
    'about.milestones.2022': 'AI研究部門を立ち上げ',
    'about.milestones.2024': 'ISO 27001認証を取得',
    'about.cta': '私たちと一緒に',
    'about.cta.title': '一緒に未来を築きましょう',
    'about.cta.subtitle': '違いを生む革新的なソリューションの作成にご参加ください。',
    'about.cta.button': 'お問い合わせ',
    'contact.title': 'お問い合わせ',
    'contact.subtitle': '次のプロジェクトを開始する準備はできましたか？私たちがどのようにお手伝いできるか議論しましょう。',
    'contact.form.name': 'お名前',
    'contact.form.email': 'メールアドレス',
    'contact.form.message': 'メッセージ',
    'contact.form.submit': 'メッセージを送信',
    'contact.form.sending': '送信中...',
    'contact.form.success': 'メッセージが正常に送信されました！',
    'contact.form.error': 'エラーが発生しました。もう一度お試しください。',
    'contact.info.title': '連絡先情報',
    'contact.info.email': 'メール',
    'contact.info.phone': '電話',
    'contact.info.address': '住所',
    'contact.follow.title': 'フォローする',
    'contact.follow.linkedin': 'LinkedIn',
    'contact.follow.github': 'GitHub',
    'contact.follow.twitter': 'X',
    'contact.follow.instagram': 'Instagram',
    'footer.about.title': '会社概要',
    'footer.about.description': '私たちは、社会と地球にポジティブな影響を与える革新的なソリューションを作成することに取り組むテクノロジー企業です。',
    'footer.quicklinks': 'クイックリンク',
    'footer.services': 'サービス',
    'footer.contact': 'お問い合わせ',
    'footer.follow': 'フォローする',
    'footer.copyright': '© {year} SafCom by Safar & Safarudin. All Rights Reserved.',
    'footer.services.web': 'ウェブ開発',
    'footer.services.mobile': 'モバイルアプリ',
    'footer.services.cloud': 'クラウドソリューション',
    'footer.services.ai': 'AI & 機械学習',
    'team.title': 'チーム紹介',
    'team.subtitle': '情熱的なイノベーターが一緒にテクノロジーの未来を推進',
    'team.autoplay.pause': '自動再生を一時停止',
    'team.autoplay.resume': '自動再生を再開',
    'team.members.1.name': 'アレックス・ジョンソン',
    'team.members.1.role': '最高技術責任者',
    'team.members.1.bio': 'フルスタック開発の専門家で、10年以上の経験を持つ。スケーラブルなアーキテクチャとクラウドソリューションの設計を専門とする。',
    'team.members.2.name': 'サラ・チェン',
    'team.members.2.role': 'UX/UIデザイナー',
    'team.members.2.bio': 'ユーザビリティと美しさを融合させたデザインのスペシャリスト。ユーザーのニーズを理解し、革新的なソリューションを提供する。',
    'team.members.3.name': 'マイク・ロドリゲス',
    'team.members.3.role': 'バックエンド開発者',
    'team.members.3.bio': 'データベース設計とAPI開発のエキスパート。パフォーマンスとセキュリティを重視した堅牢なシステムを構築する。',
    'team.members.4.name': 'エマ・ウィリアムズ',
    'team.members.4.role': 'フロントエンド開発者',
    'team.members.4.bio': 'ReactとVue.jsのスペシャリスト。インタラクティブでレスポンシブなユーザーインターフェースを作成する。',
    'team.members.5.name': 'デイビッド・リー',
    'team.members.5.role': 'DevOpsエンジニア',
    'team.members.5.bio': 'CI/CDパイプラインとインフラ自動化の専門家。効率的で信頼性の高いデプロイメントプロセスを構築する。',
    'team.members.6.name': 'リサ・ガルシア',
    'team.members.6.role': 'プロジェクトマネージャー',
    'team.members.6.bio': 'アジャイル手法のエキスパート。チームをまとめ、プロジェクトを期限内に成功に導く。',
    'team.social.linkedin': 'LinkedIn',
    'team.social.github': 'GitHub',
    'team.social.twitter': 'Twitter',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Load language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['id', 'en', 'ja'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
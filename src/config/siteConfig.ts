/**
 * Site Configuration - 全站共用配置
 * 所有全站共用資訊從此處讀取，不得寫死在 HTML
 */

// Types
export interface SocialLink {
    platform: 'facebook' | 'instagram' | 'twitter' | 'linkedin' | 'youtube' | 'line';
    url: string;
    label: string;
}

export interface ContactInfo {
    phone: string;
    email: string;
    address: string;
    businessHours: string;
}

export interface NavItem {
    label: string;
    href: string;
    children?: NavItem[];
}

export interface FooterColumn {
    title: string;
    links: { label: string; href: string }[];
}

export interface SiteConfig {
    // 基本資訊
    name: string;
    description: string;
    tagline: string;
    url: string;
    locale: string;

    // SEO 預設值
    seo: {
        title: string;
        description: string;
        ogImage: string;
        twitterHandle?: string;
    };

    // 聯絡資訊
    contact: ContactInfo;

    // 社群連結
    socialLinks: SocialLink[];

    // 導航選單
    navigation: NavItem[];

    // Footer 設定
    footer: {
        columns: FooterColumn[];
        copyright: string;
    };
}

// ============================================
// Site Configuration - 請依專案需求修改以下內容
// ============================================

export const siteConfig: SiteConfig = {
    // 基本資訊
    name: 'Company Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tagline: 'Your tagline goes here',
    url: 'https://example.com',
    locale: 'zh-TW',

    // SEO 預設值
    seo: {
        title: 'Company Name | Your Tagline',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ogImage: '/og-image.jpg',
        twitterHandle: '@company',
    },

    // 聯絡資訊
    contact: {
        phone: '+886-2-1234-5678',
        email: 'contact@example.com',
        address: '台北市中山區xxx路xx號',
        businessHours: '週一至週五 09:00 - 18:00',
    },

    // 社群連結
    socialLinks: [
        { platform: 'facebook', url: 'https://facebook.com/company', label: 'Facebook' },
        { platform: 'instagram', url: 'https://instagram.com/company', label: 'Instagram' },
        { platform: 'line', url: 'https://line.me/ti/p/@company', label: 'LINE' },
    ],

    // 導航選單
    navigation: [
        { label: '首頁', href: '/' },
        { label: '關於我們', href: '/about' },
        { label: '服務項目', href: '/services' },
        { label: '最新消息', href: '/news' },
        { label: '聯絡我們', href: '/contact' },
    ],

    // Footer 設定
    footer: {
        columns: [
            {
                title: '快速連結',
                links: [
                    { label: '關於我們', href: '/about' },
                    { label: '服務項目', href: '/services' },
                    { label: '常見問題', href: '/faq' },
                ],
            },
            {
                title: '聯絡資訊',
                links: [
                    { label: '聯絡我們', href: '/contact' },
                    { label: '隱私權政策', href: '/privacy' },
                    { label: '服務條款', href: '/terms' },
                ],
            },
        ],
        copyright: '© 2024 Company Name. All rights reserved.',
    },
};

export default siteConfig;

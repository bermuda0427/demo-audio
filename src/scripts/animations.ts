/**
 * animations.ts - GSAP ScrollTrigger 動畫初始化
 * 使用 data-animate 屬性控制動畫類型
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Animation definitions
type AnimationType = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-up';

interface AnimationConfig {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
    duration: number;
    ease: string;
}

const animations: Record<AnimationType, AnimationConfig> = {
    'fade-up': {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power2.out',
    },
    'fade-in': {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
    },
    'slide-left': {
        opacity: 0,
        x: 60,
        duration: 0.8,
        ease: 'power2.out',
    },
    'slide-right': {
        opacity: 0,
        x: -60,
        duration: 0.8,
        ease: 'power2.out',
    },
    'scale-up': {
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        ease: 'power2.out',
    },
};

/**
 * Initialize scroll-triggered animations for all elements with data-animate attribute
 */
export function initAnimations(): void {
    const animatedElements = document.querySelectorAll<HTMLElement>('[data-animate]');

    animatedElements.forEach((el) => {
        const animationType = el.dataset.animate as AnimationType;
        const delay = parseFloat(el.dataset.animateDelay || '0');

        if (animations[animationType]) {
            const config = animations[animationType];

            // Set initial state (hidden)
            gsap.set(el, {
                opacity: config.opacity,
                y: config.y || 0,
                x: config.x || 0,
                scale: config.scale || 1,
            });

            // Create scroll-triggered animation
            gsap.to(el, {
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
                duration: config.duration,
                ease: config.ease,
                delay: delay,
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            });
        }
    });

    console.log(`[GSAP] Initialized ${animatedElements.length} animated elements`);
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
} else {
    // DOM already loaded
    initAnimations();
}

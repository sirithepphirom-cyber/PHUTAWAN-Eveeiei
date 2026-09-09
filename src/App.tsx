import { useState, useEffect, useCallback } from 'react';
import { SlideId, BestSellerProduct } from './types';
import { SLIDE_TABS } from './data/presentationData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Slide01ExecutiveOverview } from './components/Slide01ExecutiveOverview';
import { Slide02SalesChannelMix } from './components/Slide02SalesChannelMix';
import { Slide03TopBestSellers } from './components/Slide03TopBestSellers';
import { Slide04SeasonalityTrends } from './components/Slide04SeasonalityTrends';
import { Slide05StrategicGrowth } from './components/Slide05StrategicGrowth';
import { ProductDetailModal } from './components/ProductDetailModal';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState<SlideId>('03-top-best-sellers');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isAutoplay, setIsAutoplay] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<BestSellerProduct | null>(null);

  // Keyboard navigation handler
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Ignore if user is interacting with an input or modal is open
      if (selectedProduct && e.key === 'Escape') {
        setSelectedProduct(null);
        return;
      }

      const currentIndex = SLIDE_TABS.findIndex((s) => s.id === currentSlide);

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        if (currentIndex < SLIDE_TABS.length - 1) {
          setCurrentSlide(SLIDE_TABS[currentIndex + 1].id);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        if (currentIndex > 0) {
          setCurrentSlide(SLIDE_TABS[currentIndex - 1].id);
        }
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }
    },
    [currentSlide, selectedProduct]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Autoplay presentation timer
  useEffect(() => {
    if (!isAutoplay) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        const idx = SLIDE_TABS.findIndex((s) => s.id === prev);
        const nextIdx = (idx + 1) % SLIDE_TABS.length;
        return SLIDE_TABS[nextIdx].id;
      });
    }, 7000);

    return () => clearInterval(timer);
  }, [isAutoplay]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  return (
    <div className="bg-[#fbf9f4] font-body-lg text-[#1b1c19] min-h-screen flex flex-col antialiased selection:bg-[#ffddaf] selection:text-[#281800]">
      {/* Top Fixed Header */}
      <Header
        currentSlide={currentSlide}
        onSelectSlide={setCurrentSlide}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        isAutoplay={isAutoplay}
        onToggleAutoplay={() => setIsAutoplay((prev) => !prev)}
      />

      {/* Main Slide Presentation Viewport */}
      <main className="w-full pt-20 lg:pt-20 bg-[#fbf9f4] flex-1 min-h-[calc(100vh-5rem)] flex flex-col justify-between">
        <div className="flex-1 flex flex-col justify-center py-4">
          {currentSlide === '01-executive-overview' && (
            <Slide01ExecutiveOverview onNavigateSlide={setCurrentSlide} />
          )}
          {currentSlide === '02-sales-channel-mix' && (
            <Slide02SalesChannelMix onNavigateSlide={setCurrentSlide} />
          )}
          {currentSlide === '03-top-best-sellers' && (
            <Slide03TopBestSellers
              onSelectProduct={setSelectedProduct}
              onNavigateSlide={setCurrentSlide}
            />
          )}
          {currentSlide === '04-seasonality-trends' && (
            <Slide04SeasonalityTrends onNavigateSlide={setCurrentSlide} />
          )}
          {currentSlide === '05-strategic-growth' && (
            <Slide05StrategicGrowth onNavigateSlide={setCurrentSlide} />
          )}
        </div>

        {/* Running Executive Footer */}
        <Footer currentSlide={currentSlide} onSelectSlide={setCurrentSlide} />
      </main>

      {/* Product Scent Notes Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Quick Slide Navigation Overlay Helper */}
      <div className="fixed bottom-16 right-4 hidden md:flex items-center gap-1.5 bg-[#122d1a]/85 backdrop-blur-md text-white p-1.5 rounded-full shadow-lg border border-white/10 z-40">
        <button
          onClick={() => {
            const idx = SLIDE_TABS.findIndex((s) => s.id === currentSlide);
            if (idx > 0) setCurrentSlide(SLIDE_TABS[idx - 1].id);
          }}
          title="สไลด์ก่อนหน้า (← Arrow Left)"
          className="p-1 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
        </button>

        <span className="text-[11px] font-mono font-bold px-2 text-[#ffddaf]">
          Slide {SLIDE_TABS.findIndex((s) => s.id === currentSlide) + 1}
        </span>

        <button
          onClick={() => {
            const idx = SLIDE_TABS.findIndex((s) => s.id === currentSlide);
            if (idx < SLIDE_TABS.length - 1) setCurrentSlide(SLIDE_TABS[idx + 1].id);
          }}
          title="สไลด์ถัดไป (→ Arrow Right)"
          className="p-1 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}

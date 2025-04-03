import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

export interface CarouselBaseProps {
  /**
   * Additional CSS classes for the carousel container
   */
  className?: string;
  /**
   * Items to display in the carousel
   */
  items: React.ReactNode[];
  /**
   * Whether to show navigation buttons
   * @default true
   */
  showNavigation?: boolean;
  /**
   * Position of navigation buttons
   * @default "outside"
   */
  navigationPosition?: "inside" | "outside";
  /**
   * Whether to enable autoplay
   * @default false
   */
  autoplay?: boolean;
  /**
   * Autoplay interval in milliseconds
   * @default 3000
   */
  autoplayInterval?: number;
  /**
   * Callback when the active item changes
   */
  onSelect?: (index: number) => void;
  /**
   * Carousel options from embla-carousel
   */
  opts?: CarouselOptions;
  /**
   * Carousel plugins from embla-carousel
   */
  plugins?: CarouselPlugin;
  /**
   * Orientation of the carousel
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical";
}

export type CarouselProps = CarouselBaseProps &
  Omit<React.ComponentPropsWithoutRef<"div">, keyof CarouselBaseProps>;

/**
 * A carousel component for cycling through elements like a slideshow.
 */
export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      className,
      items,
      showNavigation = true,
      navigationPosition = "outside",
      autoplay = false,
      autoplayInterval = 3000,
      orientation = "horizontal",
      opts,
      plugins,
      onSelect,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    );

    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const [current, setCurrent] = React.useState(0);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );

    React.useEffect(() => {
      if (!api) return;

      const handleSelect = () => {
        setCanScrollPrev(api.canScrollPrev());
        setCanScrollNext(api.canScrollNext());
        setCurrent(api.selectedScrollSnap());
        onSelect?.(api.selectedScrollSnap());
      };

      handleSelect();
      api.on("reInit", handleSelect);
      api.on("select", handleSelect);

      return () => {
        api.off("select", handleSelect);
      };
    }, [api, onSelect]);

    React.useEffect(() => {
      if (autoplay && api) {
        const intervalId = setInterval(() => {
          api.scrollNext();
        }, autoplayInterval);

        return () => clearInterval(intervalId);
      }
    }, [api, autoplay, autoplayInterval]);

    return (
      <div
        ref={ref}
        onKeyDownCapture={handleKeyDown}
        className={cn(
          "relative",
          navigationPosition === "outside" &&
            (orientation === "horizontal" ? "px-12" : "py-12"),
          className
        )}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        <div ref={carouselRef} className="overflow-hidden h-full">
          <div
            className={cn(
              "flex h-full",
              orientation === "horizontal" ? "-ml-4 flex-row" : "-mt-4 flex-col"
            )}
          >
            {items.map((item, index) => (
              <div
                key={index}
                role="group"
                aria-roledescription="slide"
                data-slot="carousel-item"
                className={cn(
                  "min-w-0 shrink-0 grow-0 basis-full",
                  orientation === "horizontal" ? "pl-4" : "pt-4",
                  orientation === "vertical" && "h-full"
                )}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {showNavigation && (
          <>
            <button
              data-slot="carousel-previous"
              className={cn(
                "absolute size-8 rounded-full bg-background/80 backdrop-blur-sm border border-input hover:bg-accent hover:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-50",
                orientation === "horizontal"
                  ? navigationPosition === "outside"
                    ? "left-0 top-1/2 -translate-y-1/2"
                    : "left-4 top-1/2 -translate-y-1/2"
                  : navigationPosition === "outside"
                    ? "left-1/2 top-0 -translate-x-1/2 rotate-90"
                    : "left-1/2 top-4 -translate-x-1/2 rotate-90"
              )}
              disabled={!canScrollPrev}
              onClick={scrollPrev}
              aria-label="Previous slide"
            >
              <ArrowLeft className="size-4 m-auto" />
            </button>
            <button
              data-slot="carousel-next"
              className={cn(
                "absolute size-8 rounded-full bg-background/80 backdrop-blur-sm border border-input hover:bg-accent hover:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-50",
                orientation === "horizontal"
                  ? navigationPosition === "outside"
                    ? "right-0 top-1/2 -translate-y-1/2"
                    : "right-4 top-1/2 -translate-y-1/2"
                  : navigationPosition === "outside"
                    ? "left-1/2 bottom-0 -translate-x-1/2 rotate-90"
                    : "left-1/2 bottom-8 -translate-x-1/2 rotate-90"
              )}
              disabled={!canScrollNext}
              onClick={scrollNext}
              aria-label="Next slide"
            >
              <ArrowRight className="size-4 m-auto" />
            </button>
          </>
        )}

        {items.length > 1 && (
          <div
            className={cn(
              "absolute",
              orientation === "horizontal"
                ? "bottom-4 left-0 right-0"
                : "right-4 top-0 bottom-0 flex items-center"
            )}
          >
            <div
              className={cn(
                "flex gap-1",
                orientation === "horizontal" ? "justify-center" : "flex-col"
              )}
            >
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  className={cn(
                    "h-2 w-2 rounded-full transition-colors",
                    i === current ? "bg-primary" : "bg-neutral-300"
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
);

Carousel.displayName = "Carousel";

'use client'
import React, { useEffect, useRef, useState } from 'react';
import { CommentData } from "./constants";
import SingleCommentCard from "./singleCommentCard";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';

interface CommentSectionProps {
  comments: CommentData[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  const [emblaRef] = useEmblaCarousel({
    slidesToScroll: 1,
    align: 'start',
    loop: true,
  });

  const carouselNextRef = useRef<HTMLButtonElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPaused && carouselNextRef.current) {
        carouselNextRef.current.click();
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Carousel opts={{ align: "start", loop: true }} ref={emblaRef} className="w-full">
        <CarouselContent className="-ml-4">
          {comments.map((comment, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <SingleCommentCard comment={comment} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between">
          <CarouselPrevious className="relative -left-10" />
          <CarouselNext ref={carouselNextRef} className="relative -right-10" />
        </div>
      </Carousel>
    </div>
  );
};

export default CommentSection;
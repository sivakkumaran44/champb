"use client";
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData }  from 'next/image';
import ipsIcon from '@/public/assets/img/ibs.webp'; 
import spiIcon from '@/public/assets/img/spi.webp'; 
import spsIcon from '@/public/assets/img/sps.webp'; 
import nbeIcon from '@/public/assets/img/nbe.webp'; 
import ibsIcon from '@/public/assets/img/ibs.webp'; 
interface ExamCardProps {
  name: string;
  icon?: string;
  imageSrc?: StaticImageData;
}
const exams = [
  { name: "IBPS PO", imageSrc: spiIcon },
  { name: "IBPS Clerk", imageSrc: spsIcon },
  { name: "SBI PO", imageSrc: spsIcon },
  { name: "SBI Clerk", imageSrc: nbeIcon },
  { name: "SSC CHSL", imageSrc: ibsIcon },
  { name: "SSC CGL", imageSrc: spsIcon },
  { name: "NEET UG", imageSrc: ipsIcon },
  { name: "IPS", imageSrc: ipsIcon }, 
];
const ExamCard: React.FC<ExamCardProps> = ({ name, icon, imageSrc }) => (
  <Card className="inline-block w-54 bg-emerald-50 shadow-sm hover:shadow-md transition-shadow duration-300 flex-shrink-0">
    <CardContent className="flex items-center p-4 space-x-3">
      {imageSrc ? (
        <Image src={imageSrc} alt={name} width={32} height={32} /> 
      ) : (
        <div className="text-2xl">{icon}</div> 
      )}
      <span className="text-sm font-medium text-gray-700">{name}</span>
    </CardContent>
  </Card>
);
const RunningExamCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const scrollContent = contentRef.current;
    if (!scrollContainer || !scrollContent) return;
    const cardWidth = 240; 
    const totalWidth = exams.length * cardWidth;
    const cloneCards = () => {
      const currentCards = Array.from(scrollContent.children) as HTMLElement[];
      currentCards.forEach(card => {
        const clone = card.cloneNode(true) as HTMLElement;
        scrollContent.appendChild(clone);
      });
    };
    cloneCards(); 
    let scrollPosition = 0;
    const scroll = () => {
      scrollPosition += 1;
      if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft = scrollPosition;
      }
      if (scrollPosition > totalWidth - scrollContainer.offsetWidth) {
        cloneCards();
      }
      while (scrollContent.children.length > exams.length * 3) {
        scrollContent.removeChild(scrollContent.firstChild as ChildNode);
      }
    };
    const intervalId = setInterval(scroll, 20);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div 
      ref={scrollRef}
      className="w-full overflow-hidden p-4"
    >      <div 
        ref={contentRef}
        className="flex space-x-4"
      >
        {exams.map((exam, index) => (
          <ExamCard key={index} {...exam} />
        ))}
      </div>
    </div>
  );
};
export default RunningExamCarousel;

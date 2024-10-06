"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import Image, { StaticImageData } from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import ipsIcon from '@/public/assets/img/pngwing.com (4).png';
import spiIcon from '@/public/assets/img/pngwing.com (5).png';
import spsIcon from '@/public/assets/img/pngwing.com (6).png';
import nbeIcon from '@/public/assets/img/pngwing.com (7).png';
import ibsIcon from '@/public/assets/img/pngwing.com (8).png';

interface ExamCardProps {
  name: string;
  imageSrc: StaticImageData; 
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

const ExamCard: React.FC<ExamCardProps> = ({ name, imageSrc }) => (
  <Card className="inline-block w-54 bg-emerald-50 shadow-sm hover:shadow-md transition-shadow duration-300 flex-shrink-0 mx-2">
    <CardContent className="flex items-center p-4 space-x-3">
      <Image src={imageSrc} alt={name} width={32} height={32} />
      <span className="text-sm font-medium text-gray-700">{name}</span>
    </CardContent>
  </Card>
);

const RunningExamCarousel: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, watchDrag: false }, [
    AutoScroll({ playOnInit: true, speed: 2 }),
  ]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {exams.concat(exams).map((exam, index) => (
          <ExamCard key={index} {...exam} />
        ))}
      </div>
    </div>
  );
};

export default RunningExamCarousel;

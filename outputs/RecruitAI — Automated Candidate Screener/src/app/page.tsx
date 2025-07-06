typescript
// HeroSection.tsx
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const HeroSection = ({ title, subtitle, imageUrl }: HeroSectionProps) => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center px-6 space-y-12 lg:space-y-0 lg:space-x-12">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl lg:text-5xl leading-tight">{title}</h2>
          <p className="text-2xl lg:text-3xl leading-relaxed mb-8">{subtitle}</p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Image
            width={500}
            height={500}
            src={imageUrl}
            alt="Hero Section Image"
            className="object-cover object-center rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
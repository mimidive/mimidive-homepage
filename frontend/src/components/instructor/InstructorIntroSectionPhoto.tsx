import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
};

export function InstructorIntroSectionPhoto({ src, alt }: Props) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] ring-1 ring-[#5F7C8A]/12">
      <div className="flex justify-center">
        <Image
          src={src}
          alt={alt}
          width={682}
          height={1024}
          className="block h-auto w-full max-w-md sm:max-w-lg md:max-w-xl"
          sizes="(max-width: 768px) 100vw, 36rem"
        />
      </div>
    </div>
  );
}

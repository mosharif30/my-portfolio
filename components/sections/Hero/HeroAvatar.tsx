import Image from "next/image";

type HeroAvatarProps = {
  photo: string;
  name: string;
};

export function HeroAvatar({ photo, name }: HeroAvatarProps) {
  return (
    <div className="rise order-first w-36 md:order-none md:w-56 lg:w-72">
      <Image
        src={photo}
        alt={`Portrait of ${name}`}
        width={742}
        height={742}
        priority
        sizes="(min-width: 1024px) 288px, (min-width: 768px) 224px, 144px"
        className="rounded-3xl border border-line"
      />
    </div>
  );
}

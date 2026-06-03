import Image from "next/image";
import { notFound } from "next/navigation";
import { Footer, Navigation } from "@/app/components/layout";
import { teamMembers } from "@/app/lib/constants";

interface TeamMemberPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  const { id } = await params;

  const member = teamMembers.find((item) => item.id.toString() === id);

  if (!member) {
    notFound();
  }

  const [firstName, ...lastParts] = member.name.split(" ");
  const lastName = lastParts.join(" ");

  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      <div className="pt-32 sm:pt-36 lg:pt-44 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[80%] mx-auto">
          <div className="mb-10">
            <h1 className="heading-hero mb-4 sm:mb-6">
              {firstName}{" "}
              <span className="underline decoration-accent-purple decoration-4 underline-offset-8">
                {lastName}
              </span>
            </h1>

            <p className="text-accent-purple font-sans font-semibold uppercase tracking-[0.24em] text-sm sm:text-base lg:text-lg">
              {member.role}
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.70fr_1.30fr] items-stretch">
            <div className="bg-[#d6e2fb] rounded-[40px] overflow-hidden shadow-[0_40px_80px_rgba(133,98,183,0.18)] h-full">
              <div className="relative w-full h-full min-h-[470px] md:min-h-[550px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-6 font-semibold text-deep-purple py-6 lg:py-8">
              {member.bio.split("\n\n").map((paragraph) => (
                <p
                  key={`${member.id}-${paragraph}`}
                  className="text-base sm:text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

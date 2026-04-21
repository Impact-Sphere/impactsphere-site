import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const args = process.argv.slice(2);
  const email = args.find((arg) => arg.startsWith("--email="))?.split("=")[1];

  if (!email) {
    console.log("Usage: npx tsx prisma/seed.ts --email=user@example.com");
    console.log("Or: npm run db:seed -- --email=user@example.com");
    process.exit(1);
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    console.log(`User with email ${email} not found.`);
    process.exit(1);
  }

  await prisma.user.update({
    where: { email },
    data: { role: "admin" },
  });

  console.log(`User ${email} has been promoted to admin.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

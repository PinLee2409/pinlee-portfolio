import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/content";
import CodeBackdrop from "@/components/CodeBackdrop";
import Rail from "@/components/Rail";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Stack from "@/components/Stack";
import Path from "@/components/Path";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <>
      <CodeBackdrop />
      <Rail dict={dict} lang={lang} />
      <div className="shell">
        <main>
          <Hero dict={dict} />
          <Work dict={dict} />
          <Stack dict={dict} />
          <Path dict={dict} />
          <Contact dict={dict} />
        </main>
        <Footer dict={dict} />
      </div>
    </>
  );
}

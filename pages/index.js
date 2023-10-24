import Voice from "@/components/Voice";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>RvTrium</title>
      </Head>

      <div class="grid grid-cols-1 md:grid-cols-2">
        <div>
          <Voice />
        </div>
        <div>er1</div>
      </div>
    </>
  );
}

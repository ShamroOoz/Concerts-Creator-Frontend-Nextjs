import Layout from "@/components/Layout";
import { NEXT_URL } from "@/config/index";

export default function Home({ data }) {
  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`${NEXT_URL}/api/events`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

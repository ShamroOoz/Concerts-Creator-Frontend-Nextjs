import Layout from "@/components/Layout";
import { NEXT_URL } from "@/config/index";

export default function EventPage() {
  return (
    <Layout>
      <h1>My Event</h1>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${NEXT_URL}/api/events`);
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ query: { slug } }) {
  const res = await fetch(`${NEXT_URL}/api/events/${slug}`);
  const data = await res.json();
  return {
    props: { data },
  };
}

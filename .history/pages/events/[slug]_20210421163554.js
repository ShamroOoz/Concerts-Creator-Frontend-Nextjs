import Layout from "@/components/Layout";
import { NEXT_URL } from "@/config/index";

export default function EventPage({ evt }) {
  console.log(evt);
  return (
    <Layout>
      <h1>{evt.name}</h1>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${NEXT_URL}/api/events`);
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${NEXT_URL}/api/events/${slug}`);
  const { data } = await res.json();
  return { props: { evt: data[0] }, revalidate: 1 };
}
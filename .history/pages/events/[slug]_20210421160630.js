import Layout from "@/components/Layout";

export default function EventPage() {
  return (
    <Layout>
      <h1>My Event</h1>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`https://.../data`);
  const data = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}

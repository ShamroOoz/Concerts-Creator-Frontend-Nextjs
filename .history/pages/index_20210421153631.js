import Layout from "@/components/Layout";

export default function Home({ data }) {
  console.log(data);
  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`/api/events`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

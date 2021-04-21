import Layout from "@/components/Layout";
import Link from "next/link";
import { API_URL } from "@/config/index";
import styles from "@/styles/Form.module.css";

export default function EditPage({ evt }) {
  console.log(evt);
  return (
    <Layout title="Edit Event">
      <Link href="/events">Go Back</Link>
    </Layout>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const res = await fetch(`${API_URL}/events?id=${id}`);
  const data = await res.json();
  return { props: { evt: data[0] } };
}

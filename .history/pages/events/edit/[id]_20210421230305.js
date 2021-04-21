import Layout from "@/components/Layout";
import Link from "next/link";

export default function EditPage() {
  return (
    <Layout title="Add New Event">
      <Link href="/events">Go Back</Link>
    </Layout>
  );
}

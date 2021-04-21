import qs from "qs";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import { API_URL } from "@/config/index";

export default function SearchPage({ events }) {
  const router = useRouter();

  return (
    <Layout title="Search Results">
      <Link href="/events">Go Back</Link>
    </Layout>
  );
}

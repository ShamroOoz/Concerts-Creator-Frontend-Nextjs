import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import styles from "@/styles/Event.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NEXT_URL, API_URL } from "@/config/index";
import Skeleton from "@/components/Skeleton";

export default function EventPage({ evt }) {
  if (!evt) return <Skeleton />;
  return (
    <Layout>
      <h1>My Event</h1>
      <div className={styles.event}>
        <span>
          {new Date().toLocaleDateString("en-US")} at {evt.time}
        </span>
        <h1>{evt.name}</h1>
        <ToastContainer />
        {evt.image && (
          <div className={styles.image}>
            <Image src={evt.image.url} width={960} height={600} />
          </div>
        )}

        <h3>Performers:</h3>
        <p>{evt.performers}</p>
        <h3>Description:</h3>
        <p>{evt.description}</p>
        <h3>Venue: {evt.venue}</h3>
        <p>{evt.address}</p>

        <Link href="/events">
          <a className={styles.back}>{"<"} Go Back</a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/events`);
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/events?slug=${slug}`);
  const data = await res.json();

  if (!data.length) {
    return {
      redirect: {
        destination: "/events",
        permanent: false,
      },
    };
  }
  return { props: { evt: data[0] }, revalidate: 1 };
}

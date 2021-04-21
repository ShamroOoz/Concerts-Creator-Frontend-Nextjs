import Layout from "@/components/Layout";
import { NEXT_URL } from "@/config/index";
import EventItem from "@/components/EventItem";

export default function Home({ data }) {
  return (
    <Layout>
      <h1>Recents Events</h1>
      {data.length === 0 && <h3>No events to show</h3>}

      {data.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      {data.length > 0 && (
        <Link href="/events">
          <a className="btn-secondary">View all events</a>
        </Link>
      )}
    </Layout>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`${NEXT_URL}/api/events`);
  const data = await res.json();
  return {
    props: { data: data.slice(0, 3) },
    revalidate: 1,
  };
}

import Layout from "@/components/Layout";
import { NEXT_URL, API_URL } from "@/config/index";
import EventItem from "@/components/EventItem";

export default function EventsPage({ data }) {
  return (
    <Layout>
      <h1>Events</h1>
      {data.length === 0 && <h3>No events to show</h3>}

      {data.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`${API_URL}/events`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

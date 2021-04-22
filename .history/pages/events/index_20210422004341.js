import Layout from "@/components/Layout";
import { NEXT_URL, API_URL, PER_PAGE } from "@/config/index";
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

export async function getServerSideProps({ query: { page = 1 } }) {

  // Calculate start page
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  // Fetch total/count
  const totalRes = await fetch(`${API_URL}/events/count`)
  const total = await totalRes.json()

  // Fetch events
  const eventRes = await fetch(
    `${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`
  )
  const events = await eventRes.json()

  return {
    props: { events, page: +page, total },
  }
}
© 2021 GitHub, Inc.
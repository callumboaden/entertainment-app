import Layout from "../components/Layout";
import Grid from "../components/Grid";

export default function TvSeriesPage({
  data,
  handleSearch,
  toggleBookmark,
  query,
}) {
  const tvSeries = data.filter(
    (item) =>
      item.category === "TV Series" &&
      item.title.toLowerCase().includes(query.toLowerCase())
  );

  const title = !query
    ? `TV Series`
    : `Found ${tvSeries.length} results for '${query}'`;

  return (
    <Layout
      handleSearch={handleSearch}
      query={query}
      title="TV Series | Entertainment App"
      description="Search for TV series"
    >
      <h1>{title}</h1>
      <Grid items={tvSeries} toggleBookmark={toggleBookmark} />
    </Layout>
  );
}

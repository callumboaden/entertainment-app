import Layout from "../components/Layout";
import Grid from "../components/Grid";

export default function MoviesPage({ data, handleSearch, query }) {
  const movies = data.filter(
    (item) =>
      item.category === "Movie" &&
      item.title.toLowerCase().includes(query.toLowerCase())
  );

  const title = !query
    ? `Movies`
    : `Found ${movies.length} results for '${query}'`;

  return (
    <Layout
      handleSearch={handleSearch}
      query={query}
      title="Movies | Entertainment App"
      description="Search for movies"
    >
      <h1>{title}</h1>
      <Grid items={movies} />
    </Layout>
  );
}

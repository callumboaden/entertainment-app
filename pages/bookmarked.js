import Layout from "../components/Layout";
import Grid from "../components/Grid";

export default function BookmarksPage({
  data,
  toggleBookmark,
  handleSearch,
  query,
}) {
  const movies = data.filter(
    (item) => item.category === "Movie" && item.isBookmarked
  );

  const tvSeries = data.filter(
    (item) => item.category === "TV Series" && item.isBookmarked
  );

  const filteredItems = data.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) &&
      item.isBookmarked
  );

  return (
    <Layout
      handleSearch={handleSearch}
      query={query}
      title="Bookmarked Shows | Entertainment App"
      description="Search for bookmarked shows"
    >
      {!query ? (
        <div>
          <h1>Bookmarked Movies</h1>
          <Grid items={movies} toggleBookmark={toggleBookmark} />

          <h2>Bookmarked TV Series</h2>
          <Grid items={tvSeries} toggleBookmark={toggleBookmark} />
        </div>
      ) : (
        <div>
          <h1>{`Found ${filteredItems.length} results for '${query}'`}</h1>
          <Grid items={filteredItems} />
        </div>
      )}
    </Layout>
  );
}

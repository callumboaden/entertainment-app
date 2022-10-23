import Layout from "../components/Layout";
import Grid from "../components/Grid";
import Slider from "../components/Slider";

export default function HomePage({ data, toggleBookmark }) {
  const recommended = data.filter((item) => !item.isTrending);
  const trending = data.filter((item) => item.isTrending);

  return (
    <Layout>
      <h1>Trending</h1>
      <Slider items={trending} toggleBookmark={toggleBookmark} />
      <h2>Recommended for you</h2>
      <Grid items={recommended} toggleBookmark={toggleBookmark} />
    </Layout>
  );
}

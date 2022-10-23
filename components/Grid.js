import Thumbnail from "../components/Thumbnail";

export default function Grid({ items, toggleBookmark }) {
  const style = {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    marginBottom: "4rem",
  };

  return (
    <section style={style}>
      {items.map((item, i) => (
        <Thumbnail
          key={i}
          item={item}
          toggleBookmark={toggleBookmark}
        ></Thumbnail>
      ))}
    </section>
  );
}

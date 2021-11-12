import MostPopularItem from "./MostPopularItem";
const MostPopularList = () => {
  const mostPopularDatas = [
    {
      key: "0",
      image_url: "https://via.placeholder.com/150",
      information: "Lorem ipsum dolor sit amet, consetetur "
    },
    {
      key: "1",
      image_url: "https://via.placeholder.com/150",
      information: "Lorem ipsum dolor sit amet, consetetur "
    },
    {
      key: "2",
      image_url: "https://via.placeholder.com/150",
      information: "Lorem ipsum dolor sit amet, consetetur "
    },
    {
      key: "3",
      image_url: "https://via.placeholder.com/150",
      information: "Lorem ipsum dolor sit amet, consetetur "
    }
  ];
  return (
    <div className="op">
      <h1>Most Popular</h1>
      {mostPopularDatas.map((mostPopularData) => (
        <MostPopularItem key={mostPopularData.key} {...mostPopularData} />
      ))}
    </div>
  );
};

export default MostPopularList;

import ResentItem from "./ResentItem";
const ResentList = () => {
  const aboveResentTitle = {
    key: "0",
    image_url: "https://via.placeholder.com/150",
    information: "Lorem ipsum dolor sit amet, consetetur "
  };
  const ResentDatas = [
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
      <ResentItem key={aboveResentTitle.key} {...aboveResentTitle}></ResentItem>
      <h1>Resent</h1>
      {ResentDatas.map((ResentData) => (
        <ResentItem key={ResentData.key} {...ResentData} />
      ))}
    </div>
  );
};

export default ResentList;

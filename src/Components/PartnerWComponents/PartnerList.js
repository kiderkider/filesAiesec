import PartnerItem from "./PartnerItem";
const PartnerList = () => {
  const partnerDatas = [
    {
      key: 0,
      partnerTitle: "Global",
      title: "title01",
      content: "a lorem ipsum content",
      imgOne: "https://via.placeholder.com/150",
      imgTwo: "https://via.placeholder.com/150",
      imgThree: "https://via.placeholder.com/150",
      imgFour: "https://via.placeholder.com/150"
    },
    {
      key: 1,
      partnerTitle: "Regional",
      title: "title02",
      content: "a lorem ipsum content",
      imgOne: "https://via.placeholder.com/150",
      imgTwo: "https://via.placeholder.com/150",
      imgThree: "https://via.placeholder.com/150",
      imgFour: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div>
      <h1>Our Partners</h1>
      {partnerDatas.map((partnerData) => (
        <PartnerItem
          key={partnerData.key}
          condition={partnerData.key % 2 === 0 ? true : false}
          {...partnerData}
        />
      ))}
    </div>
  );
};
export default PartnerList;

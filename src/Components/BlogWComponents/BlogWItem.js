const BlogWItem = (props) => {
  return (
    <div manage={props.keye} onClick={() => props.onChange(props.keye)}>
      <img src={props.image_url} alt="img_url" />
      <p>{props.information}</p>
    </div>
  );
};
export default BlogWItem;

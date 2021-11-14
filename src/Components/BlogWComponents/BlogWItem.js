const BlogWItem = (props) => {
  return (
    <div>
      <img src={props.image_url} alt="img_url" /> <p>{props.information}</p>
    </div>
  );
};
export default BlogWItem;

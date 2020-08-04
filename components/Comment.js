const Comment = ({ name = "", body = "" }) => {
  return (
    <section>
      <h4>{name}</h4>
      <p>{body}</p>

      <style jsx>
        {`
          section {
            background: #efefef;
            padding: 10px;
            margin: 10px;
            width: 1000px;
            border-radius: 10px;
          }

          h4 {
            color: #2c2c54;
          }
          p {
            color: #333;
          }
        `}
      </style>
    </section>
  );
};
export default Comment;

import Layout from "../../components/Layout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import Comment from "../../components/Comment";
const Post = ({ comments }) => {
  const router = useRouter();
  const { body, title } = router.query;
  return (
    <Layout title={title}>
      <p>{body}</p>
      <div className="separator" />
      <h3>Comments</h3>

      {comments.map(comment => (
        <Comment name={comment.name} body={comment.body} key={comment.id} />
      ))}

      <style jsx>
        {`
          p {
            color: #444;
            max-width: 500px;
            margin: auto;
          }
          .separator {
            background: #ddd;
            height: 1px;
            width: 80%;
            margin: 10px 0;
          }
        `}
      </style>
    </Layout>
  );
};
export default Post;

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${slug}`
  );
  const data = await res.json();
  return {
    props: {
      comments: data,
    },
  };
}

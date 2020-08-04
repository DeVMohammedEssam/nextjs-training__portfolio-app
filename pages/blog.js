import Link from "next/link";
import fetch from "isomorphic-unfetch";
const PostItem = ({ title = "", id, slug = "", body }) => {
  return (
    <li>
      <Link
        href={`/post/[slug]?title=${title}&body=${body}`}
        as={`/post/${id}`}
      >
        <a>{title}</a>
      </Link>
    </li>
  );
};
const Blog = ({ posts = [] }) => {
  return (
    <>
      <h4> Posts </h4>
      <ul>
        {posts.map(post => {
          const title = post.title.split(" ") || "";
          return (
            <>
              <PostItem
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
                slug={title[0] + "-" + title[1]}
              />
              <br />
            </>
          );
        })}
      </ul>
    </>
  );
};

export default Blog;
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}

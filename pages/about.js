import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Error from "./_error";
const About = ({ githubAcc }) => {
  if (githubAcc.statusCode !== 200)
    return <Error errorMsg={`${githubAcc.statusCode} user was not found `} />;
  return (
    <Layout title="About Me">
      <>
        <h3>{githubAcc.name}</h3>
        <img src={githubAcc.avatar} alt="Github profile pic" />
      </>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://api.github.com/users/DeVMohammedEssam");
  const statusCode = res.status;
  const data = await res.json();
  if (statusCode === 200) {
    return {
      props: {
        githubAcc: { name: data.name, avatar: data.avatar_url, statusCode },
      },
    };
  } else {
    return {
      props: {
        githubAcc: { statusCode },
      },
    };
  }
}

export default About;

import Layout from "../components/Layout";

const Error = ({ errorMsg = "page is not found" }) => (
  <Layout title="Error!">
    <h3>{errorMsg}</h3>
  </Layout>
);

export default Error;

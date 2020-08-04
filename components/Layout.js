import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", url => {
  NProgress.start();
  console.log(`Loading: ${url}`);
});
Router.events.on("routeChangeComplete", url => {
  NProgress.done();
});
Router.events.on("routeChangeError", (err, url) => {
  console.log(err, url);
});
const Layout = ({ children, title }) => {
  return (
    <div className="layout">
      <Head>
        <title>Mohammed's portfolio</title>
      </Head>

      <header>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/hireme">
          <a>Hireme</a>
        </Link>
      </header>
      <main className="layout__content">
        <h1 className="layout__title">{title}</h1>

        {children}
      </main>
      <footer>&copy; {new Date().getFullYear()}</footer>

      <style jsx>{`
        .layout {
          height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .layout__content {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
        }
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          background-color: #2980b9;
          margin-top: 2px;
        }
        header a {
          color: #fff;
          text-decoration: none;
        }
        header a:hover {
          color: #ddd;
        }

        footer {
          background-color: #7f8c8d;
          min-height: 100px;
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default Layout;

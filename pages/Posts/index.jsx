import React, { useState, useEffect } from "react";

import Head from "next/head";
import Link from "next/link";
import { api } from "../../services/api";
import PostContent from '../postContent'

export default function Posts({ category, id }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/all_posts").then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Guifólico News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">GitHub News</h1>
        <p className="description">Um site para quem não tem tempo. <br /> Sem anúncios. <br /> Direto ao ponto :)</p>
        {posts.map((post) => (
          <div className="grid">
            <div className="card">
              <p
                style={{
                  borderWidth: 1,
                  borderRadius: 15,
                  borderStyle: "solid",
                  maxWidth: "28%",
                  backgroundColor: post.color,
                  color: "white",
                  fontWeight: "bold",
                  padding: 8,
                  marginBottom: 20,
                  textAlign: 'center'
                }}
              >
                {post.category}
              </p>
              <Link href="postContent" passHref>
                <h3 key={post.id}>{post.title} &rarr;</h3>
              </Link>
              <h5 style={{ fontSize: 12, fontFamily: "unset" }}>
                Postador por: {post.author}, <br /> Data: {post.date}
              </h5>
              <p style={{ fontSize: 16 }}>{post.content}</p>
            </div>
          </div>
        ))}
      </main>

      <footer></footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 850px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          width: 25%;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

import Head from "next/head";

export default function Home() {
  const mainStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    background:
      "linear-gradient(135deg, rgb(29 167 21) 0%, rgb(255 100 0) 100%)",
    fontFamily:
      'Montserrat, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
  };

  const cardStyle = {
    background: "rgba(255,255,255,0.12)",
    padding: "2.5rem 3rem",
    borderRadius: "14px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
    backdropFilter: "blur(8px)",
    textAlign: "center",
    maxWidth: "920px",
    width: "100%",
  };

  const headingStyle = {
    margin: 0,
    color: "#fff",
    fontFamily: "Montserrat, serif",
    fontSize: "clamp(1.6rem, 4vw, 3.4rem)",
    lineHeight: 1.05,
    fontWeight: 700,
    textShadow: "0 6px 18px rgba(0,0,0,0.24)",
  };

  const subStyle = {
    marginTop: "1rem",
    color: "rgba(255,255,255,0.92)",
    fontSize: "1rem",
    opacity: 0.95,
  };

  return (
    <>
      <Head>
        <title>Juliana</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&family=Playfair+Display:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main style={mainStyle}>
        <div style={cardStyle}>
          <h1 style={headingStyle}>
            Juliana, te amo do tanto que tu testa minha paciência 🌹
          </h1>
          <p style={subStyle}>- do seu amo</p>
        </div>
      </main>
    </>
  );
}

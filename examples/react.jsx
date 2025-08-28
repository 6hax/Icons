import React, { useState } from "react";


function Icon({ src, label }) {
  return (
    <div style={styles.iconCard}>
      <img src={src} alt={label} style={styles.iconImg} />
      <span style={styles.iconLabel}>{label}</span>
    </div>
  );
}

export default function App() {
  const [category, setCategory] = useState("static");

  const staticIcons = [
    { src: "../static/Action/Action - Check.png", label: "Check" },
    { src: "../static/Files/Download.png", label: "Download" },
    { src: "../static/Files/Upload.png", label: "Upload" },
  ];

  const animatedIcons = [
    { src: "../animated/loading.gif", label: "Loading" },
    { src: "../animated/success.gif", label: "Success" },
  ];

  const iconsToShow = category === "static" ? staticIcons : animatedIcons;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Exemplo de Ícones no React</h1>
      <p style={styles.subtitle}>
        Explore os ícones <strong>{category}</strong> abaixo:
      </p>

      <div style={styles.buttons}>
        <button style={styles.button} onClick={() => setCategory("static")}>
          Ícones Estáticos
        </button>
        <button style={styles.button} onClick={() => setCategory("animated")}>
          Ícones Animados
        </button>
      </div>

      <div style={styles.grid}>
        {iconsToShow.map((icon, index) => (
          <Icon key={index} src={icon.src} label={icon.label} />
        ))}
      </div>
    </div>
  );
}


const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    background: "#111",
    color: "#f1f1f1",
    minHeight: "100vh",
    padding: "20px",
    textAlign: "center",
  },
  title: {
    marginBottom: "10px",
  },
  subtitle: {
    marginBottom: "20px",
  },
  buttons: {
    marginBottom: "30px",
  },
  button: {
    background: "#333",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    margin: "0 10px",
    cursor: "pointer",
    transition: "0.3s",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  iconCard: {
    background: "#1c1c1c",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
    transition: "transform 0.2s ease",
  },
  iconImg: {
    width: "48px",
    height: "48px",
    marginBottom: "8px",
  },
  iconLabel: {
    display: "block",
    fontSize: "14px",
    color: "#bbb",
  },
};

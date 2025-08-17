const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <h2 style={styles.logo}>Jack's Shop</h2>
        <p style={styles.text}>© 2025 Jack's Shop. All rights reserved.</p>
        <div style={styles.links}>
          <a href="#about">About</a>
          <a href="#shop">Shop</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#111",
    color: "#fff",
    padding: "2em 1em",
    marginTop: "2em",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1em",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "600",
    letterSpacing: "1px",
  },
  text: {
    fontSize: "1.5rem",
    color: "#aaa",
  },
  links: {
    display: "flex",
    gap: "1.5em",
  },
};

export default Footer;

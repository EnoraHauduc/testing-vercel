export default function Home() {
  return (
    <div style={styles.container}>
      <h1>🎉 It Works!</h1>
      <p>Your first deployed page is live on Vercel!</p>
      <p>Welcome to the internet!</p>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    margin: 0,
  }
};

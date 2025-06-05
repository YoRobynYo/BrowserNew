import mainImage from './assets/mainImage-9.png';

export default function App() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh', // Stay within the visible window
        // height: 'calc(100vh + 200px)', // 100px taller than full viewport
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        overflow: 'hidden', // No scrollbars here
      }}
    >
      <div
        style={{
          height: '150vh', // Bigger scrollable content
          overflowY: 'auto',
          padding: '1rem',
        }}
      >
        <img
          src={mainImage}
          alt="Main"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
          }}
        />
        <p style={{ color: 'white', marginTop: '2rem' }}>
          Some long content here to make the page scroll...
        </p>
      </div>
    </div>
  );
}

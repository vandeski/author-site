import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-primary text-gray-900">
      <Navigation />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
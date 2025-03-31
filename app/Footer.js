function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-lx m-auto text-center py-2">
        <p className="text-black text-xl">
          &copy; TradeSphere - {new Date().getFullYear()}{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;

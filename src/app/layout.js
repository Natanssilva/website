import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollRevealSetup from "@/components/scrollReveal"; 

export const metadata = {
  title: "Natan Silva",
  description: "Desenvolvido por Natan Porto Machado da Silva",
  icons: "/favicon (1).ico"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`antialiased`}>
        <ScrollRevealSetup /> 
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

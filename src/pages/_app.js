import '../styles/globals.css'
import {AuthProvider} from "@/lib/auth";
import Navigation from "@/components/Navigation";

function MyApp({ Component, pageProps }) {
  return (
      <AuthProvider>
        <Navigation />
        <Component {...pageProps} />
      </AuthProvider>
  );
}
export default MyApp

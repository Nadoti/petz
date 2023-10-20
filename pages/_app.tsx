import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Inter } from '@next/font/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
    <div className={inter.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
    </QueryClientProvider>
  )
}

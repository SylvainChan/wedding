import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {Container} from "@mui/material";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Sylvain & Janice',
    description: 'The Big Day - Sylvain & Janice',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <Container className="" fixed>
            {children}
        </Container>
        </body>
        </html>
    )
}

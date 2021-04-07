import Head from 'next/head'
import Image from 'next/image'

const Hello = () => (
    <>
        <Head>
            <title>My Blog</title>
            <meta property="og:title" content="Hello World :: My Blog" />
        </Head>
        <article>
            <h1>Hello World!</h1>
            <Image
                src="/post/hello/img-cristo.jpg"
                alt="Picture of the author"
                width={500}
                height={500}
            />
            <p>Welcome to my homepage!</p>
        </article>
    </>
)

export default Hello
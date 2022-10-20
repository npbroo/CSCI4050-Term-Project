import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <main>
        <h1 className="flex">
          To see Nathan's progress with #6 &nbsp;<Link href="/movies"><div className='text-blue-500'>click here</div></Link>
        </h1>
        <h1 className="flex">
          To see Nathan's progress with B, #10 + $14 &nbsp;<Link href="/admin"><div className='text-blue-500'>click here</div></Link>
        </h1>
        <h1 className="flex">
          To see Nathan's progress with #9 & #3 &nbsp;<Link href="/confirmations"><div className='text-blue-500'>click here</div></Link>
        </h1>
        <h1 className="flex">
          To see Luna's progress with #2, #4 & #5 &nbsp;<Link href="/profile"><div className='text-blue-500'>click here</div></Link>
        </h1>
        <h1 className="flex">
          To see Luna's progress with #7 & #8 &nbsp;<Link href="/checkout"><div className='text-blue-500'>click here</div></Link>
        </h1>
        <h1 className="flex">
          To see Luna's progress with #1 &nbsp;<Link href="/main"><div className='text-blue-500'>click here</div></Link>
        </h1>
      </main>
    </div>
  )
}

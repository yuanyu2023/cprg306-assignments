
import Link from 'next/link';

const HomePage = () => {
  return (
    <main className='bg-gray-950 text-white min-h-screen flex justify-center items-center'>
      <div>
        <h1 className='text-4xl font-bold '>CPRG 306: Web Development 2 - Assignments</h1>
        <Link href="/week-2">
          <div className='text-lg hover:text-green-400 hover:underline'>Week 2 Assignment</div>
        </Link>
        <Link href="/week-3">
          <div className='text-lg hover:text-green-400 hover:underline'>Week 3 Assignment</div>
        </Link>
        <Link href="/week-4">
          <div className='text-lg hover:text-green-400 hover:underline'>Week 4 Assignment</div>
        </Link>
        <Link href="/week-5">
          <div className='text-lg hover:text-green-400 hover:underline'>Week 5 Assignment</div>
        </Link>
        <Link href="/week-6">
          <div className='text-lg hover:text-green-400 hover:underline'>Week 6 Assignment</div>
        </Link>
      {/*ok this is comment */}
      </div>
    </main>
    
  );
};

export default HomePage;

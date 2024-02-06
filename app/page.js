
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1 className='text-xl font-bold'>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2">
        <div className='text-s'>Week 2 Assignment</div>
      </Link>
      <Link href="/week-3">
      <div className='text-s'>Week 3 Assignment</div>
      </Link>
      {/*ok this is comment */}
    </div>
  );
};

export default HomePage;

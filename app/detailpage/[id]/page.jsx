'use client';

import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useParams, useRouter } from 'next/navigation';
import DetailPage from './_components/detail-page';

function DetailsPage({ params }) {
  const router = useRouter();
  const lesson = useQuery(api.lessons.getById, { lessonId: params.id });

  if (!lesson)
    return (
      <div className='bg-backgroundColor'>
        <p>Lesson not found</p>
      </div>
    );

  return (
    <div className='bg-backgroundColor pt-20'>
      {/* <h1 className="text-4xl font-semibold text-center mb-10">Detail page</h1> */}
      <DetailPage lesson={lesson} />
    </div>
  );
}

export default DetailsPage;
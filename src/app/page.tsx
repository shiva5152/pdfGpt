"use client"
import Image from 'next/image'
import Loader from '@/components/Loder';
import { useRouter } from 'next/navigation'

export default function Home() {

  const router=useRouter();
  router.push('/chat');


  return (
    <div className='w-full flex justify-center items-center h-screen mx-auto'>
     <Loader />
    </div>
  )
}

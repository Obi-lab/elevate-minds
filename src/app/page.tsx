import Image from "next/image";
import Layout from "@/components/Layout"
import Link from "next/link";
import WorldImage from '../../public/wolrd.png'
import { PlusIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col gap-32">
        <div className="homeTopBackgroundImage  h-[86vh] flex items-center">

        </div>


        <div className="flex p-8  md:flex-row flex-col gap-10">
          <div className="flex flex-col gap-4 md:w-[50%]">
            <div className="flex md:flex-row flex-col gap-3  md:items-center">
              <div className="w-3/12">
                <p className="text-4xl font-bold text-pink-700 ">10 <br />
                  <span className="text-black text-3xl pt-4">Countries</span>
                </p>
              </div>
              <div className="md:border-l border-gray-400 md:p-3 w-9/12">
                <p>Our global presence ensures expansive reach and diverse perspectives to deliver impactful solutions
                  worldwide. With operations spanning over 10 countries, we leverage our extensive network to tailor
                  strategies that address localnuances while upholding international standards, fostering innovation,
                  and driving sustainable change.
                </p>
              </div>

            </div>

            <div className="flex md:flex-row flex-col gap-3  md:items-center">
              <div className="flex flex-col w-3/12">
                <div className="flex flex-row gap-6">
                  <p className="text-4xl font-bold text-pink-700 ">30</p>
                  <p ><PlusIcon className="h-8 w-8" /></p>
                </div>

                <p className="text-black text-3xl font-bold pt-4">Clients</p>
              </div>
              <div className="md:border-l w-9/12 border-gray-400 md:p-3">
                <p>Our global presence ensures expansive reach and diverse perspectives to deliver impactful solutions
                  worldwide. With operations spanning over 10 countries, we leverage our extensive network to tailor
                  strategies that address localnuances while upholding international standards, fostering innovation,
                  and driving sustainable change.
                </p>
              </div>

            </div>

          </div>

          <div className="md:w-[50%] items-center">
            <Image
              alt="Business world image"
              src={WorldImage}
              quality={100}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>

        <div className="homeContactBackgroundImage h-[86vh] flex items-center">
          <div className="flex flex-col gap-4 mx-auto py-20 px-32 text-center bg-white rounded-md items-center">
            <p className="text-3xl text-blue-900 font-bold ">Let's Start Your Next <br></br> Project Together.</p>
            <Link className="rounded p-4 bg-pink-600 text-white" href="/contact">Contact Us Now</Link>
          </div>


        </div>
      </div>
    </Layout>
  )
}

import Layout from "@/components/Layout"
import Image from "next/image"
import AnimateImage from '../../../public/curve.png'
import LeftImage from '../../../public/aboutLeft.png'
import Form from "@/components/Form"
import NewsletterSubscriptionForm from "@/components/NewsLetter"

export default function page() {
  return (
    <Layout>
      <div className="flex flex-col gap-32">

        <div className="homeTopBackgroundImage  h-[86vh] flex items-center">
          <div className="flex flex-col gap-3 mx-auto items-center">
            <p className="text-4xl font-bold">CAREERS</p>
            <div className="text-gray-950 gap-4 flex flex-row items-center">
              <p>Elevate Mind Advisors</p>
              <div className="skewed-line"></div>
              <p>Careers</p>
            </div>
          </div>
        </div>


        <div className="px-20 ">
          <p className="text-3xl  font-extrabold text-red-600 ">Careers</p>
          <p className="text-gray-800  py-6 font-bold text-xl">
            We are looking for passionate , Creative minds to redefine spaces with elegance and style.
            Whether you are an experienced professional looking to advance your career, a recent graduate eager 
            to launch your consulting journey, or a seasoned expert seeking new challenge
          </p>
        </div>

        <div className="careersBackgroundImage  h-[86vh]  gap-10 text-center">
          <div className="topElement flex  flex-col ">
            <p className="text-red-600 p-6 text-3xl font-bold">Creativity at our Core</p>
            <p className="py-8 px-20 text-white text-xl font-bold">
              Elevate Minds Advisors provides a collaborative and supportive environment where you can thrive, grow, and succeed.
              Our comprehensive training programs, mentorship opportunities, and career development initiatives empower
              our team members to reach their full potential, achieve professional excellence, and make a meaningful
              impact in the consulting industry. Join us and be part of a dynamic team that is shaping the future of
              consulting, driving sustainable growth, and creating value for our clients, stakeholders, and communities.
            </p>
          </div>

        </div>

         <div className="px-20 ">
          <p className="text-3xl  font-extrabold text-gray-800 ">Become part of our team</p>
          <p className="text-gray-800 py-8 font-bold text-xl">
            Check again soon for openings
          </p>
        </div>


      </div>
    </Layout>
  )
}

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
            <p className="text-4xl font-bold">About</p>
            <div className="text-gray-950 gap-4 flex flex-row items-center">
              <p>Elevate Mind Advisors</p>
              <div className="skewed-line"></div>
              <p>About</p>
            </div>
          </div>
        </div>

        <div className="aboutMidBackgroundImage">

          <div className="flex flex-row gap-16 p-16">
            <div className="flex  flex-1">
              <Image
                alt="Mountains"
                // Importing an image will
                // automatically set the width and height
                src={LeftImage}
                sizes="100vw"
                // Make the image display full width
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
            <div className="flex flex-1 flex-col gap-6">
              <p className="text-red-600 font-bold">ABOUT ELEVATE MINDS ADVISORS GROUP.</p>
              <div className="bg-white w-[40%] overflow-hidden">
                <Image
                  alt="Curve"
                  // Importing an image will
                  // automatically set the width and height
                  src={AnimateImage}
                  className="flow"
                  // Make the image display full width
                  style={{

                    height: 'auto',
                  }}
                />
              </div>
              <p className="text-3xl text-white font-extrabold">Best Reliable Solution For Your Organization</p>
              <p className="text-white">
              Established as a private limited company, the company has grown to be one of the leading energy and
               environmental consultancy entities in the Sub-Saharan region. With the vision to provide superior and 
               innovative solutions to emerging issues in renewable energy and environmental systems, we pride ourselves
                as one of the most trusted firms in the region.
We provide    excellent consulting services that deliver the outcomes clients seek and need. We are transparent with clients and respond to their concerns. We continually strive to improve the value we can deliver to our clients.
              </p>
            </div>

          </div>

        </div>

        <div className="flex items-center">
          <Form/>
        </div>

        <div className="flex items-center">
          <NewsletterSubscriptionForm/>
        </div>


      </div>
    </Layout>
  )
}

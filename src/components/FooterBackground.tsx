import Image from 'next/image'
import FooterImage from '../../public/footer.jpg'
 
export default function FooterBackground() {
  return (
    <Image
      alt="FooterImage"
      src={FooterImage}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
    />
  )
}


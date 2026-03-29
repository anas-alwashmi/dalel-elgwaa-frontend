import Image from "next/image";

const SocialLinks = ({ styles, data }) => {
  return (
    <div className={` ${styles}`}>
      {data.facebook && (
        <a href={data.facebook} target="_blank">
          <Image
            src="/Preheader/socials/facebook.svg"
            alt={"facebook"}
            width={24}
            height={24}
          />
        </a>
      )}
      {data.x && (
        <a href={data.x} target="_blank">
          <Image
            src="/Preheader/socials/x.svg"
            alt={"x"}
            width={24}
            height={24}
          />
        </a>
      )}
      {data.instagram && (
        <a href={data.instagram} target="_blank">
          <Image
            src="/Preheader/socials/insta.svg"
            alt={"instagram"}
            width={24}
            height={24}
          />
        </a>
      )}
      {data.linkedin && (
        <a href={data.linkedin} target="_blank">
          <Image
            src="/Preheader/socials/linkedin.svg"
            alt={"linkedin"}
            width={24}
            height={24}
          />
        </a>
      )}
      {data.whatsapp && (
        <a href={`https://wa.me/${data.whatsapp}`} target="_blank">
          <Image
            src="/Preheader/socials/whatsapp.svg"
            alt={"whatsapp"}
            width={24}
            height={24}
          />
        </a>
      )}
    </div>
  );
};

export default SocialLinks;

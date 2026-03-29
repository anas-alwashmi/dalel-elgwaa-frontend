import React from "react";
import Image from "next/image";

const SocialLinksDark = ({ styles, data, t }) => {
  return (
    <div className={` ${styles}`}>
      {data.facebook && (
        <a
          href={data.facebook}
          target="_blank"
          className="flex items-center gap-x-[8px]"
        >
          <Image
            src="/Preheader/socials/facebookDark.svg"
            alt="facebook"
            width={24}
            height={24}
          />
          <span className="text-[14px] md:text-[16px] text-gray-800">
            {t("company.title")}
          </span>
        </a>
      )}
      {data.x && (
        <a
          href={data.x}
          target="_blank"
          className="flex items-center gap-x-[8px]"
        >
          <Image
            src="/Preheader/socials/xDark.svg"
            alt="x"
            width={24}
            height={24}
          />
          <span className="text-[14px] md:text-[16px] text-gray-800">
            {t("company.title")}
          </span>
        </a>
      )}
      {data.instagram && (
        <a
          href={data.instagram}
          target="_blank"
          className="flex items-center gap-x-[8px]"
        >
          <Image
            src="/Preheader/socials/instaDark.svg"
            alt="instagram"
            width={24}
            height={24}
          />
          <span className="text-[14px] md:text-[16px] text-gray-800">
            {t("company.title")}
          </span>
        </a>
      )}
      {data.linkedin && (
        <a
          href={data.linkedin}
          target="_blank"
          className="flex items-center gap-x-[8px]"
        >
          <Image
            src="/Preheader/socials/linkedindark.svg"
            alt="linkedin"
            width={24}
            height={24}
          />
          <span className="text-[14px] md:text-[16px] text-gray-800">
            {t("company.title")}
          </span>
        </a>
      )}
      {data.whatsapp && (
        <a
          href={`https://wa.me/${data.whatsapp}`}
          target="_blank"
          className="flex items-center gap-x-[8px]"
        >
          <Image
            src="/Preheader/socials/whatsappDark.svg"
            alt="whatsapp"
            width={24}
            height={24}
          />
          <span className="text-[14px] md:text-[16px] text-gray-800">
            {t("company.title")}
          </span>
        </a>
      )}
    </div>
  );
};

export default SocialLinksDark;

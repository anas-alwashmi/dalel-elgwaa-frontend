"use client";
import { useEffect, useState } from "react";
import styles from "./footer.module.css";
import SocialLinks from "../SocialLinks/SocialLinks";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { IoMdHeart } from "react-icons/io";

function Footer({ locale }) {
  const [data, setData] = useState(null);
  const t = useTranslations();
  const isRtl = locale === "ar";

  const footerLinks = [
    { title: t("Footer.links.home"), href: "/" },
    { title: t("Footer.links.sale"), href: `/${locale}/for-sale` },
    { title: t("Footer.links.rent"), href: `/${locale}/for-rent` },
    { title: t("Footer.links.about"), href: `/${locale}/about-us` },
    { title: t("Footer.links.contact"), href: `/${locale}/contact-us` },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${(process.env.DB_URL || process.env.NEXT_PUBLIC_DBURL)}/api/setting`,
          {
            headers: {
              "Accept-Language": locale,
              Accept: "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch footer data: ${response.statusText}`
          );
        }

        const { data } = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching footer data:", error);
      }
    };

    fetchData();
  }, [locale]);

  return (
    <footer className="w-full text-custom-footercolor">
      <div className="relative w-full aspect-[16/9] md:aspect-[1920/500] py-[50px]">
        <Image
          src="/Footer/FooterImage.webp"
          alt="Footer Background"
          fill
          priority
          className={`${styles.footerBg} absolute top-0 left-0 w-full h-full object-cover`}
        />
        <div
          className={`${styles.footerOverlay} absolute top-0 left-0 w-full h-full bg-black opacity-70`}
        />
        <div className="w-[80%] mx-auto flex flex-col lg:flex-row  justify-center">
          {data && (
            <>
              <div className="flex flex-col md:flex-row items-start gap-[25px] md:gap-[30px] lg:w-[70%]">
                {/* About Section */}
                {data.light_logo && (
                  <div className="w-full md:w-[50%] lg:w-[50%]">
                    <div className="flex items-center mb-[24px]">
                      <figure className="mx-auto md:mx-0 w-[240px] h-[47px] flex items-center justify-center relative">
                        <Image
                          className="h-full w-full object-contain"
                          src={data?.light_logo}
                          alt="Logo"
                          fill
                          unoptimized={true}
                        />
                      </figure>
                    </div>
                    <h3
                      className={`text-custom-whiteColor font-[600] text-[20px] md:text-[24px]`}
                    >
                      {t("Footer.aboutUs.title")}
                    </h3>
                    {data.footer_description && (
                      <p className="text-custom-whiteColor font-[400] text-[14px] md:text-[20px]">
                        {data.footer_description}
                      </p>
                    )}
                  </div>
                )}

                {/* Links Section */}
                <div className="w-full md:w-[50%] lg:w-[50%] items-center">
                  <h3
                    className={`text-custom-whiteColor font-[600] text-[20px] md:text-[24px]  mb-[24px]`}
                  >
                    {t("Footer.links.title")}
                  </h3>
                  <div className="flex flex-col items-start text-[14px] md:text-[20px] font-[500] gap-y-[16px] text-custom-whiteColor">
                    {footerLinks.map(
                      (link) =>
                        link.title && (
                          <a key={link.title} href={link.href}>
                            {link.title}
                          </a>
                        )
                    )}
                  </div>
                </div>
              </div>

              {/* Contacts Section */}
              <div className="w-full lg:w-[30%] flex flex-col items-start">
                <h3
                  className={`text-custom-whiteColor font-[600] text-[20px] md:text-[24px] mb-[24px]`}
                >
                  {t("Footer.contacts.title")}
                </h3>
                <div className="flex flex-col gap-y-[24px] text-custom-whiteColor">
                  {/* Address */}
                  {data.address && (
                    <div className="flex items-start gap-x-[8px]">
                      <Image
                        src="/Footer/MapPin.svg"
                        alt="MapPin"
                        width={20}
                        height={20}
                      />
                      <p className="text-[13px] md:text-[16px] font-[500]">
                        {data.address}
                      </p>
                    </div>
                  )}
                  {/* Phone */}
                  {(data.primary_phone || data.secondary_phone) && (
                    <div className="flex items-start gap-x-[8px]">
                      <Image
                        src="/Footer/Phone.svg"
                        alt="Phone"
                        width={20}
                        height={20}
                      />
                      <p
                        dir="ltr"
                        className="text-[13px] md:text-[16px] font-[500]"
                      >
                        {data.primary_phone && (
                          <span>{data.primary_phone}</span>
                        )}
                        {data.primary_phone && data.secondary_phone && (
                          <span className="mx-[8px]">|</span>
                        )}
                        {data.secondary_phone && (
                          <span>{data.secondary_phone}</span>
                        )}
                      </p>
                    </div>
                  )}

                  {/* Email */}
                  {data.email && (
                    <div className="flex items-start gap-[8px]">
                      <Image
                        src="/Footer/EnvelopeSimple.svg"
                        alt="EnvelopeSimple"
                        width={20}
                        height={20}
                      />
                      <p className="text-[13px] md:text-[16px] font-[500]">
                        {data.email}
                      </p>
                    </div>
                  )}

                  {/* Social Links */}
                  <SocialLinks
                    styles="flex items-center gap-[8px] md:gap-[16px]"
                    data={data}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

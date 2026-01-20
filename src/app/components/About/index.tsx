'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { AboutType, VisionMissionType, ProfileType } from '@/app/types/about'
import { SuperiorityType } from '@/app/types/superiority'
import data from '@/app/data/data.json'

const AboutPage = () => {
  const about: AboutType[] = data.AboutData || []
  const visionMission: VisionMissionType | null = data.VisionMissionData || null
  const profiles: ProfileType[] = data.ProfileData || []
  const superiority: SuperiorityType[] = data.SuperiorityData || []

  return (
    <>
      {/* Company Section */}
      {about.length > 0 && (
        <section id="about-company" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm text-gray-500 mb-4 uppercase tracking-wide">
                  SEKILAS PERUSAHAAN
                </p>
                <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                  {about[0].title}
                </h2>
                <div className="text-gray-600 leading-relaxed text-justify whitespace-pre-line">
                  {about[0].content}
                </div>
              </div>

              {/* ✅ Ubah dari <img> → <Image> agar teroptimasi */}
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
                {about[0].mapImage && (
                  <Image
                    src={about[0].mapImage}
                    alt="Tentang Perusahaan"
                    fill
                    className="object-contain"
                    priority={false}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Vision Mission Section */}
      {visionMission && (
        <section id="vision-mission" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                {visionMission.vision.title}
              </h2>
              <div className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed">
                {visionMission.vision.content}
              </div>
            </div>

            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                {visionMission.mission.title}
              </h2>
              <div className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed">
                {visionMission.mission.content}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Profiles Section */}
      {profiles.length > 0 && (
        <section id="profiles" className="scroll-mt-12 pb-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Tim Kami</h2>
            </div>

            <div className="flex justify-center">
              <div
                className="
                  grid grid-cols-1 md:grid-cols-2
                  gap-[10px] sm:gap-6
                "
              >
                {profiles.map((profile, i) => (
                  <div key={i} className="flex justify-center">
                    <div
                      className="
                        bg-white px-8 pt-8 pb-12 shadow-lg rounded-2xl border border-gray-200
                        text-center hover:shadow-xl transition-shadow duration-300
                        w-[280px] h-[380px] sm:w-[300px] sm:h-[400px] md:w-[340px] md:h-[420px]
                        flex flex-col justify-start
                      "
                    >
                      <div className="mb-6">
                        <Image
                          src={profile.img}
                          alt={profile.heading}
                          width={128}
                          height={128}
                          className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-blue-600"
                          loading="lazy"
                        />
                      </div>

                      {/* Konten */}
                      <div className="px-3 pt-4 flex-1 flex flex-col justify-center">
                        <h6 className="text-black text-xl font-bold mb-2 leading-tight">
                          {profile.heading}
                        </h6>
                        <p className="text-base font-medium text-gray-600">
                          {profile.name}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Strategic Superiority */}
      <section>
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Keunggulan Strategis
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {superiority.map((s, i) => (
              <div key={i} className="flex justify-center">
                <div className="bg-white m-3 px-8 pt-8 pb-12 shadow-lg rounded-2xl h-full border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-6">
                    <span className="text-6xl font-bold text-blue-600">
                      {s.number}
                    </span>
                  </div>
                  <div className="px-3">
                    <h6 className="text-black text-2xl font-bold mb-4 leading-tight text-left">
                      {s.heading}
                    </h6>
                    <p className="text-base font-normal text-gray-700 text-left leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage

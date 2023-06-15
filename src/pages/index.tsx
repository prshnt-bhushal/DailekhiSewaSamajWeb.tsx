// Home page

import Carousel from "../../components/Carousel";
import HighlightsItems from "../../components/HighlightsItems";
import Layout from "../../components/Layout";
import { onGalleryTxt, onGoalHighlight, onMissionHighlight, onNormsHighlight, onVisionHighlight } from "../../components/Paragraph";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Layout title="HOME">
        <div className="pt-[80px]">
          {/* Introduction Home */}
          <div className="flex flex-col w-full h-full p-10 justify-center items-center bg-white md:flex-row">
            <div className="px-3 m-2 basis-[30%]">
              <Carousel />
            </div>
            {/* Introduction section*/}
            <div className="text-justify px-3 m-2 basis-[70%]">
              <h2 className="uppercase p-1 text-3xl mb-2 bg-slate-300">
                Introduction
              </h2>
              <p>
                {onGalleryTxt}
                {onMissionHighlight}
                {onGoalHighlight}
              </p>
            </div>
          </div>
          {/* HighLights */}
          <div className="p-10 justify-center bg-[#b4b7bc] items-center flex-col h-full">
            <div className="text-justify p-3 m-2">
              <h2 className="uppercase text-3xl p-1 mb-2">HighLights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-content-stretch ">
                <div>
                  <HighlightsItems
                    highlightImage={'/../public/Images/missionHighlight.png'}
                    highlightName={'Mission'}
                    highlighDescript={onMissionHighlight}
                  />
                </div>
                <div>
                  <HighlightsItems
                    highlightImage={'/../public/Images/visionHighlight.png'}
                    highlightName={'vision'}
                    highlighDescript={onVisionHighlight}
                  />
                </div>
                <div>
                  <HighlightsItems
                    highlightImage={'/../public/Images/normsHighlight.png'}
                    highlightName={'Norms and values'}
                    highlighDescript={onNormsHighlight}
                  />
                </div>
                <div>
                  <HighlightsItems
                    highlightImage={'/../public/Images/goalsHighlight.png'}
                    highlightName={'goals'}
                    highlighDescript={onGoalHighlight}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Achievements */}
          <div className="flex flex-col w-full h-full p-10 justify-center items-center bg-white md:flex-row">
            {/* Introduction section*/}
            <div className="text-justify px-3 m-2 basis-[70%]">
              <h2 className="uppercase p-1 text-3xl mb-2 bg-slate-300">
                Achievements
              </h2>
              <p>
                {onNormsHighlight}
                {onVisionHighlight}
              </p>
            </div>
            <div className="px-3 m-2 basis-[30%]">
              <Image
                src={'/../public/Images/aboutIntro.jpg'}
                alt="aboutUs page Intro Image"
                width={1250}
                height={1200}
              />
            </div>
          </div>
          {/* Major Areas of Interventions */}
          <div></div>
        </div>
      </Layout>
    </>
  );
}

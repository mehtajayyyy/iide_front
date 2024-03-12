import Header from "./components/header";
import HeroSection from "./components/hero_section";
import Accordion from "./components/accordion";
import SectionTitle from "./components/section_title";
import BrochureForm from "./components/brochure_form";
import UpskillCards from "./components/upskill_cards";
import KeyHighlights from "./components/key_highlights";
import AboutCampus from "./components/about_campus";
import MultipleImages from "./components/multiple_images";
import ExpertsCard from "./components/expertsCard";
import CareerCard from "./components/career_card";
import SupersessionsCard from "./components/suppersessions_card";
import LearningMethods from "./components/learning_methods";
import ProgramFees from "./components/program_fees";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";
import FixedHeader from "./components/fixed_header";
import CtaSection from "./components/cta_section";
import LearningPath from "./components/LearningPath";

async function getData(context) {
    // Fetch data from an external API
    const res = await fetch('http://localhost:3001/api/content');
    const data = await res.json();
  
    // Pass the fetched data as props
    return data;
  }

  export default async function Home() {
    const contentData = await getData()
    const digital_marketing_tools = [
        "https://iide.co/wp-content/w3-webp/uploads/2024/02/google-ads.pngw3.webp",
        "https://iide.co/wp-content/w3-webp/uploads/2024/01/digital_marketing_course_tool_google_ads_logo.pngw3.webp",
        "https://iide.co/wp-content/w3-webp/uploads/2024/02/google-ads.pngw3.webp",
        "https://iide.co/wp-content/w3-webp/uploads/2024/01/digital_marketing_course_tool_google_ads_logo.pngw3.webp",
        "https://iide.co/wp-content/w3-webp/uploads/2024/02/google-ads.pngw3.webp",
        "https://iide.co/wp-content/w3-webp/uploads/2024/01/digital_marketing_course_tool_google_ads_logo.pngw3.webp"
    ];
    return (
        <div>
            <FixedHeader></FixedHeader>
            <HeroSection data={contentData.hero_section}></HeroSection>
            {/*<SectionTitle title={contentData.digital_marketing_overview.title}></SectionTitle>
            <div className="pb-12 max-w-7xl mx-auto px-4 flex flex-col lg:flex-row md:flex-row">
                <div className="w-full lg:w-2/3 md:w-2/3">
                    {contentData.digital_marketing_overview.items.map((item, index) => (
                        <Accordion title={item.title} content={item.description}></Accordion>
                    ))}
                </div>
                <div className="w-full lg:w-1/3 md:w-1/3">
                    <BrochureForm data={contentData.course_details_form}></BrochureForm>
                </div>
            </div>*/}
            <SectionTitle title={contentData.upSkillsSection.title}></SectionTitle>
            <UpskillCards data={contentData.upSkillsSection} popupData={contentData.comparisonPopup}></UpskillCards>
            <div className="py-12 bg-slate-100">
                <SectionTitle title={contentData.key_highlights.title}></SectionTitle>
                <div className="max-w-7xl mx-auto">
                    <KeyHighlights data={contentData.key_highlights}></KeyHighlights>
                </div>
            </div>
            <div className="py-12">
                <SectionTitle title={contentData.campus_immersion.title}></SectionTitle>
                <AboutCampus data={contentData.campus_immersion}></AboutCampus>
            </div>
            <div className="py-12 bg-slate-100">
                <SectionTitle title={'Syllabus That Makes You Industry-ready'}></SectionTitle>
                <p className="max-w-7xl mx-auto text-black text-base font-normal my-2 px-4">{'Our online digital marketing course includes an updated syllabus including latest digital marketing concepts. With practical training & numerous live projects, this syllabus will prepare learners for today’s demanding industry.'}</p>
                <div className='max-w-7xl mx-auto syllabus-container'>
                    <LearningPath></LearningPath>
                    <LearningPath></LearningPath>
                    <LearningPath></LearningPath>
                </div>
            </div>
            <div className="py-12">
                <SectionTitle title={contentData.digital_marketing_tools.title}></SectionTitle>
                <p className="max-w-7xl mx-auto text-black text-base font-normal my-2 px-4">{contentData.digital_marketing_tools.description}</p>
                <MultipleImages images={contentData.digital_marketing_tools.items_1}></MultipleImages>
                <MultipleImages images={contentData.digital_marketing_tools.items_2}></MultipleImages>
                <MultipleImages images={contentData.digital_marketing_tools.items_3}></MultipleImages>
            </div>
            <div className="max-w-7xl mx-auto px-4 pb-12 flex flex-col lg:flex-row md:flex-row items-center">
                <div className="w-full lg:w-1/2 md:w-1/2">
                    <SectionTitle title={contentData.next_gen_power_tools.title}></SectionTitle>
                    <p className="max-w-7xl mx-auto text-black text-base font-normal my-2 px-4">{contentData.next_gen_power_tools.description}</p>
                    <button className="bg-sky-600 hover:bg-sky-600 text-white font-semibold py-2 my-4 ml-4 rounded w-full lg:w-1/2 md:w-1/2 text-lg " type='button'>{contentData.next_gen_power_tools.cta_button_text}</button>
                </div>
            </div>
            <div className="py-12 bg-slate-100">
                <SectionTitle title={contentData.industry_experts.title}></SectionTitle>
                <p className="max-w-7xl mx-auto text-black text-base font-normal my-2 px-4">{contentData.industry_experts.description}</p>
                <div className="flex justify-center items-center w-full max-w-7xl mx-auto flex-wrap">
                    {contentData.industry_experts.items.map((item, index) => (
                    <ExpertsCard data={item}></ExpertsCard>
                    ))}
                </div>
            </div>
            <div className="py-12">
                <SectionTitle title={contentData.career_oppotunities.title}></SectionTitle>
                <p className="max-w-7xl mx-auto text-black text-base font-normal my-2 px-4">{contentData.career_oppotunities.description}</p>
                <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row md:flex-row">
                    {contentData.career_oppotunities.items.map((item, index) => (
                    <CareerCard data={item}></CareerCard>
                    ))}
                </div>
            </div>
            <div className="py-12 bg-sky-600">
                <div className="max-w-7xl mx-auto">
                    <CtaSection data={contentData.cta_section}></CtaSection>
                </div>
            </div>
            <div className="py-12">
                <SectionTitle title={contentData.aluminis_work_at.title}></SectionTitle>
                <MultipleImages images={contentData.aluminis_work_at.items_1}></MultipleImages>
                <MultipleImages images={contentData.aluminis_work_at.items_2}></MultipleImages>
            </div>
            <div className="pb-12">
                <SectionTitle title={contentData.learning_methedology.title}></SectionTitle>
                <div className="max-w-7xl mx-auto px-4">
                    <LearningMethods data={contentData.learning_methedology.items}></LearningMethods>
                </div>
            </div>
            <div className="pb-12">
                <SectionTitle title={contentData.suppersessions_section.title}></SectionTitle>
                <p className="max-w-7xl mx-auto text-black text-base font-normal my-2 px-4">{contentData.suppersessions_section.description}</p>
                <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row md:flex-row">
                    {contentData.suppersessions_section.items.map((item, index) => (
                    <SupersessionsCard data={item}></SupersessionsCard>
                    ))}
                </div>
            </div>
            <div className="py-12 bg-slate-100">
                <SectionTitle title={contentData.fees_section.title}></SectionTitle>
                <p className="max-w-7xl mx-auto text-black text-base font-normal my-2 px-4">{contentData.fees_section.description}</p>
                <div className="w-full max-w-7xl mx-auto">
                    <ProgramFees></ProgramFees>
                </div>
            </div>
            <div className="py-12">
                <SectionTitle title={contentData.testimonials.title}></SectionTitle>
                <div className="w-full max-w-7xl mx-auto">
                    <Testimonials data={contentData.testimonials.items}></Testimonials>
                </div>
            </div>
            <div className="pb-12">
                <SectionTitle title={contentData.faqs.title}></SectionTitle>
                <div className="max-w-7xl mx-auto">
                    <div className="w-full">
                        {contentData.faqs.items.map((item, index) => (
                        <Accordion title={item.title} content={item.description}></Accordion>
                        ))}
                    </div>
                </div>
            </div>
            <div className="py-12 bg-slate-100">
                <SectionTitle title="About Us"></SectionTitle>
                <div className="max-w-7xl mx-auto px-4">
                    <p className="text-black text-normal mb-2">Founded in 2016, IIDE is one of the reputed digital marketing colleges in India. It offers a variety of digital marketing courses with placement assistance. It has been a preferred choice of over 1,00,000 students across the country. </p>
                    <p className="text-black text-normal mb-2">Recently, It is awarded the ‘Best Digital Marketing Institute in Mumbai’ by Indian Education Congress 2022.</p>
                    <p className="text-black text-normal mb-2">© Copyright 2024 IIDE</p>
                </div>
            </div>
            <div className="py-12 max-w-7xl mx-auto px-4 m-auto flex justify-center items-center">
                <button className="bg-sky-600 hover:bg-sky-600 text-white font-semibold py-2 px-4 my-6 w-96 rounded book-demo text-lg" type='button'>Apply Now</button>
            </div>
        </div>
    );
}
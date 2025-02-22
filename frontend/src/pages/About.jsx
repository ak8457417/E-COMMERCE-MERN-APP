import React from 'react';
import Title from "../components/Title.jsx";
import {assets} from "../assets/frontend_assets/assets.js";
import NewsLetterBox from "../components/NewsLetterBox.jsx";

const About = () => {
    return (
        <div>
            <div className={'text-2xl text-center pt-8 border-t'}>
                <Title text1={'ABOUT'} text2={'US'} />
            </div>
            <div className={'my-10 flex flex-col md:flex-row gap-16'}>
                <img className={'w-full md:max-w-[450px]'} src={assets.about_img} alt={''}/>
                <div className={'flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque consectetur cum cupiditate dicta dolore dolores eligendi ipsum iusto nemo quidem quos repellendus repudiandae saepe sint veritatis, voluptas! Repellendus, totam?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae commodi debitis deleniti dicta dolore expedita fugiat id incidunt ipsam ipsum laboriosam obcaecati officiis quas recusandae repudiandae, sed vitae voluptatem.</p>
                    <b className={'text-gray-800'}>Our Mission</b>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eveniet illum laborum necessitatibus porro quos ullam veritatis! Alias aliquam doloremque error facere ipsam, ipsum officiis, omnis porro quo repellendus voluptas!</p>
                </div>
            </div>

            <div className={'text-xl py-4'}>
                <Title text1={'WHY'} text2={'CHOOSE US'} />
            </div>

            <div className={'flex flex-col md:flex-row text-sm mb-20'}>
                <div className={'border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'}>
                    <b>Quality Assurance:</b>
                    <p className={'text-gray-600'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet corporis delectus distinctio doloribus earum eum illo magni nostrum, officia optio repellat sunt temporibus, tenetur voluptates. Error maiores nemo voluptatibus!</p>
                </div>
                <div className={'border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'}>
                    <b>Convenience:</b>
                    <p className={'text-gray-600'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae commodi debitis deleniti dicta dolore expedita fugiat id incidunt ipsam ipsum laboriosam obcaecati officiis quas recusandae repudiandae, sed vitae voluptatem.</p>
                </div>
                <div className={'border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'}>
                    <b>Exceptional Customer Service:</b>
                    <p className={'text-gray-600'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque consectetur cum cupiditate dicta dolore dolores eligendi ipsum iusto nemo quidem quos repellendus repudiandae saepe sint veritatis, voluptas! Repellendus, totam.</p>
                </div>
            </div>

            <NewsLetterBox />
        </div>
    );
};

export default About;

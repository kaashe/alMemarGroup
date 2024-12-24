import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';
import yousuf from "../../assets/yousuf.jpeg";
const MainBodies = () => {
    const { t } = useTranslation();

    const users = [
        {
            id: 1,
            nameKey: 'team.ceo.name',
            designationKey: 'team.ceo.designation',
            descriptionKey: 'team.ceo.description',
            image: yousuf, //
        },
        {
            id: 3,
            nameKey: 'team.purchaseManager.name',
            designationKey: 'team.purchaseManager.designation',
            descriptionKey: 'team.purchaseManager.description',
            image: 'https://media.licdn.com/dms/image/v2/C4D03AQGdMLp_0ONn7g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1634873909947?e=1739404800&v=beta&t=FVUQWAzEubIfVRHI_dHxWaUBbY5TXmdMJ_jPb8y8O3M', // Replace with actual image URLs
        },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Mobile-first: One card
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768, // Tablet and above
                settings: {
                    slidesToShow: 1, // Two cards on larger screens
                },
            },
        ],
    };

    return (
        <div className="bg-gray-100 py-10">
            <h2 className="text-center text-2xl font-bold mb-6 text-gray-800">
                {t('mainBodies.title')}
            </h2>
            <div className="max-w-5xl mx-auto">
                <Slider {...sliderSettings}>
                    {users.map((user) => (
                        <div key={user.id} className="p-4">
                            <div className="bg-white shadow-md rounded-lg overflow-hidden text-center">
                                {/* Circular Image */}
                                <div className="flex justify-center mt-4">
                                    <img
                                        src={user.image}
                                        alt={t(user.nameKey)}
                                        className="w-32 h-32 object-cover rounded-full border-4 border-gray-300"
                                    />
                                </div>
                                {/* Content */}
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-gray-800">{t(user.nameKey)}</h3>
                                    <p className="text-sm text-gray-500 mb-2">{t(user.designationKey)}</p>
                                    <p className="text-gray-600">{t(user.descriptionKey)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default MainBodies;

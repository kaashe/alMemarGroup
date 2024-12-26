import React from 'react';
import { useTranslation } from 'react-i18next';

const JointVenture = () => {
    const { t } = useTranslation();
    return (
        <section className="flex flex-col md:flex-row items-center bg-gray-50 p-8 rounded-lg shadow-lg">
            {/* Left Section */}
            <div className="flex-1 text-center md:text-left md:pr-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    {t('jointVenture.heading')}
                </h2>
                <p className="text-gray-600 mb-6">
                    {t('jointVenture.description')}
                </p>
                <ul className="list-disc list-inside text-gray-700">
                    <li>
                        <a
                            href="http://www.casht.edu.pk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            {t('jointVenture.links.casht')}
                        </a>
                    </li>
                    <li>
                        <a
                            href="http://www.acme.edu.pk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            {t('jointVenture.links.acme')}
                        </a>
                    </li>
                </ul>
            </div>


            {/* Right Section */}
            <div className="flex-1">
                <img
                    src="https://i.pinimg.com/736x/7f/74/f0/7f74f0e8811c63ba7b964da081c98495.jpg"
                    alt={t('jointVenture.heading')}
                    className="rounded-lg shadow-lg w-full"
                />
            </div>
        </section>
    );
};

export default JointVenture;

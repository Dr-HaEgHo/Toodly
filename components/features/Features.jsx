import useFullScroll from '@/hooks/useFullScroll';
import FeaturesCard from './FeaturesCard';
import { useEffect, useState } from 'react';

const Features = () => {

    

    const cards = [
        {
            title: 'saas',
            subtitle:
                'or just passionate about creating something new and exciting. We take pride in developing innovative solutions to challenging problems.',
            background: {
                desktop: '/images/photos/who-we-are/01.jpg',
                mobile: '/images/photos/who-we-are/01-mobile.jpg'
            },
            location: (
                <>
                    <b>Software</b> as a service
                </>
            ),
            style: {
                bottom: `10vh`,
                marginTop: '-28.5vh',
                flexDirection: "row",marginBottom: '25vh'
            }
        },
        {
            title: 'mobile apps',
            subtitle:
                'or just passionate about connecting brands with their customers. We strive to find creative solutions to drive meaningful conversations and engagement.',
            background: {
                desktop: '/images/photos/who-we-are/02.jpg',
                mobile: '/images/photos/who-we-are/02-mobile.jpg'
            },
            location: (
                <>
                    We build <b>MOBILE APPS</b>
                </>
            ),
            style: { bottom: '19vh', marginTop: '-23.5vh', flexDirection: "row-reverse",marginBottom: '20vh' }
        },
        {
            title: 'branding',
            subtitle:
                'or just the architects of our own destiny, empowered to shape our lives with the potential of our creative spark. We are creators of our own world, carving out our unique place in the universe with the power of our imagination.',
            background: {
                desktop: '/images/photos/who-we-are/03.jpg',
                mobile: '/images/photos/who-we-are/03.jpg'
            },
            location: (
                <>
                    New <b>BRANDING</b>
                </>
            ),
            style: { bottom: '14vh', marginTop: '-18.5vh', flexDirection: "row",marginBottom: '15vh' }
        },
        {
            title: 'content',
            subtitle:
                'or just creative problem solvers, always striving to come up with original and innovative ideas. We use our design skills to create beautiful and functional products that bring joy to our customers.',
            background: {
                desktop: '/images/photos/who-we-are/04.jpg',
                mobile: '/images/photos/who-we-are/04-mobile.jpg'
            },
            location: (
                <>
                    <b>CONTENT</b> Creation
                </>
            ),
            style: { bottom: '9vh', marginTop: '-13.5vh', flexDirection: "row-reverse",marginBottom: '10vh' }
        },
    ];

    return (
        <section className=" w-full z-10 px-4 pt-[5vh] md:pt-[9vh]">
            <div className='' >
                <h2>Explore our Features</h2>
            </div>
            <div className="relative mx-auto mt-28 flex w-[80%] max-w-[1200px] flex-col space-y-2">
                {cards.map(({ title, background, subtitle, location, style }, i) => (
                    <FeaturesCard
                        key={i}
                        index={i}
                        background={background}
                        title={title}
                        subtitle={subtitle}
                        location={location}
                        style={style}
                    />
                ))}
            </div>
        </section>
    );
};

export default Features;

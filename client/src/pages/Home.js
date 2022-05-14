import React from "react"
import HeroImg from '../assets/hero.svg'
import InspirationImg from '../assets/feat.svg'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

export default function Home() {

  const { t } = useTranslation();

  return (
    <div className='md:mx-28 mx-4 pt-16 pb-12 text-white'>

      <div className='md:grid md:grid-cols-2 items-center pt-4'>
        <div className=''>
          <h1 className='text-6xl'>{t('homeTitle')}</h1>
          <p className='text-xl py-4 tracking-wider text-justify'> {t('hoemAbout')} </p>

          <div className="flex flex-col space-y-4">

            <Link to="/donate">
              <button className='bg-tertiary py-2 px-8 rounded-md text-xl md:text-2xl font-[400]'>{t('navLinkDonate')}</button>
            </Link>

          </div>

        </div>
        <div className="grid place-items-center drop-shadow-3xl shadow-black">
          <img src={HeroImg} alt="img" width="400" height="400" />
        </div>
      </div>

      <div className='md:grid md:grid-cols-2 pt-12 items-center'>
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <img src={InspirationImg} alt="img" width="400" height="400" />
        </div>
        <div className=''>
          <h1 className='text-6xl'>{t('homwWhatEsle')}</h1>
          <p className='text-xl py-4 tracking-wider'> {t('homeDesc')}
          </p>
          <ul className="text-xl">
            <li className="list-disc">{t('homePt1')}</li>
            <li className="list-disc">{t('homePt2')}</li>
            <li className="list-disc">{t('homePt3')}</li>
            <li className="list-disc">{t('homePt4')}</li>
            <li className="list-disc">{t('homePt5')}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

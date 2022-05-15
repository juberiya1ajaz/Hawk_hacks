import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Map() {

    const { t } = useTranslation();

    return (
        <div className='text-white grid place-items-center'>
            <h1 className="text-5xl py-2">{t('navLinkMap')}</h1>
            <div>
                <iframe src="/Refugee_density_maps.html" width="1050" height="600" title="game"></iframe>
            </div>
        </div>
    )
}

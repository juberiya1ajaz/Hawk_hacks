import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Footer() {

    const { t } = useTranslation();

    return (
        <div className="flex text-white justify-center text-xl py-3 items-center w-full mx-auto z-50">
            &lt;/&gt;  {t('footerWith')} &nbsp;<img alt="love" src="https://img.icons8.com/color/20/000000/filled-like.png" /> &nbsp; {t('footerBy')}
        </div>
    )
}

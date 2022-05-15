import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Chatroom() {

    const { t } = useTranslation();

    return (
        <div className='text-white grid place-items-center'>
            <h1 className="text-5xl py-2">{t('navLinkChatroom')}</h1>
            <div>
                <div id="hash"></div>
            </div>
        </div>
    )
}

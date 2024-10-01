import { Link, NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import { createContext, useEffect, useState } from "react";
import Select from 'react-select'
import { useGetUtilites } from "../../hooks/useGetUtilites";



export const Header = () => {

  const { t, i18n }= useTranslation('global')
  
  const { language } = useGetUtilites();

  const handledSelectChange = ( {value} ) => {
     i18n.changeLanguage(value)
     localStorage.setItem("language", value )

  }
 
  return (
    <>
      <nav className="bg-slate-100 border-gray-200 dark:bg-gray-900 border-2">
          <div className="flex flex-wrap justify-between  items-center mx-auto max-w-screen-xl p-4">
              <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                  <span className="self-center text-2xl text-slate-500 font-semibold whitespace-nowrap justify-between dark:text-white">{ t('header.titleApp') }</span>
              </a>
              <div className="flex items-center space-x-6 rtl:space-x-reverse">
                  <a href="tel:5541251234" className="text-sm  text-gray-500 dark:text-white hover:underline">Fabricio Galarza</a>
                  <div className="w-36 text-sm  text-gray-500 dark:text-white">
                      <Select
                        defaultValue={ {label: t('header.language')} }
                        options={ language } 
                        onChange={ handledSelectChange }
                      />
                  </div>
                  <div className="w-32">
                  <NavLink to={ '/logIn' }>{  t('header.logOut') }</NavLink>
                  </div>
                  
              </div>
          </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700 ">
          <div className="max-w-screen-xl px-4 py-3 mx-auto">
              <div className="flex items-center">
                  <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                      <li className="text-xl text-slate-500 ">
                        <NavLink to={ '/dashBoard' }>{ t('header.dashboard') }</NavLink>
                      </li>
                      <li className="text-xl text-slate-500">

                        <NavLink to={ '/NewContact' }>{ t('header.newContacts') }</NavLink>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    </>
  );
}

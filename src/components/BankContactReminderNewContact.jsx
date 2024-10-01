import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from './Layout/Header';
import Select from 'react-select'
import { getAccountType, getBank } from '../helpers/services';
import { useGetUtilites } from '../hooks/useGetUtilites';

const BankContactReminderNewContact = () => {
    
    //get fields banks an account list
  const { banks,accountType } = useGetUtilites()

  const { t, i18n }= useTranslation ('global')
  return (
    <>
        <Header />
        <div className="md:container mx-auto flex justify-center bg-sky-100">
          <h1 className="text-rose-400 items-center mx-auto">{ t('newContact.title') }</h1>
        </div>
        <div className="grid grid-cols-1 flex-wrap bg-slate-300 lg:m-4   md:mx-auto my-auto rounded-2xl items-center
                      border-red-200 border-2 border-double pt-4 pl-10 pr-10 pb-4">
            <form className="mx-auto bg-slate-200 border-2 border-double flex-wrap pt-10 pl-20 pr-20 pb-10 border-red-200 rounded-3xl w-200 
                                            content-center w-auto">
                {/**Imput name */}
                <div className="relative mt-2 rounded shadow-sm w-80">
                    <input type="text" className="boder-2 border-red-200 bg-slate-50 py-2 pr-3 pl-10 w-full px-4 rounded-2xl  outline-none"
                        placeholder={ t('newAccount.txtName') } name="name"/>
                    <div className="absolute inset-y-0 left-0 flex items-center">
                        <svg className="h-7 w-7 text-red-300"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
                        </svg>
                    </div>
                </div> 
                {/**select Bank */}
                <div className="relative mt-2 rounded shadow-sm w-80">
                    <Select 
                   
                      options={banks}
                      className="boder-2 border-red-200 bg-slate-50 py-2 pr-3 pl-10 w-full px-4 rounded-2xl  outline-none"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center">
                        <svg className="h-8 w-8 text-red-300"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" 
                            stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                          <path stroke="none" d="M0 0h24v24H0z"/>  
                          <line x1="3" y1="21" x2="21" y2="21" /><line x1="3" y1="10" x2="21" y2="10" />  
                          <polyline points="5 6 12 3 19 6" />  
                          <line x1="4" y1="10" x2="4" y2="21" />  
                          <line x1="20" y1="10" x2="20" y2="21" />  
                          <line x1="8" y1="14" x2="8" y2="17" />  <line x1="12" y1="14" x2="12" y2="17" />      
                          <line x1="16" y1="14" x2="16" y2="17" />
                        </svg>
                    </div>
                </div>
                <div className='font-serif text-slate-500 text-xs text-center pt-1 pb-2'>
                        <i>{ t('newContact.labelBank') }</i>
                    </div>
                {/**select Account  */}
                <div className="relative mt-2 rounded shadow-sm w-80">  
                    <Select 
                      options={accountType} 
                      className="boder-2 border-red-200 bg-slate-50 py-2 pr-3 pl-10 w-full px-4 rounded-2xl  outline-none"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center">
                        <svg className="h-8 w-8 text-red-300"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" 
                           stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                        <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="2" />  
                        <line x1="4" y1="9" x2="20" y2="9" />
                        </svg>
                    </div>
                    
                </div>
                <div className='font-serif text-slate-500 text-xs text-center pt-1 pb-2'>
                        <i>{ t('newContact.labelAccount') }</i>
                    </div>
                {/**Account number */} 
                <div className="relative mt-2 rounded shadow-sm w-80">
                    <input type="text" className="boder-2 border-red-200 bg-slate-50 py-2 pr-3 pl-10 w-full px-4 rounded-2xl  outline-none"
                        placeholder={ t('newContact.txtNunAccount') } name="email"/>
                    <div className="absolute inset-y-0 left-0 flex items-center">
                        <svg className="h-8 w-8 text-red-300"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" 
                           stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                        <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="2" />  
                        <line x1="4" y1="9" x2="20" y2="9" />
                        </svg>
                    </div>
                    
                </div>
                {/**Account number */} 
                <div className="relative mt-2 rounded shadow-sm w-80">
                    <input type="text" className="boder-2 border-red-200 bg-slate-50 py-2 pr-3 pl-10 w-full px-4 rounded-2xl  outline-none"
                        placeholder={ t('newContact.txtPhoneNumber') } name="email"/>
                    <div className="absolute inset-y-0 left-0 flex items-center">
                    <svg className="h-8 w-8 text-red-300"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 
                            4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 
                            1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>

                    </div>
                    
                </div>               
            </form>
        </div>
    </>
  );
}

export default BankContactReminderNewContact;

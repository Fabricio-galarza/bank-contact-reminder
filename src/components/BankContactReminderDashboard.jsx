import { useEffect, useState } from "react";
import { Header } from "./Layout/Header";
import { useTranslation } from "react-i18next";

export const getContacts = () => {
  const [contacts, setContacts] = useState([]);
  
  useEffect(() => {
    fetch('json/Contacts.json')
    .then(response => response.json())
    .then(data => {
      setContacts(data)
    })
  }, [])

  return contacts;
}

export const BankContactReminderDashboard = () => {
  const { t, i18n }= useTranslation ('global')
  const Contacts = getContacts()


  return (
    <div>
        <Header/>
        <div className="md:container mx-auto flex justify-center bg-sky-100">
          <h1 className="text-rose-400 items-center mx-auto">{ t('dashBoard.title') }</h1>
        </div>
  
        <div className="grid grid-cols-3 bg-slate-300 flex-wrap lg:m-4 justify-start items-center mx-auto my-auto
                      border-red-200 border-2 border-double rounded-2xl">
            
           
                {Contacts.map(item => (
                  <div key={item.id} className="border-red-100 bg-slate-100 hover:bg-gray-100 rounded-lg my-12 mx-8 cardrounded-sm 
                                                   border-2 p-4 ">
                    <ul className="w-fuell">
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-red-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 
                                                                                                  0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        </svg>
                        <h2 className="w-fuell pl-1.5">
                        <span>{item.name}</span></h2>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-red-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" 
                            stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                          <path stroke="none" d="M0 0h24v24H0z"/>  
                          <line x1="3" y1="21" x2="21" y2="21" /><line x1="3" y1="10" x2="21" y2="10" />  
                          <polyline points="5 6 12 3 19 6" />  
                          <line x1="4" y1="10" x2="4" y2="21" />  
                          <line x1="20" y1="10" x2="20" y2="21" />  
                          <line x1="8" y1="14" x2="8" y2="17" />  <line x1="12" y1="14" x2="12" y2="17" />  
                          <line x1="16" y1="14" x2="16" y2="17" />
                        </svg>
                        <p className="w-fuell pl-1.5">{item.bank}</p>
                      </li>
                      <li className="flex items-center">
                      <svg className="h-5 w-5 text-red-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" 
                           stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                        <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="2" />  
                        <line x1="4" y1="9" x2="20" y2="9" />
                      </svg>
                      <p className="w-fuell p-1.5">{item.accountNum}</p></li>
                      
                    </ul>
                  </div>
                ))}
            </div>
            

        
    </div>
  );

  
}


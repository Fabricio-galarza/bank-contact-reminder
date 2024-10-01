import { useEffect, useState } from "react"
import { getAccountType, getBank, getLanguages } from "../helpers/services";

export const useGetUtilites = () => {

    //Declare vairable
    const [banks, setBanks] = useState([]);
    const [accountType, setAccountType] = useState([]);
    const [language, setLanguage] = useState('');

    //get banks
    const getBanks = async() => {
        const newBank = await getBank()
        setBanks(newBank)
    }

    //get AccountType
    const getAccount = async() => {
        const newAccount = await getAccountType();

        setAccountType(newAccount)
    }

    //get languages
    const getLanguage = async() => {
        const newLanguage = await getLanguages()
        setLanguage(newLanguage)
    }


    useEffect(() => {
        getBanks()
        getAccount()
        getLanguage()
        
    }, []);


    return {
        banks,
        accountType,
        language
    }
}
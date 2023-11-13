import SecondaryButton from "../../components/UI/components/Buttons/SecondaryButton";

const RezeptFindenMitZutaten = (props) => {
    const [step, setStep] = useState('start'); //start -> zutatenhinzufuegen -> detailbildzutaten -> abschließen -> rezepteliste

    const handleClick = ()=>{
        setStep('zutatenhinzufuegen')
    }

    const handleClickTwo = ()=>{
        setStep('detailbildzutaten')
    }

    const handleClickThree = ()=>{
        setStep('abschließen')
    }

    const handleClickFour = ()=>{
        setStep('rezepteliste')
    }



    return (
        <div>
            {step === 'start' &&
            <>
            
            <SecondaryButton onClick={handleClick}>
                Zutaten finden
            </SecondaryButton>
            </>
            }
            {step === 'zutatenhinzufuegen' &&
            <>
            
            <SecondaryButton onClick={handleClickTwo}>
                Weiter
            </SecondaryButton>
            </>
            }

            {step === 'detailbildzutaten' &&
            <>
             <SecondaryButton onClick={handleClickThree}>
                Hinzufügen
            </SecondaryButton>
            
            </>
            }
            {step === 'abschließen' &&
            <>
            
            <SecondaryButton onClick={handleClickFour}>
                Rezept finden 
            </SecondaryButton>
            </>
            }
            {step === 'rezepteliste' &&
            <>
            
            Rezepteliste
            </>
            }
        </div>
    );
}

export default RezeptFindenMitZutaten;
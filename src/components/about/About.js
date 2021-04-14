import React from 'react';
import './About.css'

import Person from "./Person";

export default function About() {
    return (
        <div className={'about'}>
            <Person personImage={'./img/sikor.jpg'}
                    personName={'Hubert Sikorski'}/>
            <Person personImage={'./img/wasiluk.jpg'}
                    personName={'Rafał Wasiluk'}/>
            <Person personImage={'./img/ksenia.jpg'}
                    personName={'Ksenia Domżał'}/>
            <Person personImage={'./img/krzyzanowski.jpg'}
                    personName={'Kamil Krzyzanowski'}/>
            <Person personImage={'./img/mohr.jpg'}
                    personName={'Mateusz Mohr'}/>
            <Person personImage={'./img/gorko.jpg'}
                    personName={'Maksymilian Górko'}/>
            <Person personImage={'./img/wisnia.jpg'}
                    personName={'Kamil Wiśniewski'}/>
        </div>
    )
}
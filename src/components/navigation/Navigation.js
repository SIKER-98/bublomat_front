import React from 'react';
import './Navigation.css';
import NavigationItem from '../navigationItem/NavigationItem';

class Navigation extends React.Component {


    render() {
        return (
            <header>
                <div className={"logo"}>
                    <a>Bublomat</a>
                </div>

                <nav>
                    <ul className={'navigationPage'}>
                        <NavigationItem text={'Home'}
                                        href={'/home'}/>
                        <NavigationItem text={'Search'}
                                        href={'/search'}/>
                        <NavigationItem text={'About us'}
                                        href={'/about'}/>
                        <NavigationItem text={'Contact'}
                                        href={'/contact'}/>
                    </ul>
                    <ul className={'navigationLogin'}>
                        <NavigationItem text={'Login'}
                                        href={'/login'}/>
                        <NavigationItem text={'Register'}
                                        href={'/register'}/>

                    </ul>
                </nav>
            </header>
        )
    }
}

export default Navigation;
import React from 'react';
import '../App.css';
import Profile from '../components/profile/profile';
import AddRun from '../components/addrun/addrun';
import RunTable from '../components/runtable/runtable';


const MainPage = () => {
    return (
        <div className="App">
            <main>
                <section className="left-content">
                    <Profile runCount="535" totalMiles="1600 mi" longestRun="26.2 mi" fastestPace="6:35 min/mi" />
                </section>
                <section className="right-content">
                    <div>
                        <AddRun />
                    </div>
                    <div>
                        <RunTable />
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper orci quis tellus varius pharetra. Vestibulum eu magna magna. Duis ac tortor in mauris dapibus sollicitudin. Fusce posuere vel ligula lobortis dignissim. Aenean ultrices lobortis odio nec bibendum. Aliquam non sapien lacus. Sed et urna non ligula rhoncus vehicula vel gravida ex. Duis vestibulum malesuada turpis, et venenatis enim posuere eu. Vestibulum aliquet arcu at luctus tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse gravida congue lectus ut pretium. Mauris venenatis justo vitae laoreet laoreet. Quisque congue gravida lacus vitae egestas.</p>
                        <p>Curabitur sapien felis, malesuada ut maximus et, convallis sed ligula. Sed ut purus sit amet augue accumsan iaculis. Nulla sagittis fermentum vulputate. Praesent orci justo, hendrerit eu iaculis vel, pulvinar ac est. Donec volutpat purus a nunc interdum elementum. Nunc ut lorem ipsum. Vivamus porta odio nibh, iaculis ullamcorper turpis finibus ac. Morbi sit amet est a eros porttitor volutpat. Cras vel sem id mi faucibus tempus. Etiam tortor ex, ornare sit amet placerat ac, vulputate sit amet ex. Cras vel gravida libero, quis viverra urna. Pellentesque in elit dolor. Phasellus tellus purus, aliquam non tincidunt id, feugiat eget turpis.</p>
                        <p>Morbi odio odio, imperdiet in viverra ut, finibus vitae leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies, felis in tempor dictum, odio libero mattis ex, vitae vestibulum mauris orci cursus lorem. Nulla dignissim mauris ut ullamcorper vehicula. Vestibulum eget arcu sagittis, rutrum nunc ut, tincidunt ipsum. Proin mollis eget felis vitae consectetur. Vestibulum orci ex, bibendum vitae mi at, vulputate vehicula urna. Vestibulum vitae sem maximus, rhoncus nulla sed, tincidunt dui. Phasellus placerat sem commodo tellus bibendum, eget rhoncus purus ornare. In ullamcorper, mauris id fermentum sodales, leo dolor viverra libero, at finibus dolor purus a turpis. Suspendisse potenti. Phasellus purus nunc, aliquam ut vestibulum in, finibus ut leo. Pellentesque convallis nulla et purus bibendum auctor.</p>
                    </div>
                </section>

            </main>

        </div>
    );
}

export default MainPage;
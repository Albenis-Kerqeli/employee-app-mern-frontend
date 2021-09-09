
import {memo} from 'react';
import Row from './Row'
import Table from './Table';
const Hero  = memo(() => {
return(
    <section className="w-full   py-4 flex flex-col items-center justify-center flex-wrap">
    <Row/>
        <Table/>
    </section>
)
});

export default Hero;
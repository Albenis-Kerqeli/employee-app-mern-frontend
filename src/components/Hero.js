import React from 'react';
import Row from './Row';

const Table = React.lazy(() => import('../components/Table'));

const Hero  = React.memo(() => {
return(
    <section className="w-full   py-4 flex flex-col items-center justify-center flex-wrap">
    <Row/>
        <Table/>
    </section>
)
});

export default Hero;
import Table from './Table';
import React from 'react';
import Row from './Row';
const Hero  = React.memo(() => {
return(
    <section className="w-full   py-4 flex flex-col items-center justify-center flex-wrap">
    <Row/>
        <Table/>
    </section>
)
});

export default Hero;
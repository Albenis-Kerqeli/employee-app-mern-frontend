import React from 'react';
const Table = React.lazy(() => import('../components/Table'));
const Row = React.lazy(() => import('../components/Row'));
const Hero  = React.memo(() => {
return(
    <section className="w-full   py-4 flex flex-col items-center justify-center flex-wrap">
    <Row/>
        <Table/>
    </section>
)
});

export default Hero;
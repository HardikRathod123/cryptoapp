import { Container, HStack } from '@chakra-ui/react';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { server } from '../index'
import ErrorComponent from './ErrorComponent';
import ExchangeCard from './Cards/ExchangeCard';
import Loader from './Loader';

const Exchanges = () => {
    
    const [exchanges, setExchanges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchExchanges = async () => {
            try {
                const { data } = await axios.get(`${server}/exchanges`);
                setExchanges(data);
                setLoading(false); // component mounted so cancel the loading
            
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        };
            fetchExchanges();
    }, [])

    if (error) return <ErrorComponent message={'Error While Fetching Exchanges'} />;
    
    return (
        <Container
            maxW={'container.xl'}
        >
            {loading ? <Loader /> :
                <>
                    <HStack
                        wrap={'wrap'}
                        justifyContent='space-evenly'
                    >
                        {
                            exchanges.map((i) => (
                                <ExchangeCard
                                    key={i.id}
                                    name={i.name}
                                    img={i.image}
                                    rank={i.trust_score_rank}
                                    url={i.url} 
                                    />    
                            ))
                        }
                    </HStack>
                </>
            }
        </Container>
    );
}

export default Exchanges

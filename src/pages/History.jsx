import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import supabase from '../supabase';

const History = () => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    const [favorites, setFavorites] = useState([]);
    const [downloads, setDownloads] = useState([]);

    useEffect(() => {
        const getFavorites = async () => {
            const { data, error } = await supabase
                .from('favoriteImages')
                .select()
                .eq('userId', user.id);
            
            if(error) console.error(error);
            else setFavorites(data);
        }

        getFavorites();
    }, [favorites]);

    useEffect(() => {
        const getDownloads = async () => {
            const { data, error } = await supabase
                .from('downloadImages')
                .select()
                .eq('userId', user.id);
            
            if(error) console.error(error);
            else setDownloads(data);
        }

        getDownloads();
    }, [downloads]);
  return (
    <div>
        <Header />

        <div>
            <div className='m-5'>
                <div className='md:text-3xl font-bold'>Previously Downloaded Images</div>
                <div className='flex flex-wrap'>
                    {downloads.map((favorite, index) => (
                        <img src={favorite.url} index={index} className='h-44 m-2' />
                    ))}
                </div>
            </div>
            <div className='m-5'>
                <div className='md:text-3xl font-bold'>Favorite Images</div>
                <div className='flex flex-wrap'>
                    {favorites.map((favorite, index) => (
                        <img src={favorite.url} index={index} className='h-44 m-2' />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default History